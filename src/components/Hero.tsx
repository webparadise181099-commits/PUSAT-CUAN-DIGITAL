import React from 'react';
import { Calculator, FileText, QrCode, Mail, Sparkles, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface HeroProps {
  activeTool: 'hpp' | 'invoice' | 'qr' | 'surat' | 'promo';
  setActiveTool: (tool: 'hpp' | 'invoice' | 'qr' | 'surat' | 'promo') => void;
  onExploreDirectory: () => void;
}

export const Hero: React.FC<HeroProps> = ({ activeTool, setActiveTool, onExploreDirectory }) => {
  const tools = [
    { id: 'hpp', label: 'Kalkulator HPP', icon: Calculator, desc: 'Hitung modal pokok & margin untung' },
    { id: 'invoice', label: 'Nota Kasir / PDF', icon: FileText, desc: 'Buat & cetak tanda terima instan' },
    { id: 'qr', label: 'Kode QR Toko', icon: QrCode, desc: 'QR WhatsApp, link & nomor rekening' },
    { id: 'surat', label: 'Surat Niaga', icon: Mail, desc: 'Penawaran harga, MoU, & tagihan' },
    { id: 'promo', label: 'Teks Promo WA', icon: Sparkles, desc: 'Copywriting diskon siap sebar' },
  ] as const;

  return (
    <div className="pt-8 pb-4">
      {/* Editorial Headline */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md mb-4 border border-emerald-200/60">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>100% Gratis · Tanpa Biaya Tersembunyi · Tanpa Iklan Palsu</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
          Portal Alat Bantu Usaha & Layanan Terpadu Indonesia
        </h1>

        <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
          Solusi praktis dan lengkap untuk pedagang, UMKM, dan masyarakat. Gunakan kalkulator harga jual, cetak nota kasir, buat kode QR toko, dan catat keuangan kas secara gratis.
        </p>

        {/* Quick Highlights / Proof Adjacency */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 mt-5 text-xs text-slate-600">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Tersimpan aman di peramban</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Langsung pakai tanpa daftar akun</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Bisa diakses dari HP & Komputer</span>
          </div>
        </div>
      </div>

      {/* Segmented Tool Switcher Buttons */}
      <div className="mt-8 pt-6 border-t border-slate-200">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Pilih Alat Usaha yang Ingin Digunakan:
          </span>
          <button
            onClick={onExploreDirectory}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
          >
            <span>Buka Direktori Bisnis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {tools.map((item) => {
            const Icon = item.icon;
            const isActive = activeTool === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTool(item.id)}
                className={`p-3 text-left rounded-xl border transition-all ${
                  isActive
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-sm'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-white/20 text-white' : 'bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold whitespace-nowrap truncate">{item.label}</span>
                </div>
                <p className={`text-[11px] leading-snug line-clamp-2 ${isActive ? 'text-emerald-100' : 'text-slate-500'}`}>
                  {item.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
