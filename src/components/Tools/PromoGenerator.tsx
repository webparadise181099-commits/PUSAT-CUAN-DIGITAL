import React, { useState } from 'react';
import { Sparkles, Copy, Check, MessageSquare, Send, Tag } from 'lucide-react';
import { cleanWhatsAppNumber } from '../../utils/format';

type PromoTheme = 'gajian' | 'buy1get1' | 'launching' | 'flashsale' | 'ongkir';

export const PromoGenerator: React.FC = () => {
  const [theme, setTheme] = useState<PromoTheme>('gajian');
  const [namaToko, setNamaToko] = useState<string>('Dapur Mama Nia');
  const [namaProduk, setNamaProduk] = useState<string>('Rendang Daging Sapi Premium 500gr');
  const [diskon, setDiskon] = useState<string>('Diskon 25% + Bonus Sambal Ijo');
  const [periode, setPeriode] = useState<string>('Hanya 3 Hari Saja (Jumat - Minggu)');
  const [nomorWA, setNomorWA] = useState<string>('081234567890');
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const getVariations = () => {
    const waClean = cleanWhatsAppNumber(nomorWA);

    if (theme === 'gajian') {
      return [
        {
          judul: 'Gaya Ramah & Santai (Cocok untuk Status WhatsApp & Story IG)',
          teks: `🎉 *PROMO SPESIAL GAJIAN DARI ${namaToko.toUpperCase()}!* 🎉

Hai Sahabat ${namaToko}! Waktunya self-reward setelah lelah sebulan kerja keras nih! 😋

Khusus minggu gajian ini, kamu bisa nikmatin:
✨ *${namaProduk}*
🎁 Penawaran: *${diskon}*
⏰ Periode: *${periode}*

Stok promo sangat terbatas ya kak! Jangan sampai kehabisan kuota hari ini.

👉 *Pesan sekarang klik link ini:*
https://wa.me/${waClean}?text=Halo%20${encodeURIComponent(namaToko)},%20saya%20mau%20klaim%20Promo%20Gajian%20${encodeURIComponent(namaProduk)}`
        },
        {
          judul: 'Gaya Urgensi Cepat (Cocok untuk Broadcast Pesan Singkat)',
          teks: `⚡ *SIAPA CEPAT DIA DAPAT: GAJIAN SALE!* ⚡

Kabar gembira buat kamu pelanggan setia *${namaToko}*!
Mulai hari ini:
🔥 *${namaProduk}*
💥 *${diskon}*
⏳ *${periode}*

Slot pesanan terbatas untuk 20 orang pertama hari ini.
Ketik *"KLAIM PROMO"* langsung balas pesan ini atau klik:
👉 https://wa.me/${waClean}`
        },
        {
          judul: 'Gaya Rapi & Elegan (Cocok untuk Komunitas / Grup)',
          teks: `Assalamu'alaikum & Salam Hangat dari *${namaToko}* 🙏

Dalam rangka menyambut awal bulan, kami memberikan apresiasi khusus bagi Bapak/Ibu:
• Produk: *${namaProduk}*
• Keistimewaan: 100% bahan baku pilihan, higienis, dan terpercaya.
• Penawaran Khusus: *${diskon}* (${periode}).

Untuk pemesanan atau pengiriman ke rumah/kantor, silakan hubungi layanan pelanggan kami:
📞 WhatsApp: https://wa.me/${waClean}

Terima kasih atas kepercayaan dan dukungannya pada produk lokal! ✨`
        }
      ];
    }

    if (theme === 'buy1get1') {
      return [
        {
          judul: 'Gaya Seru & Mengajak Teman',
          teks: `🚨 *BELI 1 DAPAT 2?! BENERAN DI ${namaToko.toUpperCase()}!* 🚨

Ajak teman, keluarga, atau pasangan kamu jajan bareng sekarang juga!
Setiap pembelian:
🍟 *${namaProduk}*
🎁 Langsung DAPAT: *${diskon}*!
📅 Promo berlaku: *${periode}*

Nggak perlu mikir dua kali, mumpung persediaan masih ada!
Yuk pesan sekarang:
👉 https://wa.me/${waClean}?text=Halo%20mau%20promo%20Beli%201%20Gratis%201`
        },
        {
          judul: 'Gaya Flash Promo Hemat',
          teks: `💰 *DOUBLE UNTUNG HARI INI!*
Makan enak, dompet tetap aman di *${namaToko}*.

Katalog Promo:
• Item: *${namaProduk}*
• Spesial: *${diskon}*
• Batas Waktu: *${periode}*

Pesan antar langsung ke alamatmu sebelum kehabisan:
📲 https://wa.me/${waClean}`
        },
        {
          judul: 'Gaya Hangat & Komunal',
          teks: `Berbagi kebaikan jadi makin hemat bareng *${namaToko}* ❤️
Dapatkan penawaran istimewa *${namaProduk}* dengan keuntungan *${diskon}*.
Berlaku selama *${periode}*.
Info & order: https://wa.me/${waClean}`
        }
      ];
    }

    // Default flash sale / launching
    return [
      {
        judul: 'Gaya Peluncuran / Flash Sale Eksklusif',
        teks: `🔥 *PERDANA RILIS DARI ${namaToko.toUpperCase()}!* 🔥

Akhirnya yang ditunggu-tunggu hadir juga!
Kenalan yuk sama varian terbaru kami:
🌟 *${namaProduk}*

Khusus pembeli tercepat dapat keuntungan:
🎁 *${diskon}*
⏰ *${periode}*

Buktikan sendiri sensasinya! Order kilat via WhatsApp:
👉 https://wa.me/${waClean}?text=Saya%20mau%20coba%20${encodeURIComponent(namaProduk)}`
      },
      {
        judul: 'Gaya Promo Hemat Berkualitas',
        teks: `Kualitas nomor satu, harga ramah di kantong!
*${namaToko}* mempersembahkan penawaran terbaik untuk *${namaProduk}*.
Nikmati *${diskon}* selama *${periode}*.
Order sekarang di https://wa.me/${waClean}`
      },
      {
        judul: 'Gaya Pengingat Terakhir (Last Call)',
        teks: `⏰ *PENGINGAT TERAKHIR HARI INI!*
Jangan sampai ketinggalan promo *${namaProduk}* dari *${namaToko}*.
Penawaran *${diskon}* akan segera berakhir (${periode}).
Amankan pesananmu: https://wa.me/${waClean}`
      }
    ];
  };

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const variations = getVariations();

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
      {/* Header Alat */}
      <div className="pb-6 border-b border-slate-100">
        <div className="flex items-center gap-2 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-1">
          <Sparkles className="w-4 h-4" />
          <span>Generator Copywriting Penjualan</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-slate-900">
          Generator Teks Promosi WhatsApp & Sosmed
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Buat pesan promosi jualan yang menarik dalam hitungan detik. Siap dibagikan ke status WhatsApp, broadcast pelanggan, atau Instagram.
        </p>
      </div>

      {/* Tabs Tema Promo */}
      <div className="flex flex-wrap items-center gap-2 mt-6 p-1.5 bg-slate-100 rounded-lg max-w-2xl">
        <button
          onClick={() => setTheme('gajian')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${
            theme === 'gajian' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          🎉 Promo Gajian (Payday)
        </button>
        <button
          onClick={() => setTheme('buy1get1')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${
            theme === 'buy1get1' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          🎁 Beli 1 Gratis 1
        </button>
        <button
          onClick={() => setTheme('launching')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${
            theme === 'launching' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          🚀 Produk Baru / Flash Sale
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Form Inputs */}
        <div className="lg:col-span-5 space-y-3.5">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Nama Usaha / Toko</label>
            <input
              type="text"
              value={namaToko}
              onChange={(e) => setNamaToko(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none"
              placeholder="Contoh: Dapur Mama Nia"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Nama Produk yang Dipromosikan</label>
            <input
              type="text"
              value={namaProduk}
              onChange={(e) => setNamaProduk(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none"
              placeholder="Contoh: Rendang Sapi 500gr"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Keuntungan / Diskon Promo</label>
            <input
              type="text"
              value={diskon}
              onChange={(e) => setDiskon(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none"
              placeholder="Contoh: Diskon 25% + Gratis Sambal"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Masa Berlaku</label>
              <input
                type="text"
                value={periode}
                onChange={(e) => setPeriode(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none"
                placeholder="Contoh: 3 Hari Saja"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">No. WhatsApp Order</label>
              <input
                type="text"
                value={nomorWA}
                onChange={(e) => setNomorWA(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none"
                placeholder="081234567890"
              />
            </div>
          </div>
        </div>

        {/* Hasil 3 Variasi Copywriting */}
        <div className="lg:col-span-7 space-y-4">
          {variations.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 transition hover:border-slate-300">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
                <span className="text-xs font-semibold text-slate-800">{item.judul}</span>
                <button
                  onClick={() => handleCopy(item.teks, idx)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-md transition shadow-xs"
                >
                  {copiedIdx === idx ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedIdx === idx ? 'Tersalin' : 'Salin Pesan'}</span>
                </button>
              </div>

              <pre className="font-sans text-xs text-slate-700 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
                {item.teks}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
