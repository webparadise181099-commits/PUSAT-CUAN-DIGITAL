import React, { useState } from 'react';
import { Search, Clock, Calendar, ArrowRight, BookOpen, Share2, ArrowLeft, Check, CheckCircle2 } from 'lucide-react';
import { Article } from '../../types';
import { ARTICLES_DATA } from '../../data/articlesData';
import { AdPlaceholder } from '../Ads/AdPlaceholder';

interface ArticlesViewProps {
  selectedArticleId?: string | null;
  onSelectArticle: (id: string | null) => void;
}

export const ArticlesView: React.FC<ArticlesViewProps> = ({ selectedArticleId, onSelectArticle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [copiedShare, setCopiedShare] = useState(false);

  const categories = [
    'Semua',
    'Ide Usaha Modal Kecil',
    'Ide Jualan Online',
    'Cara Membuat Promosi',
    'Cara Membuat Iklan',
    'Tips Berjualan di Facebook',
    'Tips Berjualan di TikTok',
    'Tips Meningkatkan Penjualan',
    'Panduan Memulai Bisnis Online'
  ];

  // Jika sedang membaca artikel tertentu
  const activeArticle = ARTICLES_DATA.find(a => a.id === selectedArticleId);

  const handleShareArticle = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  if (activeArticle) {
    const relatedArticles = ARTICLES_DATA.filter(a => activeArticle.relatedIds.includes(a.id));

    return (
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-150">
        {/* Tombol Kembali */}
        <div>
          <button
            onClick={() => onSelectArticle(null)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-900 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Daftar Panduan & Artikel</span>
          </button>
        </div>

        {/* Header Artikel */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <span className="font-semibold text-sky-800">{activeArticle.kategori}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {activeArticle.waktuBaca}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {activeArticle.tanggal}
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
            {activeArticle.judul}
          </h1>

          <p className="text-sm md:text-base text-slate-600 mt-4 leading-relaxed font-normal border-l-4 border-sky-600 pl-4 bg-sky-50/50 py-2 rounded-r-lg">
            {activeArticle.ringkasan}
          </p>

          <div className="flex items-center justify-between pt-4 mt-6 border-t border-slate-100 text-xs text-slate-500">
            <span>Ditulis oleh: <strong className="text-slate-700">{activeArticle.penulis}</strong></span>
            <button
              onClick={handleShareArticle}
              className="inline-flex items-center gap-1 text-slate-600 hover:text-blue-900 transition"
            >
              {copiedShare ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedShare ? 'Tautan Tersalin' : 'Bagikan Artikel'}</span>
            </button>
          </div>
        </div>

        {/* Slot Iklan Dalam Artikel */}
        <AdPlaceholder type="in-article" />

        {/* Badan Artikel (Headings & Content) */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 space-y-6 text-slate-700 text-sm md:text-base leading-relaxed">
          {activeArticle.headings.map((heading) => (
            <section key={heading.id} className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 pt-2 border-b border-slate-100 pb-2">
                {heading.title}
              </h2>
              <p className="leading-relaxed">{heading.content}</p>
              {heading.sublist && (
                <ul className="space-y-2 mt-2 pl-4">
                  {heading.sublist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-sky-600 font-bold shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Kotak Contoh Kasus Praktis */}
          {activeArticle.contohKasus && (
            <div className="mt-8 p-5 bg-sky-50/80 border border-sky-200 rounded-xl">
              <h3 className="text-xs font-bold uppercase tracking-wider text-sky-900 mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-700" />
                <span>Studi Kasus Nyata di Indonesia:</span>
              </h3>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed italic">
                "{activeArticle.contohKasus}"
              </p>
            </div>
          )}

          {/* Kesimpulan */}
          <div className="mt-6 pt-4 border-t border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Kesimpulan & Tindakan Selanjutnya:
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {activeArticle.kesimpulan}
            </p>
          </div>
        </div>

        {/* Slot Iklan Bawah Artikel */}
        <AdPlaceholder type="banner-leaderboard" />

        {/* Rekomendasi Artikel Terkait */}
        {relatedArticles.length > 0 && (
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="text-base font-bold text-slate-900 mb-4">
              Panduan & Artikel Terkait Lainnya
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedArticles.map((rel) => (
                <button
                  key={rel.id}
                  onClick={() => {
                    onSelectArticle(rel.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-4 text-left rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-sky-800">{rel.kategori}</span>
                    <h4 className="text-sm font-bold text-slate-900 mt-1 leading-snug">{rel.judul}</h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{rel.ringkasan}</p>
                  </div>
                  <span className="text-xs font-semibold text-blue-900 flex items-center gap-1 mt-3">
                    <span>Baca Panduan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Tampilan Daftar Artikel
  const filteredArticles = ARTICLES_DATA.filter((art) => {
    const matchCat = selectedCategory === 'Semua' || art.kategori === selectedCategory;
    const matchSearch = art.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        art.ringkasan.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        art.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Search & Filter Bar */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari ide usaha, tips jualan TikTok, Facebook, promosi, atau izin NIB..."
              className="w-full pl-10 pr-4 py-2 text-xs md:text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>
        </div>

        {/* Kategori Filter Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-4 mt-4 border-t border-slate-100 pb-1 scrollbar-none">
          <span className="text-xs text-slate-400 mr-1 shrink-0 font-medium">Topik:</span>
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

      {/* Grid Artikel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredArticles.map((art) => (
          <div
            key={art.id}
            className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition"
          >
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <span className="font-semibold text-sky-800">{art.kategori}</span>
                <span>·</span>
                <span>{art.waktuBaca}</span>
              </div>

              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {art.judul}
              </h3>

              <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                {art.ringkasan}
              </p>

              <div className="flex flex-wrap gap-1 mt-3">
                {art.tags.map((t, idx) => (
                  <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">{art.tanggal}</span>
              <button
                onClick={() => {
                  onSelectArticle(art.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-bold text-blue-900 hover:text-sky-700 transition flex items-center gap-1"
              >
                <span>Baca Lengkap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
