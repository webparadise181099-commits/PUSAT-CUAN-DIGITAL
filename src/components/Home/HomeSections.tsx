import React from 'react';
import { 
  Sparkles, Wrench, ArrowRight, Copy, Check, Clock, 
  BookOpen, Star, TrendingUp, Layers, ChevronRight 
} from 'lucide-react';
import { AIPrompt, Article, ToolType, ViewMode } from '../../types';
import { TOOLS_DATA } from '../../data/toolsData';
import { AdPlaceholder } from '../Ads/AdPlaceholder';

interface HomeSectionsProps {
  popularPrompts: AIPrompt[];
  latestPrompts: AIPrompt[];
  latestArticles: Article[];
  onSelectPrompt: (prompt: AIPrompt) => void;
  onSelectArticle: (articleId: string) => void;
  onOpenTool: (toolId: ToolType) => void;
  onNavigate: (view: ViewMode) => void;
}

export const HomeSections: React.FC<HomeSectionsProps> = ({
  popularPrompts,
  latestPrompts,
  latestArticles,
  onSelectPrompt,
  onSelectArticle,
  onOpenTool,
  onNavigate
}) => {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-12">
      {/* ================= SECTION 1: KONTEN POPULER ================= */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800">Paling Banyak Dipakai</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">Prompt & Konten Populer</h2>
          </div>
          <button
            onClick={() => onNavigate('prompts')}
            className="text-xs font-bold text-blue-900 hover:text-sky-700 transition flex items-center gap-1"
          >
            <span>Lihat Semua Prompt</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {popularPrompts.slice(0, 3).map((prompt) => (
            <div
              key={prompt.id}
              className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                  <span className="font-semibold text-sky-800">{prompt.kategori}</span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-[11px]">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Top Choice</span>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {prompt.judul}
                </h3>

                <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                  {prompt.deskripsiSingkat}
                </p>

                <div className="mt-3 p-2.5 bg-slate-50 rounded-lg border border-slate-200 font-mono text-[11px] text-slate-600 line-clamp-3">
                  {prompt.promptText}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectPrompt(prompt)}
                  className="text-xs text-slate-600 hover:text-slate-900 font-medium"
                >
                  Detail
                </button>
                <button
                  onClick={() => handleCopy(prompt.promptText, prompt.id)}
                  className="px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold transition flex items-center gap-1 shadow-xs"
                >
                  {copiedId === prompt.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === prompt.id ? 'Tersalin' : 'Salin Prompt'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ruang Iklan Antar Bagian */}
      <AdPlaceholder type="banner-leaderboard" />

      {/* ================= SECTION 2: 10 ALAT ONLINE GRATIS ================= */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800">Tanpa Perlu API Key</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">10 Alat Digital Online Gratis</h2>
          </div>
          <button
            onClick={() => onNavigate('tools')}
            className="text-xs font-bold text-blue-900 hover:text-sky-700 transition flex items-center gap-1"
          >
            <span>Buka Semua Alat</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {TOOLS_DATA.map((tool) => (
            <button
              key={tool.id}
              onClick={() => onOpenTool(tool.id)}
              className="p-4 text-left bg-white border border-slate-200 hover:border-blue-900/40 hover:bg-blue-50/20 rounded-xl transition flex flex-col justify-between group shadow-2xs"
            >
              <div>
                <span className="text-[10px] font-bold text-sky-800 uppercase tracking-wider block mb-1">
                  {tool.badge}
                </span>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-900 transition leading-snug">
                  {tool.nama}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {tool.deskripsi}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900">
                <span>Gunakan Alat</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ================= SECTION 3: KONTEN TERBARU ================= */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800">Pembaruan Rutin</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">Konten & Prompt Terbaru</h2>
          </div>
          <button
            onClick={() => onNavigate('prompts')}
            className="text-xs font-bold text-blue-900 hover:text-sky-700 transition flex items-center gap-1"
          >
            <span>Lihat Direktori Prompt</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {latestPrompts.slice(0, 3).map((prompt) => (
            <div
              key={prompt.id}
              className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-slate-300 transition"
            >
              <div>
                <div className="text-xs text-slate-500 flex items-center gap-1.5 mb-1.5">
                  <span className="font-semibold text-sky-800">{prompt.kategori}</span>
                  <span>·</span>
                  <span className="text-slate-400">{prompt.platform}</span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {prompt.judul}
                </h3>

                <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                  {prompt.deskripsiSingkat}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectPrompt(prompt)}
                  className="text-xs text-slate-600 hover:text-slate-900 font-medium"
                >
                  Lihat Selengkapnya
                </button>
                <button
                  onClick={() => handleCopy(prompt.promptText, `lat-${prompt.id}`)}
                  className="px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold transition flex items-center gap-1 shadow-xs"
                >
                  {copiedId === `lat-${prompt.id}` ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === `lat-${prompt.id}` ? 'Tersalin' : 'Salin'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ruang Iklan Antar Bagian */}
      <AdPlaceholder type="banner-leaderboard" />

      {/* ================= SECTION 4: ARTIKEL & PANDUAN BERMANFAAT ================= */}
      <section className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800">Edukasi Bisnis & Jualan</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">Panduan Praktis Terbaru</h2>
          </div>
          <button
            onClick={() => onNavigate('artikel')}
            className="text-xs font-bold text-blue-900 hover:text-sky-700 transition flex items-center gap-1"
          >
            <span>Buka Semua Artikel (16)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {latestArticles.slice(0, 4).map((art) => (
            <button
              key={art.id}
              onClick={() => onSelectArticle(art.id)}
              className="p-5 text-left bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xs rounded-xl transition flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                  <span className="font-semibold text-sky-800">{art.kategori}</span>
                  <span>·</span>
                  <span>{art.waktuBaca}</span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-900 transition leading-snug">
                  {art.judul}
                </h3>

                <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                  {art.ringkasan}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-900">
                <span>Baca Panduan</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
