import React, { useState, useEffect } from 'react';
import { Search, Copy, Check, Bookmark, Sparkles, Filter, Terminal, ExternalLink, X, ArrowRight } from 'lucide-react';
import { AIPrompt, PromptCategory } from '../../types';
import { PROMPTS_DATA } from '../../data/promptsData';

const FAVORITES_STORAGE_KEY = 'pusatcuan_favorite_prompts_v1';

interface PromptLibraryProps {
  initialCategory?: PromptCategory;
  onSelectPrompt?: (prompt: AIPrompt) => void;
}

export const PromptLibrary: React.FC<PromptLibraryProps> = ({ initialCategory = 'Semua' }) => {
  const [selectedCategory, setSelectedCategory] = useState<PromptCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'semua' | 'favorit'>('semua');
  const [selectedPromptDetail, setSelectedPromptDetail] = useState<AIPrompt | null>(null);

  // Favorites state in LocalStorage
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteIds));
    } catch (e) {
      console.error(e);
    }
  }, [favoriteIds]);

  const toggleFavorite = (id: string) => {
    if (favoriteIds.includes(id)) {
      setFavoriteIds(favoriteIds.filter(fId => fId !== id));
    } else {
      setFavoriteIds([...favoriteIds, id]);
    }
  };

  const handleCopyPrompt = (prompt: AIPrompt) => {
    navigator.clipboard.writeText(prompt.promptText);
    setCopiedId(prompt.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const categories: PromptCategory[] = [
    'Semua',
    'Prompt Bisnis',
    'Prompt Jualan',
    'Prompt Facebook',
    'Prompt TikTok',
    'Prompt Instagram',
    'Prompt Desain Gambar',
    'Prompt Penulisan',
    'Prompt Pendidikan',
    'Prompt Produktivitas'
  ];

  const filteredPrompts = PROMPTS_DATA.filter(prompt => {
    if (activeTab === 'favorit' && !favoriteIds.includes(prompt.id)) {
      return false;
    }
    const matchCategory = selectedCategory === 'Semua' || prompt.kategori === selectedCategory;
    const matchSearch = prompt.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        prompt.deskripsiSingkat.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        prompt.promptText.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        prompt.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header & Filter Bar */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Search Box */}
          <div className="relative w-full md:flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari prompt bisnis, copywriting jualan, skrip TikTok, atau gambar..."
              className="w-full pl-10 pr-4 py-2 text-xs md:text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Tab Semua vs Favorit */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg w-full md:w-auto shrink-0">
            <button
              onClick={() => setActiveTab('semua')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition ${
                activeTab === 'semua' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua Prompt ({PROMPTS_DATA.length})
            </button>
            <button
              onClick={() => setActiveTab('favorit')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition flex items-center gap-1.5 ${
                activeTab === 'favorit' ? 'bg-white text-amber-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 text-amber-500 fill-current" />
              <span>Favorit ({favoriteIds.length})</span>
            </button>
          </div>
        </div>

        {/* Kategori Horizontal Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-4 mt-4 border-t border-slate-100 pb-1 scrollbar-none">
          <span className="text-xs text-slate-400 mr-1 shrink-0 font-medium">Kategori:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition shrink-0 whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Kartu Prompt */}
      {filteredPrompts.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
          <Terminal className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-sm font-bold text-slate-700">Tidak ada prompt yang sesuai</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            Coba gunakan kata kunci lain atau pilih kategori "Semua" untuk melihat daftar lengkap prompt.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('Semua');
              setActiveTab('semua');
            }}
            className="mt-4 px-3 py-1.5 text-xs font-medium text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-lg transition"
          >
            Reset Pencarian
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPrompts.map((prompt) => {
            const isFav = favoriteIds.includes(prompt.id);
            const isCopied = copiedId === prompt.id;

            return (
              <div
                key={prompt.id}
                className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition"
              >
                <div>
                  {/* Top Bar Card */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-xs text-slate-500 flex items-center gap-1.5">
                      <span className="font-semibold text-sky-800">{prompt.kategori}</span>
                      <span>·</span>
                      <span className="text-slate-400">{prompt.platform}</span>
                    </div>

                    <button
                      onClick={() => toggleFavorite(prompt.id)}
                      className={`p-1.5 rounded-lg border transition ${
                        isFav ? 'bg-amber-50 border-amber-300 text-amber-600' : 'border-slate-100 text-slate-300 hover:text-slate-600'
                      }`}
                      title={isFav ? 'Hapus dari favorit' : 'Simpan ke favorit'}
                    >
                      <Bookmark className="w-4 h-4 fill-current" />
                    </button>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mt-2 leading-snug">
                    {prompt.judul}
                  </h4>

                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                    {prompt.deskripsiSingkat}
                  </p>

                  {/* Area Cuplikan Teks Prompt */}
                  <div className="mt-3 p-3 bg-slate-50 rounded-lg border border-slate-200 font-mono text-[11px] text-slate-700 max-h-32 overflow-hidden relative">
                    <pre className="whitespace-pre-wrap font-mono line-clamp-4 leading-relaxed">
                      {prompt.promptText}
                    </pre>
                    <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
                  </div>

                  {/* Tag List */}
                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {prompt.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Tombol Aksi */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedPromptDetail(prompt)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition flex items-center gap-1"
                  >
                    <span>Lihat Penuh</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleCopyPrompt(prompt)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 shadow-xs ${
                      isCopied
                        ? 'bg-emerald-600 text-white'
                        : 'bg-blue-900 hover:bg-blue-800 text-white'
                    }`}
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Tersalin!' : 'Salin Prompt'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal Detail & Full Copy Prompt */}
      {selectedPromptDetail && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl border border-slate-200 max-w-2xl w-full p-6 shadow-xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold text-sky-800">{selectedPromptDetail.kategori}</span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">{selectedPromptDetail.judul}</h3>
                <p className="text-xs text-slate-500 mt-1">{selectedPromptDetail.deskripsiSingkat}</p>
              </div>
              <button
                onClick={() => setSelectedPromptDetail(null)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span>Teks Prompt Lengkap (Siap tempel di ChatGPT / Claude / Gemini):</span>
                <span className="text-[11px] text-slate-400">Ganti teks di dalam tanda kurung [ ... ] sesuai produk Anda</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-slate-800 leading-relaxed whitespace-pre-wrap select-all">
                {selectedPromptDetail.promptText}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleFavorite(selectedPromptDetail.id)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition flex items-center gap-1.5 ${
                    favoriteIds.includes(selectedPromptDetail.id)
                      ? 'bg-amber-50 border-amber-300 text-amber-700'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5 fill-current" />
                  <span>{favoriteIds.includes(selectedPromptDetail.id) ? 'Disimpan di Favorit' : 'Simpan ke Favorit'}</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedPromptDetail(null)}
                  className="px-3.5 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition"
                >
                  Tutup
                </button>
                <button
                  onClick={() => handleCopyPrompt(selectedPromptDetail)}
                  className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5"
                >
                  {copiedId === selectedPromptDetail.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedId === selectedPromptDetail.id ? 'Berhasil Disalin!' : 'Salin Seluruh Prompt'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
