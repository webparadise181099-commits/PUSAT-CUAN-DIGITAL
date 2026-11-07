import React, { useState } from 'react';
import { BookOpen, Search, ArrowRight, X, CheckCircle, Clock, Calendar } from 'lucide-react';
import { BUSINESS_GUIDES } from '../../data/initialData';
import { ArticleGuide } from '../../types';

export const BusinessGuides: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGuide, setSelectedGuide] = useState<ArticleGuide | null>(null);

  const filtered = BUSINESS_GUIDES.filter((guide) => {
    return guide.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
           guide.ringkasan.toLowerCase().includes(searchQuery.toLowerCase()) ||
           guide.kategori.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="space-y-6">
      {/* Header & Pencarian Panduan */}
      <div className="bg-white p-5 rounded-xl border border-slate-200">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Panduan Praktis Sukses Usaha UMKM
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Kiat operasional, legalitas perizinan, dan tips mengelola bisnis mandiri di Indonesia
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-2.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari artikel / tips panduan..."
              className="w-full pl-10 pr-4 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Grid Kartu Panduan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition"
          >
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <span className="font-semibold text-emerald-700">{item.kategori}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  {item.waktuBaca}
                </span>
                <span>·</span>
                <span>{item.tanggal}</span>
              </div>

              <h4 className="text-base font-bold text-slate-900 leading-snug">
                {item.judul}
              </h4>

              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                {item.ringkasan}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">100% Gratis & Terverifikasi</span>
              <button
                onClick={() => setSelectedGuide(item)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition"
              >
                <span>Baca Selengkapnya</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Baca Artikel Lengkap */}
      {selectedGuide && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl border border-slate-200 max-w-2xl w-full p-6 md:p-8 shadow-xl max-h-[85vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold text-emerald-700">{selectedGuide.kategori}</span>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1 leading-snug">
                  {selectedGuide.judul}
                </h3>
                <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                  <span>{selectedGuide.tanggal}</span>
                  <span>·</span>
                  <span>{selectedGuide.waktuBaca}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedGuide(null)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Isi Artikel */}
            <div className="py-6 space-y-4 text-sm text-slate-700 leading-relaxed">
              {selectedGuide.isiLengkap.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}

              {/* Box Tips Kunci */}
              {selectedGuide.tipsPenting.length > 0 && (
                <div className="mt-6 p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Poin Penting untuk Diingat:</span>
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {selectedGuide.tipsPenting.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedGuide(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-medium hover:bg-slate-800 transition"
              >
                Tutup Panduan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
