import React, { useState, useEffect } from 'react';
import { Wallet, PlusCircle, ArrowUpRight, ArrowDownLeft, Download, Trash2, Search, Filter, RefreshCw, AlertCircle } from 'lucide-react';
import { BukuKasEntry } from '../../types';
import { INITIAL_CASHFLOW } from '../../data/initialData';
import { formatRupiah, formatTanggalIndonesia } from '../../utils/format';

const STORAGE_KEY = 'pusatusaha_bukukas_v1';

export const BukuKas: React.FC = () => {
  const [entries, setEntries] = useState<BukuKasEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading cashflow data', e);
    }
    return INITIAL_CASHFLOW;
  });

  // Form states
  const [tipe, setTipe] = useState<'masuk' | 'keluar'>('masuk');
  const [jumlah, setJumlah] = useState<number | ''>('');
  const [kategori, setKategori] = useState<string>('Penjualan');
  const [keterangan, setKeterangan] = useState<string>('');
  const [tanggal, setTanggal] = useState<string>(new Date().toISOString().split('T')[0]);

  // Filter states
  const [filterTipe, setFilterTipe] = useState<string>('semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch (e) {
      console.error('Error saving cashflow data', e);
    }
  }, [entries]);

  // Perhitungan Keuangan
  const totalMasuk = entries
    .filter(e => e.tipe === 'masuk')
    .reduce((acc, curr) => acc + curr.jumlah, 0);

  const totalKeluar = entries
    .filter(e => e.tipe === 'keluar')
    .reduce((acc, curr) => acc + curr.jumlah, 0);

  const saldoKas = totalMasuk - totalKeluar;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jumlah || Number(jumlah) <= 0) return;

    const newEntry: BukuKasEntry = {
      id: `cf-${Date.now()}`,
      tanggal,
      tipe,
      kategori,
      jumlah: Number(jumlah),
      keterangan: keterangan.trim() || (tipe === 'masuk' ? 'Pemasukan Kas' : 'Pengeluaran Kas'),
      createdAt: Date.now()
    };

    setEntries([newEntry, ...entries]);
    setJumlah('');
    setKeterangan('');
  };

  const handleDelete = (id: string) => {
    setEntries(entries.filter(e => e.id !== id));
  };

  const handleResetData = () => {
    if (window.confirm('Apakah Anda yakin ingin mengatur ulang data buku kas ke data awal?')) {
      setEntries(INITIAL_CASHFLOW);
    }
  };

  const handleExportCSV = () => {
    const headers = ['ID', 'Tanggal', 'Tipe', 'Kategori', 'Nominal (Rp)', 'Keterangan'];
    const rows = entries.map(e => [
      e.id,
      e.tanggal,
      e.tipe === 'masuk' ? 'Pemasukan' : 'Pengeluaran',
      `"${e.kategori}"`,
      e.jumlah,
      `"${e.keterangan.replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `buku-kas-umkm-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredEntries = entries.filter(item => {
    const matchTipe = filterTipe === 'semua' || item.tipe === filterTipe;
    const matchSearch = item.keterangan.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.kategori.toLowerCase().includes(searchQuery.toLowerCase());
    return matchTipe && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Kartu Ringkasan Saldo (3 Metrik) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Kas Masuk</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ArrowDownLeft className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
            {formatRupiah(totalMasuk)}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Akumulasi seluruh pemasukan penjualan</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Kas Keluar</span>
            <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
            {formatRupiah(totalKeluar)}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Biaya belanja modal, kemasan & sewa</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Saldo Bersih Saat Ini</span>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${saldoKas >= 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
              <Wallet className="w-4 h-4" />
            </div>
          </div>
          <div className={`text-2xl font-bold font-mono tabular-nums ${saldoKas >= 0 ? 'text-emerald-700' : 'text-red-600'}`}>
            {formatRupiah(saldoKas)}
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Dana tunai kas operasional usaha</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Formulir Catat Transaksi Baru */}
        <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <PlusCircle className="w-4 h-4 text-emerald-600" />
              <span>Catat Transaksi Kas Baru</span>
            </h3>
            <span className="text-xs text-slate-400">Tersimpan Otomatis</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Pilihan Jenis Transaksi */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-lg">
              <button
                type="button"
                onClick={() => {
                  setTipe('masuk');
                  setKategori('Penjualan');
                }}
                className={`py-2 text-xs font-semibold rounded-md transition flex items-center justify-center gap-1.5 ${
                  tipe === 'masuk' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ArrowDownLeft className="w-3.5 h-3.5" />
                Kas Masuk (+)
              </button>
              <button
                type="button"
                onClick={() => {
                  setTipe('keluar');
                  setKategori('Bahan Baku');
                }}
                className={`py-2 text-xs font-semibold rounded-md transition flex items-center justify-center gap-1.5 ${
                  tipe === 'keluar' ? 'bg-red-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
                Kas Keluar (-)
              </button>
            </div>

            {/* Nominal */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Nominal Jumlah Uang (Rp) *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-semibold">Rp</span>
                <input
                  type="number"
                  min="100"
                  step="500"
                  required
                  value={jumlah}
                  onChange={(e) => setJumlah(e.target.value === '' ? '' : Number(e.target.value))}
                  placeholder="Contoh: 150000"
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none font-mono"
                />
              </div>
            </div>

            {/* Kategori */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Kategori Transaksi
              </label>
              <select
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
              >
                {tipe === 'masuk' ? (
                  <>
                    <option value="Penjualan">Penjualan Produk / Jasa</option>
                    <option value="Modal Awal">Tambahan Modal Usaha</option>
                    <option value="Pelunasan Piutang">Pelunasan Piutang Konsumen</option>
                    <option value="Pemasukan Lainnya">Pemasukan Lainnya</option>
                  </>
                ) : (
                  <>
                    <option value="Bahan Baku">Belanja Bahan Baku Pokok</option>
                    <option value="Kemasan">Kemasan & Plastik</option>
                    <option value="Operasional">Listrik, Air & Gas</option>
                    <option value="Gaji / Upah">Upah Tenaga Kerja</option>
                    <option value="Sewa Tempat">Sewa Kios / Tempat</option>
                    <option value="Pengeluaran Lainnya">Pengeluaran Lainnya</option>
                  </>
                )}
              </select>
            </div>

            {/* Tanggal */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Tanggal Transaksi</label>
              <input
                type="date"
                required
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            {/* Keterangan */}
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Keterangan / Catatan Singkat</label>
              <input
                type="text"
                value={keterangan}
                onChange={(e) => setKeterangan(e.target.value)}
                placeholder="Misal: Penjualan 10 porsi nasi bakar"
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium text-xs transition shadow-sm"
            >
              Simpan Transaksi Kas
            </button>
          </form>
        </div>

        {/* Tabel Riwayat Transaksi */}
        <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between">
          <div>
            {/* Header Riwayat & Tools */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">Riwayat Catatan Kas</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Menampilkan {filteredEntries.length} dari total {entries.length} catatan transaksi
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleExportCSV}
                  className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition flex items-center gap-1.5"
                  title="Unduh format spreadsheet CSV"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh CSV</span>
                </button>
                <button
                  onClick={handleResetData}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg transition"
                  title="Kembalikan data awal contoh"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Baris Filter & Pencarian */}
            <div className="flex flex-col sm:flex-row items-center gap-3 my-4">
              <div className="relative w-full sm:flex-1">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari transaksi / keterangan..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex items-center gap-1 w-full sm:w-auto p-1 bg-slate-100 rounded-lg">
                <button
                  onClick={() => setFilterTipe('semua')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition ${
                    filterTipe === 'semua' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Semua
                </button>
                <button
                  onClick={() => setFilterTipe('masuk')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition ${
                    filterTipe === 'masuk' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Masuk
                </button>
                <button
                  onClick={() => setFilterTipe('keluar')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition ${
                    filterTipe === 'keluar' ? 'bg-white text-red-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Keluar
                </button>
              </div>
            </div>

            {/* List Transaksi */}
            <div className="divide-y divide-slate-100 max-h-96 overflow-y-auto">
              {filteredEntries.length === 0 ? (
                <div className="py-12 text-center text-slate-400 text-xs">
                  Tidak ada catatan transaksi yang sesuai dengan filter atau pencarian.
                </div>
              ) : (
                filteredEntries.map((item) => (
                  <div key={item.id} className="py-3 flex items-center justify-between hover:bg-slate-50 px-2 rounded-lg transition">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-7 h-7 rounded-full mt-0.5 flex items-center justify-center shrink-0 ${
                          item.tipe === 'masuk' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                        }`}
                      >
                        {item.tipe === 'masuk' ? <ArrowDownLeft className="w-3.5 h-3.5" /> : <ArrowUpRight className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className="text-xs font-medium text-slate-900">{item.keterangan}</div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                          <span>{item.kategori}</span>
                          <span>·</span>
                          <span>{formatTanggalIndonesia(item.tanggal)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-bold font-mono tabular-nums ${
                          item.tipe === 'masuk' ? 'text-emerald-700' : 'text-red-600'
                        }`}
                      >
                        {item.tipe === 'masuk' ? '+' : '-'}{formatRupiah(item.jumlah)}
                      </span>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-slate-300 hover:text-red-500 transition p-1"
                        title="Hapus baris"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Buku kas otomatis tersimpan di peramban Anda</span>
            <span className="font-semibold text-slate-700">Saldo: {formatRupiah(saldoKas)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
