import React from 'react';

interface AdPlaceholderProps {
  type: 'banner-leaderboard' | 'rectangle-medium' | 'in-article' | 'sidebar' | 'footer-banner';
  className?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ type, className = '' }) => {
  // Komponen ini disiapkan secara resmi dan aman sesuai pedoman Google AdSense.
  // Setelah akun Google AdSense disetujui, Anda cukup mengganti blok div ini dengan kode script resmi AdSense:
  // <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-XXXXX" data-ad-slot="XXXXX" data-ad-format="auto"></ins>
  
  if (type === 'banner-leaderboard') {
    return (
      <div className={`w-full my-6 flex flex-col items-center justify-center ${className}`}>
        <div className="w-full max-w-4xl min-h-[90px] border border-dashed border-slate-300 bg-slate-50/70 rounded-lg flex flex-col items-center justify-center p-4 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Ruang Iklan Resmi (Slot 728x90 / Banner Horizontal)
          </span>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Area penempatan iklan sponsor yang bersih & nyaman sesuai kebijakan Google AdSense
          </p>
        </div>
      </div>
    );
  }

  if (type === 'rectangle-medium') {
    return (
      <div className={`w-full my-4 flex flex-col items-center justify-center ${className}`}>
        <div className="w-full max-w-xs min-h-[250px] border border-dashed border-slate-300 bg-slate-50/70 rounded-lg flex flex-col items-center justify-center p-4 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Ruang Iklan Resmi (Slot 300x250)
          </span>
          <p className="text-[11px] text-slate-400 mt-1 max-w-[200px]">
            Area penempatan banner persegi responsif
          </p>
        </div>
      </div>
    );
  }

  if (type === 'sidebar') {
    return (
      <div className={`w-full my-4 ${className}`}>
        <div className="w-full min-h-[280px] border border-dashed border-slate-300 bg-slate-50/70 rounded-lg flex flex-col items-center justify-center p-4 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Ruang Iklan Sidebar (300x250 / Responsif)
          </span>
          <p className="text-[11px] text-slate-400 mt-1">
            Slot iklan samping yang nyaman dibaca di layar komputer
          </p>
        </div>
      </div>
    );
  }

  // In-Article / Footer Banner
  return (
    <div className={`w-full my-6 flex flex-col items-center justify-center ${className}`}>
      <div className="w-full min-h-[100px] border border-dashed border-slate-300 bg-slate-50/70 rounded-lg flex flex-col items-center justify-center p-3 text-center">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          Ruang Iklan Sponsor (Dalam Artikel)
        </span>
        <p className="text-[11px] text-slate-400 mt-0.5">
          Penempatan iklan yang terpisah rapi tanpa mengganggu alur membaca pengunjung
        </p>
      </div>
    </div>
  );
};
