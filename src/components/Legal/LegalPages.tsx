import React, { useState } from 'react';
import { ShieldCheck, Mail, Send, CheckCircle2, FileText, AlertTriangle, ArrowLeft } from 'lucide-react';

interface LegalPagesProps {
  pageType: 'tentang' | 'kontak' | 'privasi' | 'syarat' | 'disclaimer';
  onBackToHome: () => void;
}

export const LegalPages: React.FC<LegalPagesProps> = ({ pageType, onBackToHome }) => {
  // State form Hubungi Kami
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');
  const [terkirim, setTerkirim] = useState(false);

  const handleSubmitPesan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama || !pesan) return;
    setTerkirim(true);
    setTimeout(() => {
      setTerkirim(false);
      setNama('');
      setEmail('');
      setPesan('');
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-900 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-10 shadow-xs">
        {/* TENTANG KAMI */}
        {pageType === 'tentang' && (
          <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">Profil Website</span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">Tentang Kami – Pusat Cuan Digital</h1>
              <p className="text-xs md:text-sm text-slate-500 mt-1">
                "Temukan Alat Digital, Ide, dan Inspirasi untuk Mengembangkan Usaha Anda."
              </p>
            </div>

            <p>
              Selamat datang di <strong>Pusat Cuan Digital</strong>, platform sumber daya digital gratis yang dirancang khusus untuk membantu para pemula, pelaku usaha mikro, kecil, dan menengah (UMKM), serta konten kreator di seluruh Indonesia.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">Misi Kami</h2>
            <p>
              Kami meyakini bahwa teknologi digital dan kecerdasan buatan (AI) harus dapat diakses oleh siapa saja dengan mudah tanpa hambatan biaya langganan yang mahal atau kerumitan teknis. Misi utama kami adalah menyediakan:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-sm">
              <li><strong>Prompt AI Siap Pakai:</strong> Template instruksi praktis untuk ChatGPT, Claude, dan Gemini guna menunjang produktivitas dan penulisan jualan.</li>
              <li><strong>Alat Online Gratis:</strong> Perangkat bantu sederhana seperti pembuat caption jualan, kalkulator keuntungan, dan pembuat hashtag yang berjalan langsung di peramban.</li>
              <li><strong>Edukasi & Panduan Praktis:</strong> Artikel langkah-demi-langkah mengenai ide usaha modal kecil, tips jualan online di marketplace, dan manajemen kas harian.</li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900 pt-2">Komitmen Kualitas</h2>
            <p>
              Kami berkomitmen untuk tidak memasang iklan palsu, tombol unduhan jebakan, atau konten penipuan. Semua alat dan artikel diuji secara independen demi memberikan manfaat nyata bagi perkembangan usaha Anda.
            </p>
          </div>
        )}

        {/* HUBUNGI KAMI */}
        {pageType === 'kontak' && (
          <div className="space-y-6 text-slate-700 text-sm md:text-base">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">Layanan Pengguna</span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">Hubungi Kami</h1>
              <p className="text-xs md:text-sm text-slate-500 mt-1">
                Punya pertanyaan, kritik, saran, atau usulan prompt baru? Kami senang mendengar dari Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Form Pesan */}
              <div>
                <h2 className="text-base font-bold text-slate-900 mb-3">Kirimkan Pesan Anda</h2>
                {terkirim ? (
                  <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <h3 className="text-sm font-bold text-emerald-900">Pesan Berhasil Terkirim!</h3>
                    <p className="text-xs text-emerald-700 mt-1">
                      Terima kasih atas masukannya. Tim kami akan membaca pesan Anda secepatnya.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitPesan} className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Nama Lengkap *</label>
                      <input
                        type="text"
                        required
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        placeholder="Contoh: Budi Santoso"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Alamat Email *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nama@email.com"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Isi Pesan atau Saran *</label>
                      <textarea
                        rows={4}
                        required
                        value={pesan}
                        onChange={(e) => setPesan(e.target.value)}
                        placeholder="Tuliskan pertanyaan atau usulan fitur yang Anda butuhkan..."
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Kirim Pesan Sekarang</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Info Kontak & Alamat Placeholder */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4 text-xs text-slate-600">
                <h2 className="text-sm font-bold text-slate-900">Kontak Resmi & Alamat</h2>
                <p>
                  Untuk keperluan kerjasama promosi sponsor, pertanyaan kemitraan, atau pelaporan kendala teknis:
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <div>
                    <span className="font-semibold text-slate-700 block">Email Redaksi & Dukungan:</span>
                    <span className="text-sky-800 font-mono">kontak@pusatcuandigital.com</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700 block">Alamat Kantor / Operasional:</span>
                    <span className="text-slate-600">
                      Gedung Digital Hub Nusantara, Lantai 3, Jl. Sudirman No. 88, Jakarta Selatan, DKI Jakarta 12190
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700 block">Jam Layanan:</span>
                    <span className="text-slate-600">Senin - Jumat (09.00 - 17.00 WIB)</span>
                  </div>
                </div>

                <div className="p-3 bg-sky-50 rounded-lg border border-sky-100 text-[11px] text-sky-900">
                  💡 <em>Catatan: Detail kontak di atas dapat disesuaikan dengan alamat surel dan domain resmi setelah peluncuran domain publik Anda.</em>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* KEBIJAKAN PRIVASI */}
        {pageType === 'privasi' && (
          <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">Perlindungan Data</span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">Kebijakan Privasi (Privacy Policy)</h1>
              <p className="text-xs md:text-sm text-slate-500 mt-1">Terakhir diperbarui: 5 November 2026</p>
            </div>

            <p>
              Privasi pengunjung merupakan prioritas utama bagi <strong>Pusat Cuan Digital</strong>. Dokumen Kebijakan Privasi ini menerangkan jenis data yang dicatat dan bagaimana kami menggunakannya.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">1. Penyimpanan Lokal Peramban (Browser LocalStorage)</h2>
            <p>
              Website kami menggunakan fitur penyimpanan lokal peramban (<em>localStorage</em>) untuk menyimpan preferensi pengguna seperti daftar prompt favorit dan preferensi tampilan. Data ini tersimpan secara mandiri di perangkat Anda dan <strong>tidak pernah</strong> dikirimkan ke server kami. Anda dapat menghapus data ini kapan saja dengan membersihkan riwayat browser Anda.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">2. Penggunaan Cookie & Jaringan Periklanan Pihak Ketiga (Google AdSense)</h2>
            <p>
              Website kami disiapkan untuk bekerja sama dengan jaringan periklanan pihak ketiga, termasuk Google AdSense. Pihak ketiga ini dapat menggunakan <em>cookie</em>, <em>web beacon</em>, atau pengidentifikasi perangkat untuk menayangkan iklan yang relevan berdasarkan kunjungan Anda ke situs ini dan situs lainnya di internet.
            </p>
            <p>
              Google menggunakan cookie DART untuk menayangkan iklan kepada pengguna situs kami. Anda dapat memilih untuk menonaktifkan penggunaan cookie DART dengan mengunjungi Kebijakan Privasi Jaringan Iklan dan Konten Google di pengaturan iklan akun Google Anda.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">3. Tidak Ada Pengumpulan Informasi Pribadi Sensitif</h2>
            <p>
              Kami tidak mewajibkan pendaftaran akun atau kartu kredit untuk menikmati seluruh prompt dan alat gratis di website ini.
            </p>
          </div>
        )}

        {/* SYARAT DAN KETENTUAN */}
        {pageType === 'syarat' && (
          <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">Ketentuan Penggunaan</span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">Syarat dan Ketentuan Layanan</h1>
              <p className="text-xs md:text-sm text-slate-500 mt-1">Terakhir diperbarui: 5 November 2026</p>
            </div>

            <p>
              Dengan mengakses dan menggunakan situs <strong>Pusat Cuan Digital</strong>, Anda menyetujui untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak menyetujui ketentuan ini, mohon untuk tidak menggunakan layanan kami.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">1. Hak Penggunaan Konten & Prompt</h2>
            <p>
              Seluruh prompt AI, template teks promosi, dan alat online di situs ini disediakan untuk penggunaan bebas baik keperluan pribadi maupun komersial usaha Anda. Anda berhak menyalin, memodifikasi, dan menerapkan prompt tersebut untuk bisnis Anda tanpa kewajiban membayar royalti.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">2. Larangan Penggunaan</h2>
            <p>
              Pengguna dilarang memanfaatkan template atau alat di situs ini untuk:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-sm">
              <li>Kegiatan penipuan online, skema cepat kaya terlarang, atau promosi barang ilegal.</li>
              <li>Menyebarkan spam atau pesan kebencian yang melanggar hukum di Indonesia.</li>
              <li>Melakukan serangan teknis terhadap infrastruktur hosting situs kami.</li>
            </ul>
          </div>
        )}

        {/* PENYANGKALAN (DISCLAIMER) */}
        {pageType === 'disclaimer' && (
          <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Informasi Hukum</span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">Penyangkalan Informasi (Disclaimer)</h1>
              <p className="text-xs md:text-sm text-slate-500 mt-1">Harap dibaca dengan cermat</p>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <span>
                Pusat Cuan Digital adalah portal edukasi dan alat bantu digital. Kami tidak berafiliasi langsung dengan Google AdSense, Meta, TikTok, ataupun platform AI tertentu.
              </span>
            </div>

            <h2 className="text-lg font-bold text-slate-900 pt-2">1. Bukan Nasihat Finansial atau Hukum Resmi</h2>
            <p>
              Informasi, artikel, dan simulasi keuntungan di website ini disusun untuk tujuan edukasi dan referensi umum. Hasil bisnis, penjualan, dan keuntungan setiap individu dapat berbeda-beda tergantung pada eksekusi, modal, kualitas produk, dan kondisi pasar masing-masing.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">2. Hasil Alat Berbasis Logika Browser</h2>
            <p>
              Alat-alat online seperti pembuat caption dan ide konten di situs ini bekerja menggunakan algoritma template JavaScript peramban lokal. Kami tidak mengklaim alat ini terkoneksi langsung dengan superkomputer berbayar.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">3. Batasan Tanggung Jawab</h2>
            <p>
              Pusat Cuan Digital tidak bertanggung jawab atas kerugian finansial atau risiko bisnis yang timbul dari keputusan pribadi pengguna setelah membaca panduan atau menerapkan prompt di situs ini.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
