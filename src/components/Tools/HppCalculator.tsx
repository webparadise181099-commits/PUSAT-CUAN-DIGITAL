import React, { useState } from 'react';
import { Calculator, Copy, Check, RotateCcw, TrendingUp, Sparkles, DollarSign } from 'lucide-react';
import { formatRupiah } from '../../utils/format';

export const HppCalculator: React.FC = () => {
  const [bahanBaku, setBahanBaku] = useState<number>(8000);
  const [tenagaKerja, setTenagaKerja] = useState<number>(2000);
  const [kemasan, setKemasan] = useState<number>(1500);
  const [operasional, setOperasional] = useState<number>(1000);
  const [marginPersen, setMarginPersen] = useState<number>(45);
  const [diskonPersen, setDiskonPersen] = useState<number>(0);
  const [kenaPpn, setKenaPpn] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Perhitungan HPP
  const totalHpp = bahanBaku + tenagaKerja + kemasan + operasional;
  
  // Harga Jual Dasar sebelum diskon berdasarkan margin yang diinginkan
  // Rumus: HPP / (1 - margin%)
  const marginRatio = Math.min(Math.max(marginPersen / 100, 0), 0.95);
  const hargaDasar = marginRatio < 1 ? Math.round(totalHpp / (1 - marginRatio)) : totalHpp * 2;
  
  // Jika ada diskon promosi
  const nilaiDiskon = Math.round((hargaDasar * diskonPersen) / 100);
  const hargaSetelahDiskon = hargaDasar - nilaiDiskon;
  
  // Jika PPN 11%
  const nilaiPpn = kenaPpn ? Math.round(hargaSetelahDiskon * 0.11) : 0;
  const hargaJualAkhir = hargaSetelahDiskon + nilaiPpn;

  // Laba Bersih riil
  const labaBersihPerUnit = hargaSetelahDiskon - totalHpp;
  const marginAktualPersen = hargaSetelahDiskon > 0 
    ? Math.round((labaBersihPerUnit / hargaSetelahDiskon) * 100) 
    : 0;

  const handleCopySummary = () => {
    const text = `📊 RINCIAN HARGA JUAL & HPP (PusatUsaha ID)
--------------------------------------
• Modal Bahan Baku: ${formatRupiah(bahanBaku)}
• Biaya Tenaga Kerja: ${formatRupiah(tenagaKerja)}
• Biaya Kemasan: ${formatRupiah(kemasan)}
• Biaya Operasional: ${formatRupiah(operasional)}
--------------------------------------
Total HPP / Modal per Unit: ${formatRupiah(totalHpp)}
Target Margin: ${marginPersen}%
Rekomendasi Harga Jual: ${formatRupiah(hargaJualAkhir)}
Keuntungan Bersih per Unit: ${formatRupiah(labaBersihPerUnit)} (Margin ${marginAktualPersen}%)

Proyeksi Laba Bersih:
• 50 Penjualan: ${formatRupiah(labaBersihPerUnit * 50)}
• 100 Penjualan: ${formatRupiah(labaBersihPerUnit * 100)}
• 500 Penjualan: ${formatRupiah(labaBersihPerUnit * 500)}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const setPreset = (b: number, t: number, k: number, o: number, m: number) => {
    setBahanBaku(b);
    setTenagaKerja(t);
    setKemasan(k);
    setOperasional(o);
    setMarginPersen(m);
    setDiskonPersen(0);
    setKenaPpn(false);
  };

  const handleReset = () => {
    setBahanBaku(0);
    setTenagaKerja(0);
    setKemasan(0);
    setOperasional(0);
    setMarginPersen(40);
    setDiskonPersen(0);
    setKenaPpn(false);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
      {/* Header Alat */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            <span>Alat Bantu Keuangan UMKM</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">
            Kalkulator HPP & Rekomendasi Harga Jual
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Hitung modal pokok, margin keuntungan aman, dan harga jual produk agar terhindar dari rugi terselubung.
          </p>
        </div>

        {/* Contoh Cepat Preset */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-500 font-medium">Contoh Cepat:</span>
          <button
            onClick={() => setPreset(7500, 2000, 1500, 1000, 50)}
            className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium transition-colors"
          >
            Kopi Susu
          </button>
          <button
            onClick={() => setPreset(35000, 10000, 3000, 4000, 40)}
            className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium transition-colors"
          >
            Kaos Sablon
          </button>
          <button
            onClick={() => setPreset(4000, 1000, 1200, 800, 45)}
            className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium transition-colors"
          >
            Keripik Kemasan
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Kolom Input Form */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">
            1. Masukkan Komponen Biaya per Produk
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Biaya Bahan Baku Pokok (Rp)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-semibold">Rp</span>
                <input
                  type="number"
                  min="0"
                  step="500"
                  value={bahanBaku || ''}
                  onChange={(e) => setBahanBaku(Number(e.target.value) || 0)}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                  placeholder="0"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Biji kopi, kain, tepung, daging, dll.</p>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Biaya Tenaga Kerja per Satuan (Rp)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-semibold">Rp</span>
                <input
                  type="number"
                  min="0"
                  step="500"
                  value={tenagaKerja || ''}
                  onChange={(e) => setTenagaKerja(Number(e.target.value) || 0)}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                  placeholder="0"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Upah per porsi / honor pembuat</p>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Biaya Kemasan & Label (Rp)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-semibold">Rp</span>
                <input
                  type="number"
                  min="0"
                  step="200"
                  value={kemasan || ''}
                  onChange={(e) => setKemasan(Number(e.target.value) || 0)}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                  placeholder="0"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Cup, botol, plastik, stiker, paperbag</p>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Biaya Operasional & Gas/Listrik (Rp)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-semibold">Rp</span>
                <input
                  type="number"
                  min="0"
                  step="200"
                  value={operasional || ''}
                  onChange={(e) => setOperasional(Number(e.target.value) || 0)}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                  placeholder="0"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Gas elpiji, listrik pendingin, air, sabun</p>
            </div>
          </div>

          <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide pt-3 border-t border-slate-100">
            2. Target Keuntungan & Penyesuaian
          </h3>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-medium text-slate-700">
                  Target Margin Keuntungan Kotor
                </label>
                <span className="text-sm font-bold text-emerald-700">{marginPersen}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="85"
                step="5"
                value={marginPersen}
                onChange={(e) => setMarginPersen(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>Ritel Minim (15%)</span>
                <span>Umum Makanan (40-50%)</span>
                <span>Fashion & Kreatif (60%+)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Diskon Promosi Pembeli (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max="90"
                    value={diskonPersen}
                    onChange={(e) => setDiskonPersen(Math.min(90, Math.max(0, Number(e.target.value) || 0)))}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                    placeholder="0"
                  />
                  <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-semibold">%</span>
                </div>
              </div>

              <div className="flex items-center pt-5">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={kenaPpn}
                    onChange={(e) => setKenaPpn(e.target.checked)}
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300"
                  />
                  <span className="text-xs font-medium text-slate-700">
                    Tambahkan PPN 11% ke Konsumen
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Angka
            </button>
          </div>
        </div>

        {/* Kolom Hasil & Rekapitulasi */}
        <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-medium text-slate-400">Total Modal Pokok (HPP)</span>
              <span className="text-sm font-bold text-slate-200 font-mono tabular-nums">
                {formatRupiah(totalHpp)}
              </span>
            </div>

            <div className="py-5 text-center">
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                Rekomendasi Harga Jual Konsumen
              </span>
              <div className="text-3xl md:text-4xl font-extrabold text-white mt-1 font-mono tracking-tight tabular-nums">
                {formatRupiah(hargaJualAkhir)}
              </div>
              {diskonPersen > 0 && (
                <div className="text-xs text-slate-400 mt-1 line-through">
                  Harga Coret Sebelum Diskon: {formatRupiah(hargaDasar)}
                </div>
              )}
            </div>

            <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span>Keuntungan Bersih / Pcs:</span>
                <span className="font-bold text-emerald-400 font-mono tabular-nums">
                  {formatRupiah(labaBersihPerUnit)}
                </span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Margin Keuntungan Riil:</span>
                <span className="font-semibold text-slate-200">{marginAktualPersen}%</span>
              </div>
              {kenaPpn && (
                <div className="flex justify-between items-center text-slate-400">
                  <span>Porsi PPN 11%:</span>
                  <span className="font-mono tabular-nums">{formatRupiah(nilaiPpn)}</span>
                </div>
              )}
            </div>

            {/* Proyeksi Penjualan */}
            <div className="mt-5 p-3.5 bg-slate-800/80 rounded-lg border border-slate-700/60">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200 mb-2">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>Simulasi Laba Bersih Total:</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-slate-900/60 p-2 rounded">
                  <div className="text-slate-400 text-[10px]">50 Pcs</div>
                  <div className="font-bold text-white font-mono tabular-nums mt-0.5">
                    {formatRupiah(labaBersihPerUnit * 50)}
                  </div>
                </div>
                <div className="bg-slate-900/60 p-2 rounded">
                  <div className="text-slate-400 text-[10px]">100 Pcs</div>
                  <div className="font-bold text-white font-mono tabular-nums mt-0.5">
                    {formatRupiah(labaBersihPerUnit * 100)}
                  </div>
                </div>
                <div className="bg-slate-900/60 p-2 rounded">
                  <div className="text-slate-400 text-[10px]">500 Pcs</div>
                  <div className="font-bold text-emerald-400 font-mono tabular-nums mt-0.5">
                    {formatRupiah(labaBersihPerUnit * 500)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={handleCopySummary}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium text-xs transition active:scale-[0.98]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Rincian Berhasil Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Salin Rincian Perhitungan</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
