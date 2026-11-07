import React from 'react';
import { ShieldCheck, Heart, Sparkles, Wrench, BookOpen } from 'lucide-react';
import { ViewMode } from '../types';

interface FooterProps {
  onNavigate: (view: ViewMode) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white py-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Kolom 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-blue-900 text-white font-black text-xs flex items-center justify-center">
                PC
              </div>
              <span className="text-lg font-black text-blue-900 tracking-tight uppercase">
                PUSAT CUAN <span className="text-sky-600">DIGITAL</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 italic max-w-sm">
              "Temukan Alat Digital, Ide, dan Inspirasi untuk Mengembangkan Usaha Anda."
            </p>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Platform sumber daya digital gratis untuk kreator, pebisnis online, dan UMKM di Indonesia. Kumpulan prompt AI siap salin, 10 alat online otomatis, dan panduan praktis.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% Bebas Biaya · Tanpa Iklan Palsu · Privasi Aman</span>
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Kategori Sumber Daya
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <button onClick={() => onNavigate('prompts')} className="hover:text-blue-900 transition">
                  Koleksi Prompt AI
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tools')} className="hover:text-blue-900 transition">
                  10 Alat Online Gratis
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('ide-konten')} className="hover:text-blue-900 transition">
                  Ide Konten TikTok & Reels
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('bisnis')} className="hover:text-blue-900 transition">
                  Ide Usaha Modal Kecil
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('artikel')} className="hover:text-blue-900 transition">
                  Panduan Bisnis & Jualan
                </button>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kebijakan & Legalitas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Halaman Legalitas
            </h4>
            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <button onClick={() => onNavigate('tentang')} className="hover:text-blue-900 transition">
                  Tentang Kami
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('kontak')} className="hover:text-blue-900 transition">
                  Hubungi Kami
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privasi')} className="hover:text-blue-900 transition">
                  Kebijakan Privasi
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('syarat')} className="hover:text-blue-900 transition">
                  Syarat dan Ketentuan
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('disclaimer')} className="hover:text-blue-900 transition">
                  Penyangkalan Informasi
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Copyright */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 PUSAT CUAN DIGITAL. Hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
            <span>untuk Kemajuan Usaha Digital Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
