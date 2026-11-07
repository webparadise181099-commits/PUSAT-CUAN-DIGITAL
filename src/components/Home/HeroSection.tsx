import React, { useState } from 'react';
import { Search, Sparkles, Wrench, Lightbulb, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { ViewMode } from '../../types';
import { AdPlaceholder } from '../Ads/AdPlaceholder';

interface HeroSectionProps {
  onSearch: (query: string) => void;
  onNavigate: (view: ViewMode) => void;
  onSelectCategory: (catName: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
  onNavigate,
  onSelectCategory
}) => {
  const [inputVal, setInputVal] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim()) {
      onSearch(inputVal.trim());
    }
  };

  const popularCategories = [
    { name: 'Prompt AI', icon: Sparkles, view: 'prompts' as ViewMode },
    { name: 'Alat Pembuat Konten', icon: Wrench, view: 'tools' as ViewMode },
    { name: 'Ide Jualan', icon: Lightbulb, view: 'bisnis' as ViewMode },
    { name: 'Media Sosial', icon: TrendingUp, view: 'ide-konten' as ViewMode },
    { name: 'Bisnis Online', icon: CheckCircle, view: 'bisnis' as ViewMode },
    { name: 'Desain dan Kreativitas', icon: Sparkles, view: 'prompts' as ViewMode },
    { name: 'Produktivitas', icon: CheckCircle, view: 'prompts' as ViewMode },
    { name: 'Tutorial Digital', icon: Lightbulb, view: 'artikel' as ViewMode },
  ];

  return (
    <section className="pt-8 pb-4">
      {/* Editorial Headline */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-800 bg-sky-50 px-3 py-1 rounded-md mb-4 border border-sky-200/60">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>Portal Digital & Alat Usaha Gratis No. 1 di Indonesia</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
          Semua Kebutuhan Digital dalam Satu Tempat
        </h1>

        <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
          Temukan prompt AI, alat gratis, ide konten, dan panduan praktis untuk membantu pekerjaan dan usaha Anda.
        </p>

        {/* Working Search Box */}
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-xl">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Cari prompt, alat, ide, atau panduan..."
              className="w-full pl-10 pr-4 py-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10 shadow-xs"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs"
          >
            <span>Cari Sekarang</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Highlight Keuntungan */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 mt-5 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Gratis Tanpa Batas</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Tanpa Perlu Login / Akun</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Nyaman untuk Semua Usia</span>
          </div>
        </div>
      </div>

      {/* Ad Placeholder Below Hero Section */}
      <AdPlaceholder type="banner-leaderboard" />

      {/* Kategori Populer */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Kategori Populer:
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {popularCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={() => {
                  onSelectCategory(item.name);
                  onNavigate(item.view);
                }}
                className="p-3 text-left bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl transition flex items-center gap-2.5 shadow-2xs"
              >
                <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-800 flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-800 truncate">{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
