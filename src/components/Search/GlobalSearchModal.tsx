import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Sparkles, Wrench, BookOpen, ArrowRight, CornerDownLeft } from 'lucide-react';
import { AIPrompt, Article, ToolType, ViewMode } from '../../types';
import { PROMPTS_DATA } from '../../data/promptsData';
import { ARTICLES_DATA } from '../../data/articlesData';
import { TOOLS_DATA } from '../../data/toolsData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPrompt: (prompt: AIPrompt) => void;
  onSelectArticle: (articleId: string) => void;
  onSelectTool: (toolId: ToolType) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectPrompt,
  onSelectArticle,
  onSelectTool
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedPrompts = q
    ? PROMPTS_DATA.filter(p =>
        p.judul.toLowerCase().includes(q) ||
        p.promptText.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      ).slice(0, 5)
    : [];

  const matchedTools = q
    ? TOOLS_DATA.filter(t =>
        t.nama.toLowerCase().includes(q) ||
        t.deskripsi.toLowerCase().includes(q)
      )
    : [];

  const matchedArticles = q
    ? ARTICLES_DATA.filter(a =>
        a.judul.toLowerCase().includes(q) ||
        a.ringkasan.toLowerCase().includes(q) ||
        a.tags.some(t => t.toLowerCase().includes(q))
      ).slice(0, 5)
    : [];

  const totalResults = matchedPrompts.length + matchedTools.length + matchedArticles.length;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24 animate-in fade-in duration-100">
      <div className="bg-white rounded-xl border border-slate-200 max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari prompt, alat gratis, ide jualan, atau artikel..."
            className="w-full text-sm outline-none text-slate-800 placeholder-slate-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded transition"
          >
            Esc
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1">
          {!query ? (
            <div className="py-8 text-center text-slate-400 text-xs">
              <p>Ketik kata kunci untuk mencari di seluruh prompt, alat, dan panduan usaha.</p>
              <div className="mt-4 flex flex-wrap justify-center gap-1.5 max-w-md mx-auto">
                <span className="text-slate-500 font-medium mr-1">Contoh:</span>
                {['Kalkulator', 'TikTok', 'Caption', 'Shopee', 'Facebook', 'Modal Kecil'].map(kw => (
                  <button
                    key={kw}
                    onClick={() => setQuery(kw)}
                    className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-[11px]"
                  >
                    {kw}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-8 text-center text-slate-400 text-xs">
              Tidak ditemukan hasil untuk "{query}". Coba kata kunci yang lebih umum.
            </div>
          ) : (
            <div className="space-y-4">
              {/* Hasil Alat */}
              {matchedTools.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 block mb-2">
                    Alat Online Gratis ({matchedTools.length})
                  </span>
                  <div className="space-y-1.5">
                    {matchedTools.map(t => (
                      <button
                        key={t.id}
                        onClick={() => {
                          onSelectTool(t.id);
                          onClose();
                        }}
                        className="w-full p-2.5 text-left rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2.5">
                          <Wrench className="w-4 h-4 text-sky-700 shrink-0" />
                          <div>
                            <span className="text-xs font-bold text-slate-800 group-hover:text-blue-900 block">
                              {t.nama}
                            </span>
                            <span className="text-[11px] text-slate-500 line-clamp-1">{t.deskripsi}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Hasil Prompt */}
              {matchedPrompts.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 block mb-2">
                    Prompt AI Siap Pakai ({matchedPrompts.length})
                  </span>
                  <div className="space-y-1.5">
                    {matchedPrompts.map(p => (
                      <button
                        key={p.id}
                        onClick={() => {
                          onSelectPrompt(p);
                          onClose();
                        }}
                        className="w-full p-2.5 text-left rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2.5">
                          <Sparkles className="w-4 h-4 text-blue-900 shrink-0" />
                          <div>
                            <span className="text-xs font-bold text-slate-800 group-hover:text-blue-900 block">
                              {p.judul}
                            </span>
                            <span className="text-[11px] text-slate-500 line-clamp-1">{p.deskripsiSingkat}</span>
                          </div>
                        </div>
                        <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded shrink-0">
                          {p.kategori}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Hasil Artikel */}
              {matchedArticles.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 block mb-2">
                    Artikel & Panduan ({matchedArticles.length})
                  </span>
                  <div className="space-y-1.5">
                    {matchedArticles.map(a => (
                      <button
                        key={a.id}
                        onClick={() => {
                          onSelectArticle(a.id);
                          onClose();
                        }}
                        className="w-full p-2.5 text-left rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2.5">
                          <BookOpen className="w-4 h-4 text-emerald-600 shrink-0" />
                          <div>
                            <span className="text-xs font-bold text-slate-800 group-hover:text-blue-900 block">
                              {a.judul}
                            </span>
                            <span className="text-[11px] text-slate-500 line-clamp-1">{a.ringkasan}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Modal */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-right text-xs text-slate-500">
          Tekan <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded text-[10px]">Esc</kbd> untuk menutup
        </div>
      </div>
    </div>
  );
};
