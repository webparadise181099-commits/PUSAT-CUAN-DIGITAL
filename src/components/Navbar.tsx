import React, { useState } from 'react';
import { Menu, X, Search, Sparkles, Bookmark, Wrench } from 'lucide-react';
import { ViewMode } from '../types';

interface NavbarProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
  onOpenSearch: () => void;
  favoriteCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenSearch,
  favoriteCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home' as ViewMode, label: 'Home' },
    { id: 'prompts' as ViewMode, label: 'Prompt AI' },
    { id: 'tools' as ViewMode, label: 'Alat Gratis' },
    { id: 'ide-konten' as ViewMode, label: 'Ide Konten' },
    { id: 'bisnis' as ViewMode, label: 'Bisnis' },
    { id: 'artikel' as ViewMode, label: 'Artikel' },
  ];

  const handleNavClick = (view: ViewMode) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16">
          {/* Zone 1: Logo & Nama Website */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-left focus:outline-none shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-900 text-white flex items-center justify-center font-black text-sm shadow-xs">
              PC
            </div>
            <div className="leading-none">
              <span className="text-base sm:text-lg font-black tracking-tight text-blue-900 uppercase">
                PUSAT CUAN <span className="text-sky-600">DIGITAL</span>
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-semibold text-slate-600">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-1.5 transition-colors whitespace-nowrap border-b-2 text-xs lg:text-sm ${
                  currentView === item.id
                    ? 'border-blue-900 text-blue-900 font-bold'
                    : 'border-transparent text-slate-600 hover:text-blue-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Aksi Kanan & Search */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Tombol Pencarian Global */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-500 hover:text-blue-900 hover:bg-slate-100 rounded-lg transition"
              title="Cari di seluruh website"
              aria-label="Pencarian"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Tombol Favorit */}
            <button
              onClick={() => handleNavClick('favorit')}
              className={`p-2 rounded-lg transition relative ${
                currentView === 'favorit'
                  ? 'bg-amber-50 text-amber-600'
                  : 'text-slate-500 hover:text-amber-600 hover:bg-slate-100'
              }`}
              title="Prompt Favorit Saya"
              aria-label="Favorit"
            >
              <Bookmark className="w-4 h-4" />
              {favoriteCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  {favoriteCount}
                </span>
              )}
            </button>

            {/* Primary CTA */}
            <button
              onClick={() => handleNavClick('tools')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold transition shadow-xs"
            >
              <Wrench className="w-3.5 h-3.5 text-sky-400" />
              <span>Coba Alat Gratis</span>
            </button>

            {/* Tombol Hamburger Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 animate-in slide-in-from-top-2 duration-150">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition ${
                currentView === item.id
                  ? 'bg-blue-50 text-blue-900'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 flex gap-2">
            <button
              onClick={() => handleNavClick('favorit')}
              className="flex-1 py-2 text-center text-xs font-medium text-slate-700 bg-slate-100 rounded-lg"
            >
              Favorit ({favoriteCount})
            </button>
            <button
              onClick={() => handleNavClick('tools')}
              className="flex-1 py-2 text-center text-xs font-bold text-white bg-blue-900 rounded-lg"
            >
              Buka 10 Alat Gratis
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
