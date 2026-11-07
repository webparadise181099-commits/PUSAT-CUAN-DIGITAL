import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/Home/HeroSection';
import { HomeSections } from './components/Home/HomeSections';
import { PromptLibrary } from './components/Prompts/PromptLibrary';
import { OnlineTools } from './components/Tools/OnlineTools';
import { ArticlesView } from './components/Articles/ArticlesView';
import { LegalPages } from './components/Legal/LegalPages';
import { GlobalSearchModal } from './components/Search/GlobalSearchModal';
import { Footer } from './components/Footer';
import { ViewMode, ToolType, AIPrompt, PromptCategory } from './types';
import { PROMPTS_DATA } from './data/promptsData';
import { ARTICLES_DATA } from './data/articlesData';

const FAVORITES_STORAGE_KEY = 'pusatcuan_favorite_prompts_v1';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [selectedTool, setSelectedTool] = useState<ToolType>('caption');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [selectedPromptCategory, setSelectedPromptCategory] = useState<PromptCategory>('Semua');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);

  // Sync favorites count
  const updateFavoriteCount = () => {
    try {
      const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFavoriteCount(Array.isArray(parsed) ? parsed.length : 0);
      } else {
        setFavoriteCount(0);
      }
    } catch {
      setFavoriteCount(0);
    }
  };

  useEffect(() => {
    updateFavoriteCount();
    window.addEventListener('storage', updateFavoriteCount);
    return () => window.removeEventListener('storage', updateFavoriteCount);
  }, [currentView]);

  // Handler navigasi
  const handleNavigate = (view: ViewMode) => {
    setCurrentView(view);
    setSelectedArticleId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateFavoriteCount();
  };

  const handleOpenTool = (toolId: ToolType) => {
    setSelectedTool(toolId);
    setCurrentView('tools');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectArticle = (articleId: string | null) => {
    setSelectedArticleId(articleId);
    setCurrentView('artikel');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPrompt = (prompt: AIPrompt) => {
    setSelectedPromptCategory(prompt.kategori);
    setCurrentView('prompts');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchTrigger = (query: string) => {
    setSearchModalOpen(true);
  };

  const handleCategoryFromHero = (catName: string) => {
    if (catName === 'Prompt AI') {
      setSelectedPromptCategory('Semua');
      setCurrentView('prompts');
    } else if (catName === 'Alat Pembuat Konten') {
      setSelectedTool('caption');
      setCurrentView('tools');
    } else if (catName === 'Ide Jualan') {
      setCurrentView('bisnis');
    } else if (catName === 'Media Sosial') {
      setCurrentView('ide-konten');
    } else if (catName === 'Bisnis Online') {
      setCurrentView('bisnis');
    } else if (catName === 'Desain dan Kreativitas') {
      setSelectedPromptCategory('Prompt Desain Gambar');
      setCurrentView('prompts');
    } else if (catName === 'Produktivitas') {
      setSelectedPromptCategory('Prompt Produktivitas');
      setCurrentView('prompts');
    } else {
      setCurrentView('artikel');
    }
  };

  // Urutan data populer & terbaru
  const popularPrompts = [...PROMPTS_DATA].sort((a, b) => (b.popularitas || 0) - (a.popularitas || 0));
  const latestPrompts = [...PROMPTS_DATA].slice(0, 6);
  const latestArticles = [...ARTICLES_DATA].slice(0, 8);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-800">
      {/* Navbar Atas */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
        favoriteCount={favoriteCount}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6">
        {/* VIEW 1: HOME */}
        {currentView === 'home' && (
          <div className="space-y-8">
            <HeroSection
              onSearch={handleSearchTrigger}
              onNavigate={handleNavigate}
              onSelectCategory={handleCategoryFromHero}
            />

            <HomeSections
              popularPrompts={popularPrompts}
              latestPrompts={latestPrompts}
              latestArticles={latestArticles}
              onSelectPrompt={handleSelectPrompt}
              onSelectArticle={handleSelectArticle}
              onOpenTool={handleOpenTool}
              onNavigate={handleNavigate}
            />
          </div>
        )}

        {/* VIEW 2: PROMPTS LIBRARY */}
        {currentView === 'prompts' && (
          <div className="space-y-6 pt-2">
            <div>
              <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                Perpustakaan Prompt Siap Pakai
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Koleksi Prompt AI Lengkap
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Tersedia 32 prompt teruji untuk bisnis, jualan, media sosial, dan penulisan. Salin langsung dengan sekali klik ke ChatGPT, Claude, atau Gemini.
              </p>
            </div>

            <PromptLibrary initialCategory={selectedPromptCategory} />
          </div>
        )}

        {/* VIEW 3: ONLINE TOOLS */}
        {currentView === 'tools' && (
          <div className="space-y-6 pt-2">
            <div>
              <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                Perangkat Otomasi Praktis
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                10 Alat Digital Gratis
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Bantu proses penulisan caption, riset ide konten, perhitungan laba bersih, dan pembuatan nama brand dalam hitungan detik.
              </p>
            </div>

            <OnlineTools initialTool={selectedTool} />
          </div>
        )}

        {/* VIEW 4: IDE KONTEN */}
        {currentView === 'ide-konten' && (
          <div className="space-y-6 pt-2">
            <div>
              <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                Inspirasi Kreator
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Generator Ide Konten & Prompt Media Sosial
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Dapatkan inspirasi hook video 3 detik pertama, skrip TikTok berpenjualan tinggi, dan caption Instagram Reels yang mengundang interaksi.
              </p>
            </div>

            <OnlineTools initialTool="ide-konten" />

            <div className="pt-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Prompt AI Pendukung Media Sosial</h2>
              <PromptLibrary initialCategory="Prompt TikTok" />
            </div>
          </div>
        )}

        {/* VIEW 5: BISNIS & JUALAN */}
        {currentView === 'bisnis' && (
          <div className="space-y-6 pt-2">
            <div>
              <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                Solusi UMKM & Pemula
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Pusat Sumber Daya Bisnis & Ide Jualan
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Kumpulan panduan usaha modal kecil, kalkulator keuntungan riil marketplace, dan cara promosi efektif di Facebook & TikTok.
              </p>
            </div>

            <OnlineTools initialTool="kalkulator-laba" />

            <div className="pt-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Panduan Bisnis Pilihan</h2>
              <ArticlesView
                selectedArticleId={selectedArticleId}
                onSelectArticle={handleSelectArticle}
              />
            </div>
          </div>
        )}

        {/* VIEW 6: ARTIKEL & PANDUAN */}
        {currentView === 'artikel' && (
          <div className="space-y-6 pt-2">
            {!selectedArticleId && (
              <div>
                <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                  Edukasi & Referensi
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Pusat Artikel & Panduan Praktis
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                  16 artikel berkualitas mengenai strategi promosi, jualan di marketplace, psikologi harga, dan pengelolaan uang usaha.
                </p>
              </div>
            )}

            <ArticlesView
              selectedArticleId={selectedArticleId}
              onSelectArticle={handleSelectArticle}
            />
          </div>
        )}

        {/* VIEW 7: FAVORIT SAYA */}
        {currentView === 'favorit' && (
          <div className="space-y-6 pt-2">
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                Koleksi Tersimpan
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Prompt AI Favorit Anda
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Prompt yang Anda tandai dengan tombol bintang atau bookmark tersimpan rapi di sini untuk digunakan kembali kapan saja.
              </p>
            </div>

            <PromptLibrary initialCategory="Semua" />
          </div>
        )}

        {/* VIEW 8: LEGAL PAGES */}
        {(currentView === 'tentang' ||
          currentView === 'kontak' ||
          currentView === 'privasi' ||
          currentView === 'syarat' ||
          currentView === 'disclaimer') && (
          <div className="pt-4">
            <LegalPages
              pageType={currentView}
              onBackToHome={() => handleNavigate('home')}
            />
          </div>
        )}
      </main>

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectPrompt={(p) => {
          handleSelectPrompt(p);
          setSearchModalOpen(false);
        }}
        onSelectArticle={(id) => {
          handleSelectArticle(id);
          setSearchModalOpen(false);
        }}
        onSelectTool={(id) => {
          handleOpenTool(id);
          setSearchModalOpen(false);
        }}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
