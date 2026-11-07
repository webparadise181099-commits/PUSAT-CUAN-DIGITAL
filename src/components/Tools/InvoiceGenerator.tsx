import React, { useState } from 'react';
import { FileText, Plus, Trash2, Printer, Copy, Check, Share2, RefreshCw } from 'lucide-react';
import { formatRupiah, formatTanggalIndonesia } from '../../utils/format';
import { InvoiceItem, InvoiceData } from '../../types';

export const InvoiceGenerator: React.FC = () => {
  const [data, setData] = useState<InvoiceData>({
    namaToko: 'Warung Kopi & Snack Berkah',
    alamatToko: 'Jl. Melati No. 15, Bandung · WA: 0812-3456-7890',
    nomorWA: '081234567890',
    nomorInvoice: `INV-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}-001`,
    tanggal: new Date().toISOString().split('T')[0],
    jatuhTempo: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
    namaPelanggan: 'Bapak Ahmad Fauzi',
    alamatPelanggan: 'Jl. Kemuning Raya No. 4, Cimahi',
    items: [
      { id: '1', nama: 'Kopi Arabika Puntang 250gr', qty: 2, harga: 45000 },
      { id: '2', nama: 'Cold Brew Botol 250ml', qty: 5, harga: 18000 },
      { id: '3', nama: 'Keripik Singkong Renyah 150gr', qty: 3, harga: 12000 }
    ],
    catatan: 'Terima kasih atas pesanan Anda. Pembayaran transfer ke BCA: 123-456-7890 a.n. Berkah Sejahtera.',
    diskonPersen: 5,
    pajakPersen: 0
  });

  const [copiedWA, setCopiedWA] = useState<boolean>(false);

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      nama: '',
      qty: 1,
      harga: 0
    };
    setData({ ...data, items: [...data.items, newItem] });
  };

  const removeItem = (id: string) => {
    if (data.items.length <= 1) return;
    setData({ ...data, items: data.items.filter(item => item.id !== id) });
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: any) => {
    setData({
      ...data,
      items: data.items.map(item => {
        if (item.id === id) {
          return { ...item, [field]: value };
        }
        return item;
      })
    });
  };

  // Kalkulasi total
  const subtotal = data.items.reduce((acc, item) => acc + (item.qty * item.harga), 0);
  const nilaiDiskon = Math.round((subtotal * data.diskonPersen) / 100);
  const subtotalSetelahDiskon = subtotal - nilaiDiskon;
  const nilaiPajak = Math.round((subtotalSetelahDiskon * data.pajakPersen) / 100);
  const grandTotal = subtotalSetelahDiskon + nilaiPajak;

  const handlePrint = () => {
    window.print();
  };

  const generateWAText = () => {
    let text = `*NOTA PEMBAYARAN - ${data.namaToko.toUpperCase()}*\n`;
    text += `No. Nota: ${data.nomorInvoice}\n`;
    text += `Tanggal: ${formatTanggalIndonesia(data.tanggal)}\n`;
    text += `Kepada: ${data.namaPelanggan}\n`;
    text += `--------------------------------\n`;
    data.items.forEach((item, idx) => {
      text += `${idx + 1}. ${item.nama || 'Barang'} (${item.qty}x) = ${formatRupiah(item.qty * item.harga)}\n`;
    });
    text += `--------------------------------\n`;
    text += `Subtotal: ${formatRupiah(subtotal)}\n`;
    if (data.diskonPersen > 0) {
      text += `Diskon (${data.diskonPersen}%): -${formatRupiah(nilaiDiskon)}\n`;
    }
    if (data.pajakPersen > 0) {
      text += `Pajak (${data.pajakPersen}%): +${formatRupiah(nilaiPajak)}\n`;
    }
    text += `*TOTAL PEMBAYARAN: ${formatRupiah(grandTotal)}*\n\n`;
    text += `_${data.catatan}_`;
    return text;
  };

  const handleCopyWA = () => {
    const text = generateWAText();
    navigator.clipboard.writeText(text);
    setCopiedWA(true);
    setTimeout(() => setCopiedWA(false), 2000);
  };

  const handleReset = () => {
    setData({
      namaToko: '',
      alamatToko: '',
      nomorWA: '',
      nomorInvoice: `INV-${Date.now().toString().slice(-6)}`,
      tanggal: new Date().toISOString().split('T')[0],
      jatuhTempo: '',
      namaPelanggan: '',
      alamatPelanggan: '',
      items: [{ id: '1', nama: '', qty: 1, harga: 0 }],
      catatan: 'Terima kasih telah berbelanja!',
      diskonPersen: 0,
      pajakPersen: 0
    });
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
      {/* Header Alat */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4 no-print">
        <div>
          <div className="flex items-center gap-2 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-1">
            <FileText className="w-4 h-4" />
            <span>Alat Kasir & Penagihan</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">
            Pembuat Nota & Invoice Digital Siap Cetak
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Buat tanda terima belanja atau faktur tagihan resmi, unduh PDF/cetak, atau kirim rincian teks via WhatsApp.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Formulir Baru
          </button>
          <button
            onClick={handleCopyWA}
            className="px-3 py-2 text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition flex items-center gap-1.5"
          >
            {copiedWA ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
            {copiedWA ? 'Tersalin!' : 'Format WhatsApp'}
          </button>
          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition flex items-center gap-1.5 shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            Cetak / PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Editor Form (Disembunyikan saat cetak) */}
        <div className="lg:col-span-6 space-y-4 no-print">
          <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">
            1. Identitas Usaha & Pelanggan
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Nama Usaha / Toko</label>
              <input
                type="text"
                value={data.namaToko}
                onChange={(e) => setData({ ...data, namaToko: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                placeholder="Nama Toko Anda"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">No. Invoice / Nota</label>
              <input
                type="text"
                value={data.nomorInvoice}
                onChange={(e) => setData({ ...data, nomorInvoice: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-slate-700 mb-1">Alamat & Kontak Toko</label>
              <input
                type="text"
                value={data.alamatToko}
                onChange={(e) => setData({ ...data, alamatToko: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                placeholder="Jl. Melati No. 15, Bandung · WA: 0812-..."
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Nama Pembeli</label>
              <input
                type="text"
                value={data.namaPelanggan}
                onChange={(e) => setData({ ...data, namaPelanggan: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                placeholder="Nama Pembeli"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Tanggal Nota</label>
              <input
                type="date"
                value={data.tanggal}
                onChange={(e) => setData({ ...data, tanggal: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
          </div>

          <div className="pt-2">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">
                2. Daftar Barang / Layanan
              </h3>
              <button
                onClick={addItem}
                className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 hover:text-emerald-800"
              >
                <Plus className="w-3.5 h-3.5" />
                Tambah Baris
              </button>
            </div>

            <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
              {data.items.map((item, index) => (
                <div key={item.id} className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-200">
                  <span className="text-xs text-slate-400 w-4 text-center">{index + 1}</span>
                  <input
                    type="text"
                    value={item.nama}
                    onChange={(e) => updateItem(item.id, 'nama', e.target.value)}
                    placeholder="Nama Barang/Jasa"
                    className="flex-1 px-2.5 py-1.5 text-xs bg-white border border-slate-300 rounded outline-none focus:border-emerald-500"
                  />
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) => updateItem(item.id, 'qty', Math.max(1, Number(e.target.value) || 1))}
                    className="w-16 px-2 py-1.5 text-xs bg-white border border-slate-300 rounded text-center outline-none focus:border-emerald-500"
                    title="Jumlah"
                  />
                  <input
                    type="number"
                    min="0"
                    step="1000"
                    value={item.harga}
                    onChange={(e) => updateItem(item.id, 'harga', Number(e.target.value) || 0)}
                    placeholder="Harga"
                    className="w-24 px-2 py-1.5 text-xs bg-white border border-slate-300 rounded text-right outline-none focus:border-emerald-500 font-mono"
                    title="Harga Satuan"
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    disabled={data.items.length <= 1}
                    className="p-1.5 text-slate-400 hover:text-red-500 disabled:opacity-30 transition"
                    title="Hapus baris"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Diskon (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={data.diskonPersen}
                onChange={(e) => setData({ ...data, diskonPersen: Number(e.target.value) || 0 })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Pajak PPN (%)</label>
              <input
                type="number"
                min="0"
                max="50"
                value={data.pajakPersen}
                onChange={(e) => setData({ ...data, pajakPersen: Number(e.target.value) || 0 })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Catatan / Keterangan Pembayaran</label>
            <textarea
              rows={2}
              value={data.catatan}
              onChange={(e) => setData({ ...data, catatan: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
            />
          </div>
        </div>

        {/* Live Preview Nota / Lembar Cetak */}
        <div className="lg:col-span-6">
          <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200 font-sans shadow-sm print:shadow-none print:p-0 print:border-none print:bg-white">
            {/* Header Nota */}
            <div className="flex justify-between items-start border-b border-slate-300 pb-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900">{data.namaToko || 'Nama Toko Anda'}</h4>
                <p className="text-xs text-slate-500 max-w-xs mt-0.5">{data.alamatToko || 'Alamat & Kontak Toko'}</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">TANDA TERIMA</span>
                <span className="text-sm font-semibold font-mono text-slate-800">{data.nomorInvoice}</span>
              </div>
            </div>

            {/* Meta Nota */}
            <div className="grid grid-cols-2 gap-4 py-4 text-xs text-slate-600 border-b border-slate-200">
              <div>
                <span className="text-slate-400 block text-[11px]">DITUJUKAN KEPADA:</span>
                <span className="font-semibold text-slate-900">{data.namaPelanggan || 'Pelanggan Umum'}</span>
                {data.alamatPelanggan && <p className="text-slate-500 mt-0.5">{data.alamatPelanggan}</p>}
              </div>
              <div className="text-right">
                <span className="text-slate-400 block text-[11px]">TANGGAL TERBIT:</span>
                <span className="font-medium text-slate-800">{formatTanggalIndonesia(data.tanggal)}</span>
              </div>
            </div>

            {/* Tabel Item Nota */}
            <table className="w-full text-xs text-left my-4">
              <thead>
                <tr className="border-b border-slate-300 text-slate-500">
                  <th className="py-2 font-semibold">Barang / Deskripsi</th>
                  <th className="py-2 text-center font-semibold w-12">Qty</th>
                  <th className="py-2 text-right font-semibold w-24">Harga</th>
                  <th className="py-2 text-right font-semibold w-24">Jumlah</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {data.items.map((item, idx) => (
                  <tr key={idx}>
                    <td className="py-2 font-medium text-slate-800">{item.nama || 'Item Belanja'}</td>
                    <td className="py-2 text-center text-slate-600">{item.qty}</td>
                    <td className="py-2 text-right text-slate-600 font-mono tabular-nums">{formatRupiah(item.harga)}</td>
                    <td className="py-2 text-right font-semibold text-slate-900 font-mono tabular-nums">
                      {formatRupiah(item.qty * item.harga)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Total Ringkasan */}
            <div className="border-t border-slate-300 pt-3 space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal Barang:</span>
                <span className="font-mono tabular-nums">{formatRupiah(subtotal)}</span>
              </div>
              {data.diskonPersen > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Potongan Diskon ({data.diskonPersen}%):</span>
                  <span className="font-mono tabular-nums">-{formatRupiah(nilaiDiskon)}</span>
                </div>
              )}
              {data.pajakPersen > 0 && (
                <div className="flex justify-between text-slate-600">
                  <span>Pajak PPN ({data.pajakPersen}%):</span>
                  <span className="font-mono tabular-nums">+{formatRupiah(nilaiPajak)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-bold text-slate-900 border-t border-slate-300 pt-2">
                <span>TOTAL AKHIR:</span>
                <span className="text-base text-emerald-700 font-mono tabular-nums">{formatRupiah(grandTotal)}</span>
              </div>
            </div>

            {/* Catatan Kaki */}
            {data.catatan && (
              <div className="mt-6 pt-3 border-t border-dashed border-slate-300 text-[11px] text-slate-500 italic">
                {data.catatan}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
