import React, { useState } from 'react';
import { PhoneCall, Search, Copy, Check, ShieldAlert, HeartPulse, Flame, Zap, LifeBuoy } from 'lucide-react';
import { EMERGENCY_CONTACTS } from '../../data/initialData';
import { EmergencyContact } from '../../types';

export const EmergencyContacts: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCat, setSelectedCat] = useState<string>('Semua');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['Semua', 'Darurat Umum', 'Medis & Kesehatan', 'Keamanan', 'Bencana Alam', 'Utilitas & Layanan'];

  const filtered = EMERGENCY_CONTACTS.filter((item) => {
    const matchCat = selectedCat === 'Semua' || item.kategori === selectedCat;
    const matchSearch = item.instansi.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.nomor.includes(searchQuery) ||
                        item.deskripsi.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleCopy = (nomor: string, id: string) => {
    navigator.clipboard.writeText(nomor);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Banner Informasi Darurat 112 */}
      <div className="bg-red-500 text-white rounded-xl p-5 md:p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-red-100">
                Panggilan Darurat Bebas Pulsa Nasional
              </span>
              <h3 className="text-xl font-extrabold text-white">
                Hubungi 112 untuk Segala Keadaan Darurat
              </h3>
              <p className="text-xs text-red-100 mt-1 max-w-xl">
                Layanan 112 terhubung langsung dengan ambulans, pemadam kebakaran, dan kepolisian di seluruh wilayah Indonesia. Dapat ditelepon dari ponsel tanpa kartu SIM dan bebas pulsa.
              </p>
            </div>
          </div>

          <a
            href="tel:112"
            className="px-5 py-2.5 bg-white text-red-600 hover:bg-red-50 rounded-lg text-xs font-bold transition flex items-center justify-center gap-2 shrink-0 shadow-sm"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Panggil 112 Sekarang</span>
          </a>
        </div>
      </div>

      {/* Filter & Pencarian Kontak */}
      <div className="bg-white p-5 rounded-xl border border-slate-200">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nomor darurat, ambulans, polisi, PLN, BNPB..."
              className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            />
          </div>

          {/* Kategori Filters */}
          <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto p-1 bg-slate-100 rounded-lg scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition whitespace-nowrap ${
                  selectedCat === cat ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Nomor Kontak Penting */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-slate-300 transition"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                <span>{item.kategori}</span>
                <span>{item.jamLayanan}</span>
              </div>

              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                {item.instansi}
              </h4>

              <div className="my-3 flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-100">
                <span className="text-xl font-black text-slate-800 font-mono tracking-wide">
                  {item.nomor}
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  {item.wilayah}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {item.deskripsi}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
              <a
                href={`tel:${item.nomor.split('/')[0].trim()}`}
                className="flex-1 py-2 px-3 bg-red-600 hover:bg-red-500 text-white rounded-lg text-xs font-medium transition flex items-center justify-center gap-1.5 shadow-xs"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Panggil</span>
              </a>
              <button
                onClick={() => handleCopy(item.nomor, item.id)}
                className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-medium transition flex items-center gap-1"
                title="Salin Nomor"
              >
                {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId === item.id ? 'Disalin' : 'Salin'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
