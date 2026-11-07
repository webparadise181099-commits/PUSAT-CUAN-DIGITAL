import React, { useState } from 'react';
import { 
  Sparkles, Copy, Check, RotateCcw, Calculator, FileText, 
  Hash, Tag, HelpCircle, Layers, CheckCircle2, ShoppingBag, 
  Flame, Briefcase, Percent, DollarSign, Type, MessageSquare
} from 'lucide-react';
import { ToolType } from '../../types';
import { TOOLS_DATA } from '../../data/toolsData';
import { formatRupiah } from '../../utils/format';

interface OnlineToolsProps {
  initialTool?: ToolType;
}

export const OnlineTools: React.FC<OnlineToolsProps> = ({ initialTool = 'caption' }) => {
  const [activeTool, setActiveTool] = useState<ToolType>(initialTool);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string = 'default') => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // =================== 1. CAPTION JUALAN ===================
  const [capProduk, setCapProduk] = useState('Gamis Rayon Premium');
  const [capTarget, setCapTarget] = useState('Ibu Muda & Wanita Karir');
  const [capPromo, setCapPromo] = useState('Diskon 25% + Gratis Bros Cantik');
  const [capGaya, setCapGaya] = useState<'santai' | 'elegan' | 'urgensi'>('santai');
  const [captionResults, setCaptionResults] = useState<string[]>([]);

  const generateCaption = () => {
    let results: string[] = [];
    if (capGaya === 'santai') {
      results = [
        `✨ Tampil anggun tanpa gerah seharian! ✨\n\nSiapa bilang baju cantik itu harus bikin sumuk? Kenalan yuk sama ${capProduk}. Bahannya adem pol, jatuh pas dipakai, dan ramah banget buat busui maupun wudhu.\n\nKhusus buat kamu: ${capPromo}! 🥰\n\nStoknya rebutan banget ya kak, jangan nyesel kalau varian favoritmu habis duluan!\n\n👉 Pesan sekarang sebelum kehabisan: [Tautan Order]`,
        `Siapa nih yang dari kemarin nanyain restock ${capProduk}? 🙋‍♀️\n\nAkhirnya yang ditunggu-tunggu hadir kembali dengan warna-warna baru yang super manis!\n\n🎁 Spesial minggu ini: ${capPromo}!\n\nCocok banget dipakai santai di rumah maupun jalan-jalan akhir pekan. Yuk amankan pesananmu sekarang:\n📲 WhatsApp: [Nomor WA Kamu]`,
        `OOTD impian para ${capTarget} yang mau tampil rapi dalam 3 menit! 🌸\n\n${capProduk} siap nemenin rutinitas harianmu. Nyaman, jahitan rapi, dan ga gampang kusut.\n\n🔥 PROMO HARI INI: ${capPromo}!\n\nKlik link di bio atau komen "MAU" biar dikirimin detail katalognya ya kak! 💌`
      ];
    } else if (capGaya === 'urgensi') {
      results = [
        `🚨 PERINGATAN FLASH SALE: SISA 15 PCS LAGI! 🚨\n\nPromo eksklusif untuk ${capProduk} resmi dibuka!\n\n💥 Penawaran Gila: ${capPromo}!\n⏳ Hanya berlaku sampai malam ini pukul 23.59 WIB!\n\nSudah banyak yang checkout di keranjang, jangan sampai ketinggalan giliran kamu.\n\n👉 Klik link sekarang sebelum promo ditutup: [Tautan Order]`,
        `⚡ SIAPA CEPAT DIA DAPAT! ⚡\n\nBuat ${capTarget} yang cerdas berbelanja, ini saatnya berhemat besar!\n\nDapatkan ${capProduk} dengan penawaran: ${capPromo}.\n\nKetik "AMBIL PROMO" di kolom komentar atau kirim pesan langsung via DM sekarang juga! 🏃‍♂️💨`,
        `⚠️ JANGAN DIBACA KALAU TIDAK MAU HEMAT! ⚠️\n\nHanya hari ini, ${capProduk} dibanderol dengan ${capPromo}.\n\nGaransi 100% uang kembali bila bahan tidak sesuai deskripsi. Kuota sangat terbatas.\n\nAmankan milikmu sekarang: [Link WhatsApp]`
      ];
    } else {
      results = [
        `Keanggunan dalam kesederhanaan. Hadirkan sentuhan berkelas pada setiap penampilan Anda bersama ${capProduk}.\n\nDirancang khusus untuk kenyamanan prima ${capTarget}, memadukan material berkualitas tinggi dengan siluet potongan yang presisi.\n\nNikmati penawaran istimewa: ${capPromo}.\n\nInformasi pemesanan & konsultasi ukuran:\nWhatsApp: [Nomor WA Toko]`,
        `Kualitas yang berbicara tanpa banyak kata. ${capProduk} hadir untuk menyempurnakan hari-hari aktif Anda dengan rasa percaya diri penuh.\n\nKoleksi terbatas dengan penawaran eksklusif: ${capPromo}.\n\nKunjungi etalase resmi kami melalui tautan di profil.`,
        `Sebuah karya kenyamanan untuk Anda yang mengutamakan kualitas. Temukan keindahan ${capProduk} hari ini.\n\nApresiasi pelanggan: ${capPromo}.\n\nHubungi tim layanan pelanggan kami untuk pemesanan langsung.`
      ];
    }
    setCaptionResults(results);
  };

  // =================== 2. DESKRIPSI PRODUK ===================
  const [descNama, setDescNama] = useState('Tas Ransel Laptop Anti Air Waterproof');
  const [descBahan, setDescBahan] = useState('Kain Cordura Nylon 1000D + Ritsleting YKK Tahan Air');
  const [descFitur, setDescFitur] = useState('Muat laptop hingga 15.6 inch, ada slot kabel USB charger, busa punggung tebal anti pegal, kantong rahasia di belakang');
  const [descGaransi, setDescGaransi] = useState('Garansi retur ganti baru 7 hari jika ada jahitan lepas');
  const [descResult, setDescResult] = useState('');

  const generateDescription = () => {
    const text = `Selamat datang di toko resmi kami! Produk yang kami jual 100% Original & Baru.

📌 NAMA PRODUK:
${descNama}

🌟 KENAPA HARUS MEMILIH PRODUK INI?
Apakah Anda sering khawatir laptop dan dokumen penting basah saat hujan di jalan? ${descNama} hadir sebagai solusi andalan mobilitas harian Anda! Dibuat dengan material premium dan desain fungsional modern.

✨ KEUNGGULAN & FITUR UTAMA:
${descFitur.split(',').map(f => `• ${f.trim()}`).join('\n')}

📐 SPESIFIKASI PRODUK:
• Bahan Utama: ${descBahan}
• Jahitan: Bartack ganda pada titik beban (super kuat & awet)
• Gaya: Kasual / Kerja / Kuliah / Traveling

📦 KELENGKAPAN PAKET:
• 1x ${descNama}
• Plastik Polybag Pelindung Debu
• Kartu Garansi & Panduan Perawatan

🛡️ JAMINAN & GARANSI TOKO:
• ${descGaransi}
• Wajib menyertakan video unboxing utuh tanpa jeda untuk klaim garansi.
• Pengiriman setiap hari kerja (Senin - Sabtu), pesanan sebelum jam 15.00 WIB dikirim di hari yang sama.

Silakan langsung klik "Beli Sekarang" selama persediaan masih ada. Jika ada pertanyaan seputar ukuran atau warna, tim chat kami siap membantu Anda!`;
    setDescResult(text);
  };

  // =================== 3. PEMBUAT IDE KONTEN ===================
  const [ideNiche, setIdeNiche] = useState('Kuliner & Camilan Rumahan');
  const [idePlatform, setIdePlatform] = useState('TikTok & Reels');
  const [ideResults, setIdeResults] = useState<any[]>([]);

  const generateContentIdeas = () => {
    const ideas = [
      {
        no: 1,
        judul: 'Video Uji Ketahanan / Demo Ekstrem',
        hook: '"Jangan percaya sebelum lihat ini: kita uji langsung seberapa renyah/tahan produk ini!"',
        konsep: 'Lakukan demonstrasi nyata (uji tahan air, uji suara renyah ASMR, atau uji komparasi dengan produk biasa). Perlihatkan pembuktian visual yang memuaskan.',
        cta: 'Kira-kira produk ini layak diuji apa lagi? Tulis di komentar ya!'
      },
      {
        no: 2,
        judul: 'Behind The Scenes (Di Balik Dapur)',
        hook: '"Banyak yang nanya: Gimana sih cara kita jaga produk tetap higienis setiap hari?"',
        konsep: 'Sorot proses persiapan bahan, kebersihan dapur/tempat kerja, dan kerapian saat membungkus paket pesanan.',
        cta: 'Ada yang mau dibuatin video proses varian rasa lainnya? Komen di bawah!'
      },
      {
        no: 3,
        judul: 'Kisah Penjual: Mengatasi Masalah Pembeli',
        hook: '"Kemarin ada pembeli yang komplain barangnya terlambat, ini yang langsung kita lakukan..."',
        konsep: 'Bercerita dengan jujur tentang bagaimana toko Anda bertanggung jawab mengganti produk rusak tanpa berdebat. Ini membangun kepercayaan 100%.',
        cta: 'Menurut kalian, tanggung jawab toko seperti ini sudah benar belum?'
      },
      {
        no: 4,
        judul: 'Edukasi / Tips Bermanfaat Tanpa Jualan Keras',
        hook: '"3 Cara sederhana menyimpan makanan/barang ini agar awet berbulan-bulan tanpa kulkas."',
        konsep: 'Berikan tips praktis seputar bidang Anda. Produk Anda hanya muncul sebagai contoh alami di akhir video.',
        cta: 'Simpan video ini biar ga lupa saat butuh nanti!'
      },
      {
        no: 5,
        judul: 'Menjawab Pertanyaan Komentar Netizen (Q&A)',
        hook: '"Menjawab pertanyaan Kak @username: Beneran bisa dikirim ke luar pulau tanpa basi?"',
        konsep: 'Tampilkan tangkapan layar komentar penonton, lalu jelaskan sambil memperlihatkan proses pengemasan vakum berlapis.',
        cta: 'Punya pertanyaan lain seputar produk kami? Langsung tanya di kolom komentar!'
      }
    ];
    setIdeResults(ideas);
  };

  // =================== 4. BIO MEDIA SOSIAL ===================
  const [bioNama, setBioNama] = useState('Kopi Senja Nusantara');
  const [bioBidang, setBioBidang] = useState('Kedai Kopi & Biji Kopi Sangrai Lokal');
  const [bioUsp, setBioUsp] = useState('100% Arabika Asli Petani Jawa Barat · Segar Disangrai');
  const [bioCta, setBioCta] = useState('Pesan kopi & info franchise klik link👇');
  const [bioResults, setBioResults] = useState<string[]>([]);

  const generateBio = () => {
    const list = [
      `☕ ${bioNama} | ${bioBidang}\n🌱 ${bioUsp}\n📍 Bandung, Indonesia\n🚀 Kirim ke seluruh Indonesia\n👇 ${bioCta}\nwa.me/628xxxxxx`,
      `Seduh Semangatmu Bersama ${bioNama} ✨\n• ${bioBidang}\n• ${bioUsp}\n• Buka: 08.00 - 22.00 WIB\n📦 ${bioCta}\nlinktr.ee/tokokamu`,
      `${bioNama} — Teman Ngopi Terbaikmu 🤎\n✓ ${bioUsp}\n✓ Terjual 10.000+ botol\n✓ Halal & Higienis\nOrder cepat & diskon hari ini:\n👇 [Tautan Toko]`,
      `Menghadirkan rasa kopi asli nusantara ke mejamu.\n${bioBidang} terpercaya sejak 2023.\n${bioUsp}.\n${bioCta}\n👉 [Link Katalog]`
    ];
    setBioResults(list);
  };

  // =================== 5. PEMBUAT HASHTAG ===================
  const [tagTopik, setTagTopik] = useState('Kuliner Makanan Pedas');
  const [tagKota, setTagKota] = useState('Jakarta & Bandung');
  const [tagResult, setTagResult] = useState('');

  const generateHashtag = () => {
    const raw = tagTopik.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanKota = tagKota.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    const text = `# KELOMPOK 1: TAGAR POPULER & VIRAL (Jangkauan Luas)
#kulinerindonesia #kulinerpedas #makananenak #cemilankekinian #jajanankekinian #resepmasakan #foodiesindonesia #kulineran #pecintapedas #viralindonesia

# KELOMPOK 2: TAGAR SPESIFIK PRODUK (${tagTopik})
#${raw} #${raw}enak #${raw}murah #${raw}homemade #${raw}pedas #snackpedas #cemilanpedas #bumbupedas #makanansiapaji

# KELOMPOK 3: TAGAR WILAYAH & TRANSAKSI LOKAL
#kuliner${cleanKota} #jajanan${cleanKota} #jualanonline #umkmindonesia #banggaproduklokal #banggabuatanindonesia #codindonesia #bisnisrumahan`;
    setTagResult(text);
  };

  // =================== 6. JUDUL PRODUK MARKETPLACE ===================
  const [titleKataKunci, setTitleKataKunci] = useState('Sepatu Sneakers Pria');
  const [titleMerk, setTitleMerk] = useState('AeroStep');
  const [titleTipe, setTitleTipe] = useState('Casual Running Ringan Bahan Mesh Breathable');
  const [titleFitur, setTitleFitur] = useState('Original Garansi 100% Free Kaos Kaki');
  const [titleResults, setTitleResults] = useState<string[]>([]);

  const generateProductTitles = () => {
    const t1 = `${titleMerk} ${titleKataKunci} ${titleTipe} - ${titleFitur}`;
    const t2 = `[ORIGINAL] ${titleKataKunci} ${titleMerk} ${titleTipe} Anti Slip Ringan`;
    const t3 = `${titleKataKunci} Pria Wanita ${titleMerk} ${titleTipe} - COD Bayar di Tempat`;
    const t4 = `Promo ${titleMerk} - ${titleKataKunci} Import Quality ${titleTipe} Free Box`;
    setTitleResults([t1, t2, t3, t4]);
  };

  // =================== 7. KALKULATOR KEUNTUNGAN ===================
  const [modalProduk, setModalProduk] = useState<number>(30000);
  const [hargaJual, setHargaJual] = useState<number>(55000);
  const [persenAdmin, setPersenAdmin] = useState<number>(6.5);
  const [biayaKemasan, setBiayaKemasan] = useState<number>(2500);
  const [estimasiJual, setEstimasiJual] = useState<number>(100);

  const biayaAdminNominal = Math.round((hargaJual * persenAdmin) / 100);
  const totalModalBersih = modalProduk + biayaKemasan + biayaAdminNominal;
  const labaBersihSatuan = hargaJual - totalModalBersih;
  const marginLabaPersen = hargaJual > 0 ? Math.round((labaBersihSatuan / hargaJual) * 100) : 0;
  const totalLabaBulanan = labaBersihSatuan * estimasiJual;

  // =================== 8. KALKULATOR DISKON ===================
  const [hargaAwal, setHargaAwal] = useState<number>(150000);
  const [diskonPersen, setDiskonPersen] = useState<number>(30);
  const [voucherRupiah, setVoucherRupiah] = useState<number>(10000);

  const potonganPersen = Math.round((hargaAwal * diskonPersen) / 100);
  const hargaSetelahPersen = Math.max(0, hargaAwal - potonganPersen);
  const hargaBayarAkhir = Math.max(0, hargaSetelahPersen - voucherRupiah);
  const totalHemat = hargaAwal - hargaBayarAkhir;
  const persentaseHematTotal = hargaAwal > 0 ? Math.round((totalHemat / hargaAwal) * 100) : 0;

  // =================== 9. TEKS PROMOSI ===================
  const [promoJenis, setPromoJenis] = useState<'gajian' | 'b1g1' | 'flash' | 'cucigudang'>('gajian');
  const [promoProduk, setPromoProduk] = useState('Paket Skincare Pencerah Wajah');
  const [promoNilai, setPromoNilai] = useState('Diskon 35% + Gratis Tas Kosmetik');
  const [promoBatas, setPromoBatas] = useState('Sampai Akhir Pekan Ini');
  const [promoResult, setPromoResult] = useState('');

  const generatePromoText = () => {
    let text = '';
    if (promoJenis === 'gajian') {
      text = `🎉 PROMO GAJIAN CERIA! 🎉\n\nWaktunya apresiasi diri sendiri setelah sebulan bekerja keras! Khusus minggu ini, nikmati penawaran spesial:\n\n✨ PRODUK: ${promoProduk}\n🎁 PENAWARAN: ${promoNilai}\n⏰ BATAS PROMO: ${promoBatas}\n\nJangan sampai kehabisan slot pesanan Anda. Klik link di bawah untuk pemesanan cepat:\n👉 [Tautan WhatsApp / Toko]`;
    } else if (promoJenis === 'b1g1') {
      text = `🚨 PROMO SPESIAL: BELI 1 DAPAT 2! 🚨\n\nKabar gembira untuk Anda dan orang tersayang! Setiap pembelian 1 pcs ${promoProduk}, langsung otomatis DAPAT ${promoNilai}!\n\n📅 Masa berlaku: ${promoBatas}\n⚠️ Stok promo terbatas untuk 50 transaksi tercepat hari ini.\n\nPesan sekarang sebelum kehabisan:\n📲 [Tautan WhatsApp Toko]`;
    } else if (promoJenis === 'cucigudang') {
      text = `📦 OBRAL CUCI GUDANG HABISKAN STOK! 📦\n\nKami sedang membersihkan gudang untuk menyambut stok baru! Dapatkan ${promoProduk} dengan harga modal miring:\n\n💥 ${promoNilai}\n⏳ Berlaku: ${promoBatas} (Atau sampai stok gudang habis)\n\nSemua produk 100% kondisi baru dan bergaransi!\nChat kami sekarang untuk cek ketersediaan: [Tautan WA]`;
    } else {
      text = `⚡ KILAT FLASH SALE: HARGA JATUH HARI INI! ⚡\n\nPenawaran terbatas untuk ${promoProduk}!\n🔥 Hemat hingga: ${promoNilai}\n⏰ Berakhir dalam: ${promoBatas}\n\nSiapa cepat dia dapat! Klik order sekarang: [Tautan Order]`;
    }
    setPromoResult(text);
  };

  // =================== 10. PEMBUAT NAMA BISNIS ===================
  const [namaKataKunci, setNamaKataKunci] = useState('Kopi');
  const [namaGaya, setNamaGaya] = useState<'modern' | 'nusantara' | 'catchy'>('modern');
  const [namaResults, setNamaResults] = useState<any[]>([]);

  const generateBusinessNames = () => {
    let list: any[] = [];
    if (namaGaya === 'modern') {
      list = [
        { nama: `Daily${namaKataKunci}`, arti: 'Melambangkan kebiasaan positif dan produk yang menemani setiap hari.', slogan: 'Awali Hari dengan Lebih Baik' },
        { nama: `${namaKataKunci}Craft Co.`, arti: 'Menonjolkan keahlian tangan dan kualitas racikan premium.', slogan: 'Kualitas dalam Setiap Sentuhan' },
        { nama: `Urban${namaKataKunci}`, arti: 'Gaya hidup modern perkotaan yang dinamis dan berkelas.', slogan: 'Kenyamanan di Tengah Kesibukan' },
        { nama: `Pure${namaKataKunci}`, arti: 'Komitmen pada bahan baku murni alami tanpa bahan pengawet.', slogan: 'Alami, Segar, Jujur' },
        { nama: `${namaKataKunci}Space`, arti: 'Ruang untuk bersantai, berbagi inspirasi, dan produktif.', slogan: 'Tempat Ide Hebat Dimulai' }
      ];
    } else if (namaGaya === 'nusantara') {
      list = [
        { nama: `${namaKataKunci} Nusantara`, arti: 'Kekayaan cita rasa warisan rempah dan tradisi nusantara.', slogan: 'Kearifan Lokal Rasa Dunia' },
        { nama: `Omah ${namaKataKunci}`, arti: 'Kehangatan rumah keluarga yang ramah dan penuh persaudaraan.', slogan: 'Serasa di Rumah Sendiri' },
        { nama: `${namaKataKunci} Berkah Jaya`, arti: 'Doa pembawa rezeki berlimpah dan keberkahan jangka panjang.', slogan: 'Berkah untuk Semua' },
        { nama: `${namaKataKunci} Kencana`, arti: 'Kencana berarti emas mulia bernilai tinggi dan terpercaya.', slogan: 'Kemewahan Mutu Asli' },
        { nama: `Lumbung ${namaKataKunci}`, arti: 'Pusat penyimpanan hasil bumi terbaik dan melimpah.', slogan: 'Pilihan Petani Terbaik' }
      ];
    } else {
      list = [
        { nama: `KopiKopiYuk`, arti: 'Nama bersahabat yang mengajak nongkrong bareng santai.', slogan: 'Nongkrong Enak Dompet Aman' },
        { nama: `Maju${namaKataKunci}`, arti: 'Energi optimisme untuk terus berkembang maju.', slogan: 'Langkah Mantap Setiap Hari' },
        { nama: `${namaKataKunci}Juara`, arti: 'Rasa dan kualitas yang menjadi pemenang di hati pembeli.', slogan: 'Juara Rasanya, Juara Hematnya' },
        { nama: `Bikin${namaKataKunci}`, arti: 'Nama aksi yang memicu rasa penasaran dan ingin mencoba.', slogan: 'Bikin Nagih Bikin Nyaman' },
        { nama: `Super${namaKataKunci}`, arti: 'Menjanjikan porsi, rasa, dan pelayanan luar biasa.', slogan: 'Hebat Produknya Mantap Rasanya' }
      ];
    }
    setNamaResults(list);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
      {/* Header Alat */}
      <div className="p-6 md:p-8 border-b border-slate-100 bg-slate-50/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>10 Alat Digital Gratis Tanpa Batas</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Pusat Alat Bantu Usaha & Konten Kreator
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1 max-w-2xl">
              Gunakan seluruh alat langsung di peramban tanpa perlu login dan tanpa kuota terbatas. 100% gratis untuk mempermudah penjualan Anda.
            </p>
          </div>

          <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Otomatis Tersimpan di Browser</span>
          </div>
        </div>

        {/* Horizontal Scrollable Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pt-6 scrollbar-none">
          {TOOLS_DATA.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition shrink-0 whitespace-nowrap flex items-center gap-1.5 ${
                activeTool === tool.id
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span>{tool.nama}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* ================= TOOL 1: CAPTION JUALAN ================= */}
        {activeTool === 'caption' && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">Pembuat Caption Jualan Media Sosial</h3>
              <p className="text-xs text-slate-500 mt-0.5">Hasilkan 3 opsi caption promosi menarik siap pakai.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Nama Produk yang Dijual *</label>
                  <input
                    type="text"
                    value={capProduk}
                    onChange={(e) => setCapProduk(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                    placeholder="Contoh: Gamis Rayon / Kopi Susu"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Target Pembeli Utama</label>
                  <input
                    type="text"
                    value={capTarget}
                    onChange={(e) => setCapTarget(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                    placeholder="Contoh: Ibu Rumah Tangga / Mahasiswa"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Promo / Keuntungan Pembeli</label>
                  <input
                    type="text"
                    value={capPromo}
                    onChange={(e) => setCapPromo(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                    placeholder="Contoh: Diskon 25% + Gratis Ongkir"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Pilih Gaya Bahasa</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setCapGaya('santai')}
                      className={`py-2 text-xs font-medium rounded-lg border transition ${
                        capGaya === 'santai' ? 'bg-sky-50 border-sky-500 text-sky-800 font-bold' : 'border-slate-200 text-slate-600'
                      }`}
                    >
                      Santai & Akrab
                    </button>
                    <button
                      type="button"
                      onClick={() => setCapGaya('urgensi')}
                      className={`py-2 text-xs font-medium rounded-lg border transition ${
                        capGaya === 'urgensi' ? 'bg-sky-50 border-sky-500 text-sky-800 font-bold' : 'border-slate-200 text-slate-600'
                      }`}
                    >
                      Urgensi Cepat
                    </button>
                    <button
                      type="button"
                      onClick={() => setCapGaya('elegan')}
                      className={`py-2 text-xs font-medium rounded-lg border transition ${
                        capGaya === 'elegan' ? 'bg-sky-50 border-sky-500 text-sky-800 font-bold' : 'border-slate-200 text-slate-600'
                      }`}
                    >
                      Elegan & Rapi
                    </button>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={generateCaption}
                    className="flex-1 py-2.5 px-4 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Buat 3 Variasi Caption</span>
                  </button>
                  <button
                    onClick={() => {
                      setCapProduk('');
                      setCapTarget('');
                      setCapPromo('');
                      setCaptionResults([]);
                    }}
                    className="p-2.5 border border-slate-200 hover:bg-slate-50 text-slate-500 rounded-lg transition"
                    title="Reset Formulir"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Area Hasil */}
              <div className="lg:col-span-7 space-y-4">
                {captionResults.length === 0 ? (
                  <div className="h-full min-h-[260px] border border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center p-6 text-center text-slate-400">
                    <MessageSquare className="w-8 h-8 mb-2 opacity-50" />
                    <p className="text-xs">Isi formulir di sebelah kiri dan klik tombol "Buat 3 Variasi Caption" untuk melihat hasilnya.</p>
                  </div>
                ) : (
                  captionResults.map((caption, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
                        <span className="text-xs font-bold text-slate-800">Opsi {idx + 1}</span>
                        <button
                          onClick={() => handleCopy(caption, `cap-${idx}`)}
                          className="px-2.5 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded-md text-xs font-medium text-slate-700 transition flex items-center gap-1 shadow-xs"
                        >
                          {copiedKey === `cap-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedKey === `cap-${idx}` ? 'Tersalin!' : 'Salin'}</span>
                        </button>
                      </div>
                      <pre className="text-xs text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">
                        {caption}
                      </pre>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================= TOOL 2: DESKRIPSI PRODUK ================= */}
        {activeTool === 'deskripsi' && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">Pembuat Deskripsi Produk Marketplace</h3>
              <p className="text-xs text-slate-500 mt-0.5">Format deskripsi terstruktur standar Shopee, Tokopedia, dan TikTok Shop.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 space-y-3.5">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Nama Produk Lengkap *</label>
                  <input
                    type="text"
                    value={descNama}
                    onChange={(e) => setDescNama(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Bahan & Material Utama</label>
                  <input
                    type="text"
                    value={descBahan}
                    onChange={(e) => setDescBahan(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Fitur & Keunggulan (Pisahkan dengan koma)</label>
                  <textarea
                    rows={3}
                    value={descFitur}
                    onChange={(e) => setDescFitur(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Ketentuan Garansi / Toko</label>
                  <input
                    type="text"
                    value={descGaransi}
                    onChange={(e) => setDescGaransi(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={generateDescription}
                    className="flex-1 py-2.5 px-4 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Buat Deskripsi Siap Salin</span>
                  </button>
                  <button
                    onClick={() => {
                      setDescNama('');
                      setDescBahan('');
                      setDescFitur('');
                      setDescResult('');
                    }}
                    className="p-2.5 border border-slate-200 text-slate-500 rounded-lg hover:bg-slate-50 transition"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7">
                {descResult ? (
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                      <span className="text-xs font-bold text-slate-800">Format Deskripsi Marketplace</span>
                      <button
                        onClick={() => handleCopy(descResult, 'desc-res')}
                        className="px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-medium transition flex items-center gap-1.5"
                      >
                        {copiedKey === 'desc-res' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedKey === 'desc-res' ? 'Berhasil Disalin!' : 'Salin Deskripsi'}</span>
                      </button>
                    </div>
                    <pre className="text-xs text-slate-700 whitespace-pre-wrap font-sans leading-relaxed max-h-96 overflow-y-auto">
                      {descResult}
                    </pre>
                  </div>
                ) : (
                  <div className="h-full min-h-[260px] border border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center p-6 text-center text-slate-400">
                    <FileText className="w-8 h-8 mb-2 opacity-50" />
                    <p className="text-xs">Klik tombol "Buat Deskripsi Siap Salin" untuk menghasilkan format katalog.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================= TOOL 3: PEMBUAT IDE KONTEN ================= */}
        {activeTool === 'ide-konten' && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">Pembuat 5 Ide Konten Video Pendek (TikTok & Reels)</h3>
              <p className="text-xs text-slate-500 mt-0.5">Lengkap dengan hook 3 detik pertama, konsep visual, dan Call to Action.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-full sm:flex-1">
                <label className="block text-xs font-medium text-slate-700 mb-1">Niche / Bidang Usaha Anda</label>
                <input
                  type="text"
                  value={ideNiche}
                  onChange={(e) => setIdeNiche(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                  placeholder="Contoh: Kuliner Pedas / Fashion / Jasa Cuci Sepatu"
                />
              </div>

              <div className="w-full sm:w-auto pt-5">
                <button
                  onClick={generateContentIdeas}
                  className="w-full sm:w-auto px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Dapatkan 5 Ide Konten</span>
                </button>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              {ideResults.length === 0 ? (
                <div className="border border-dashed border-slate-200 rounded-xl p-8 text-center text-slate-400 text-xs">
                  Klik tombol di atas untuk menampilkan 5 konsep video siap rekam.
                </div>
              ) : (
                ideResults.map((item) => (
                  <div key={item.no} className="bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-slate-300 transition">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-900 text-white text-xs font-bold flex items-center justify-center">
                          {item.no}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900">{item.judul}</h4>
                      </div>
                      <button
                        onClick={() => handleCopy(`Ide ${item.no}: ${item.judul}\nHook: ${item.hook}\nKonsep: ${item.konsep}\nCTA: ${item.cta}`, `ide-${item.no}`)}
                        className="px-2.5 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded-md text-xs font-medium text-slate-700 transition flex items-center gap-1 shadow-xs"
                      >
                        {copiedKey === `ide-${item.no}` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedKey === `ide-${item.no}` ? 'Tersalin' : 'Salin Ide'}</span>
                      </button>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div>
                        <span className="font-semibold text-sky-800">Hook 3 Detik: </span>
                        <span className="text-slate-800 italic font-medium">{item.hook}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-700">Konsep Visual: </span>
                        <span className="text-slate-600">{item.konsep}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-emerald-800">Ajakan Aksi (CTA): </span>
                        <span className="text-slate-600">{item.cta}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* ================= TOOL 4: PEMBUAT BIO MEDIA SOSIAL ================= */}
        {activeTool === 'bio' && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">Pembuat Bio Profil Instagram & TikTok</h3>
              <p className="text-xs text-slate-500 mt-0.5">Maksimal 150 karakter, rapi, dan mendorong klik link pemesanan.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 space-y-3.5">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Nama Brand / Toko</label>
                  <input
                    type="text"
                    value={bioNama}
                    onChange={(e) => setBioNama(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Bidang Usaha</label>
                  <input
                    type="text"
                    value={bioBidang}
                    onChange={(e) => setBioBidang(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Keunggulan Unik (USP)</label>
                  <input
                    type="text"
                    value={bioUsp}
                    onChange={(e) => setBioUsp(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Ajakan Bertindak (CTA Link)</label>
                  <input
                    type="text"
                    value={bioCta}
                    onChange={(e) => setBioCta(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={generateBio}
                    className="flex-1 py-2.5 px-4 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Buat 4 Variasi Bio</span>
                  </button>
                  <button
                    onClick={() => {
                      setBioNama('');
                      setBioBidang('');
                      setBioUsp('');
                      setBioResults([]);
                    }}
                    className="p-2.5 border border-slate-200 text-slate-500 rounded-lg hover:bg-slate-50 transition"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                {bioResults.length === 0 ? (
                  <div className="h-full min-h-[260px] border border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center p-6 text-center text-slate-400">
                    <p className="text-xs">Klik tombol "Buat 4 Variasi Bio" untuk melihat hasil format profil.</p>
                  </div>
                ) : (
                  bioResults.map((bio, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
                        <span className="text-xs font-bold text-slate-800">Model Bio #{idx + 1}</span>
                        <button
                          onClick={() => handleCopy(bio, `bio-${idx}`)}
                          className="px-2.5 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded-md text-xs font-medium text-slate-700 transition flex items-center gap-1 shadow-xs"
                        >
                          {copiedKey === `bio-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedKey === `bio-${idx}` ? 'Tersalin' : 'Salin'}</span>
                        </button>
                      </div>
                      <pre className="text-xs text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">
                        {bio}
                      </pre>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================= TOOL 5: PEMBUAT HASHTAG ================= */}
        {activeTool === 'hashtag' && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">Pembuat Kumpulan Hashtag Populer & Bertarget</h3>
              <p className="text-xs text-slate-500 mt-0.5">Dikelompokkan menjadi tagar viral, tagar spesifik, dan tagar belanja lokal.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Topik Jualan / Konten</label>
                <input
                  type="text"
                  value={tagTopik}
                  onChange={(e) => setTagTopik(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                  placeholder="Contoh: Hijab Pashmina / Kue Kering"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Wilayah / Kota Target</label>
                <input
                  type="text"
                  value={tagKota}
                  onChange={(e) => setTagKota(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                  placeholder="Contoh: Jakarta / Surabaya / Medan"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={generateHashtag}
                className="py-2.5 px-6 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold transition flex items-center gap-2"
              >
                <Hash className="w-3.5 h-3.5" />
                <span>Hasilkan Hashtag</span>
              </button>
            </div>

            {tagResult && (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mt-4">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                  <span className="text-xs font-bold text-slate-800">Daftar Tagar Siap Salin</span>
                  <button
                    onClick={() => handleCopy(tagResult, 'tag-res')}
                    className="px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-medium transition flex items-center gap-1.5"
                  >
                    {copiedKey === 'tag-res' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'tag-res' ? 'Semua Tersalin!' : 'Salin Semua Hashtag'}</span>
                  </button>
                </div>
                <pre className="text-xs text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">
                  {tagResult}
                </pre>
              </div>
            )}
          </div>
        )}

        {/* ================= TOOL 6: PEMBUAT JUDUL PRODUK ================= */}
        {activeTool === 'judul' && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">Pembuat Judul Produk Ramah Algoritma Marketplace</h3>
              <p className="text-xs text-slate-500 mt-0.5">Formula: [Merk] + [Kata Kunci Utama] + [Model/Varian] + [Keunggulan Tambahan].</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Kata Kunci Produk Utama *</label>
                <input
                  type="text"
                  value={titleKataKunci}
                  onChange={(e) => setTitleKataKunci(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                  placeholder="Misal: Sepatu Sneakers Pria"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Nama Merk / Toko</label>
                <input
                  type="text"
                  value={titleMerk}
                  onChange={(e) => setTitleMerk(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                  placeholder="Misal: AeroStep"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Model / Varian / Bahan</label>
                <input
                  type="text"
                  value={titleTipe}
                  onChange={(e) => setTitleTipe(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                  placeholder="Misal: Casual Running Mesh Breathable"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Daya Tarik Ekstra (Garansi / Bonus / COD)</label>
                <input
                  type="text"
                  value={titleFitur}
                  onChange={(e) => setTitleFitur(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                  placeholder="Misal: Original Garansi 100% Free Kaos Kaki"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={generateProductTitles}
                className="py-2.5 px-6 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold transition flex items-center gap-2"
              >
                <Type className="w-3.5 h-3.5" />
                <span>Buat 4 Pilihan Judul SEO</span>
              </button>
            </div>

            {titleResults.length > 0 && (
              <div className="space-y-3 pt-3">
                {titleResults.map((t, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-800 font-semibold">{t}</span>
                    <button
                      onClick={() => handleCopy(t, `title-${idx}`)}
                      className="px-2.5 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded text-xs font-medium text-slate-700 transition shrink-0 flex items-center gap-1 shadow-xs"
                    >
                      {copiedKey === `title-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedKey === `title-${idx}` ? 'Tersalin' : 'Salin'}</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ================= TOOL 7: KALKULATOR KEUNTUNGAN ================= */}
        {activeTool === 'kalkulator-laba' && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">Kalkulator Keuntungan Jualan & Biaya Admin Marketplace</h3>
              <p className="text-xs text-slate-500 mt-0.5">Ketahui laba bersih riil setelah dipotong biaya admin Shopee/Tokopedia/TikTok Shop.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Modal Pokok Produk (Rp)</label>
                    <input
                      type="number"
                      value={modalProduk || ''}
                      onChange={(e) => setModalProduk(Number(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Harga Jual ke Pembeli (Rp)</label>
                    <input
                      type="number"
                      value={hargaJual || ''}
                      onChange={(e) => setHargaJual(Number(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none font-mono font-bold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Potongan Admin Marketplace (%)</label>
                    <input
                      type="number"
                      step="0.5"
                      value={persenAdmin}
                      onChange={(e) => setPersenAdmin(Number(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                    <p className="text-[10px] text-slate-400 mt-0.5">Umumnya 4% - 8% di marketplace</p>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Biaya Kemasan & Bubble (Rp)</label>
                    <input
                      type="number"
                      value={biayaKemasan || ''}
                      onChange={(e) => setBiayaKemasan(Number(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Estimasi Jumlah Terjual per Bulan (Pcs)</label>
                  <input
                    type="number"
                    value={estimasiJual}
                    onChange={(e) => setEstimasiJual(Number(e.target.value) || 1)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none font-mono"
                  />
                </div>
              </div>

              {/* Box Hasil Perhitungan */}
              <div className="lg:col-span-6 bg-slate-900 text-white rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-sky-400 font-semibold">
                    Ringkasan Laba Bersih per Produk
                  </span>
                  <div className="text-3xl font-black text-white mt-1 font-mono tabular-nums">
                    {formatRupiah(labaBersihSatuan)}
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Margin Bersih Riil: <span className="font-bold text-emerald-400">{marginAktual(marginLabaPersen)}</span>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-300">
                    <div className="flex justify-between">
                      <span>Harga Jual Produk:</span>
                      <span className="font-mono">{formatRupiah(hargaJual)}</span>
                    </div>
                    <div className="flex justify-between text-red-400">
                      <span>Potongan Admin ({persenAdmin}%):</span>
                      <span className="font-mono">-{formatRupiah(biayaAdminNominal)}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Modal + Kemasan:</span>
                      <span className="font-mono">-{formatRupiah(modalProduk + biayaKemasan)}</span>
                    </div>
                  </div>

                  <div className="mt-5 p-3 bg-slate-800/90 rounded-lg border border-slate-700">
                    <div className="text-[11px] text-slate-400">Estimasi Laba Bersih / Bulan ({estimasiJual} pcs):</div>
                    <div className="text-xl font-bold text-emerald-400 font-mono mt-0.5">
                      {formatRupiah(totalLabaBulanan)}
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => handleCopy(`Laba Bersih per Unit: ${formatRupiah(labaBersihSatuan)} (Margin ${marginLabaPersen}%)\nEstimasi Laba Bersih ${estimasiJual} pcs: ${formatRupiah(totalLabaBulanan)}`, 'calc-copy')}
                    className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5"
                  >
                    {copiedKey === 'calc-copy' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedKey === 'calc-copy' ? 'Rincian Disalin!' : 'Salin Ringkasan Laba'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TOOL 8: KALKULATOR DISKON ================= */}
        {activeTool === 'kalkulator-diskon' && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">Kalkulator Diskon & Harga Coret</h3>
              <p className="text-xs text-slate-500 mt-0.5">Hitung harga akhir setelah potongan persen dan voucher diskon rupiah.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Harga Asli Sebelum Diskon (Rp)</label>
                  <input
                    type="number"
                    value={hargaAwal || ''}
                    onChange={(e) => setHargaAwal(Number(e.target.value) || 0)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Diskon Persen (%)</label>
                    <input
                      type="number"
                      min="0"
                      max="99"
                      value={diskonPersen}
                      onChange={(e) => setDiskonPersen(Number(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Potongan Tambahan Voucher (Rp)</label>
                    <input
                      type="number"
                      value={voucherRupiah || ''}
                      onChange={(e) => setVoucherRupiah(Number(e.target.value) || 0)}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none font-mono"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-500">Harga Akhir yang Dibayar Pembeli</span>
                  <div className="text-3xl font-extrabold text-blue-900 font-mono mt-1 tabular-nums">
                    {formatRupiah(hargaBayarAkhir)}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 line-through">
                    Harga Normal: {formatRupiah(hargaAwal)}
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600">
                    <div className="flex justify-between">
                      <span>Total Uang yang Dihemat:</span>
                      <span className="font-bold text-emerald-600 font-mono">{formatRupiah(totalHemat)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Persentase Hemat Efektif:</span>
                      <span className="font-semibold text-slate-800">{persentaseHematTotal}%</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => handleCopy(`Harga Normal: ${formatRupiah(hargaAwal)}\nHarga Promo: ${formatRupiah(hargaBayarAkhir)} (Hemat ${formatRupiah(totalHemat)} / ${persentaseHematTotal}%)`, 'diskon-copy')}
                    className="w-full py-2 px-4 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-medium transition flex items-center justify-center gap-1.5"
                  >
                    {copiedKey === 'diskon-copy' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedKey === 'diskon-copy' ? 'Tersalin!' : 'Salin Format Promo Harga'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TOOL 9: PEMBUAT TEKS PROMOSI ================= */}
        {activeTool === 'promo' && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">Pembuat Teks Promosi WhatsApp & Media Sosial</h3>
              <p className="text-xs text-slate-500 mt-0.5">Template promosi cepat untuk menyambut momen gajian, flash sale, atau cuci gudang.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 space-y-3.5">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Jenis Tema Promosi</label>
                  <select
                    value={promoJenis}
                    onChange={(e) => setPromoJenis(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none bg-white"
                  >
                    <option value="gajian">Promo Gajian (Payday Sale)</option>
                    <option value="b1g1">Beli 1 Gratis 1 (Buy 1 Get 1)</option>
                    <option value="flash">Flash Sale Kilat Terbatas</option>
                    <option value="cucigudang">Cuci Gudang Habiskan Stok</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Nama Produk yang Dipromosikan</label>
                  <input
                    type="text"
                    value={promoProduk}
                    onChange={(e) => setPromoProduk(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Penawaran / Keuntungan Pembeli</label>
                  <input
                    type="text"
                    value={promoNilai}
                    onChange={(e) => setPromoNilai(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Batas Waktu Berlaku</label>
                  <input
                    type="text"
                    value={promoBatas}
                    onChange={(e) => setPromoBatas(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    onClick={generatePromoText}
                    className="w-full py-2.5 px-4 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Buat Teks Siap Sebar</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7">
                {promoResult ? (
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                      <span className="text-xs font-bold text-slate-800">Naskah Promosi Siap Kirim</span>
                      <button
                        onClick={() => handleCopy(promoResult, 'promo-copy')}
                        className="px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-medium transition flex items-center gap-1.5"
                      >
                        {copiedKey === 'promo-copy' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedKey === 'promo-copy' ? 'Tersalin!' : 'Salin Pesan'}</span>
                      </button>
                    </div>
                    <pre className="text-xs text-slate-700 whitespace-pre-wrap font-sans leading-relaxed">
                      {promoResult}
                    </pre>
                  </div>
                ) : (
                  <div className="h-full min-h-[240px] border border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center p-6 text-center text-slate-400">
                    <p className="text-xs">Klik "Buat Teks Siap Sebar" untuk melihat draf pesan promosi.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================= TOOL 10: PEMBUAT NAMA BISNIS ================= */}
        {activeTool === 'nama-bisnis' && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">Pembuat Ide Nama Bisnis & Slogan Brand</h3>
              <p className="text-xs text-slate-500 mt-0.5">Dapatkan 5 nama brand unik beserta filosofi makna dan ide slogan.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-700 mb-1">Kata Kunci Produk / Layanan</label>
                <input
                  type="text"
                  value={namaKataKunci}
                  onChange={(e) => setNamaKataKunci(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"
                  placeholder="Contoh: Kopi / Snack / Hijab / Sabun"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Gaya Nama Brand</label>
                <select
                  value={namaGaya}
                  onChange={(e) => setNamaGaya(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none bg-white"
                >
                  <option value="modern">Modern & Urban</option>
                  <option value="nusantara">Nuansa Nusantara & Berkah</option>
                  <option value="catchy">Catchy & Berima Ramah</option>
                </select>
              </div>
            </div>

            <div>
              <button
                onClick={generateBusinessNames}
                className="py-2.5 px-6 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold transition flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hasilkan Ide Nama Brand</span>
              </button>
            </div>

            {namaResults.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
                {namaResults.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-200">
                        <h4 className="text-sm font-extrabold text-blue-900">{item.nama}</h4>
                        <button
                          onClick={() => handleCopy(`${item.nama} - ${item.slogan}`, `nama-${idx}`)}
                          className="px-2 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded text-xs text-slate-600 transition flex items-center gap-1 shadow-xs"
                        >
                          {copiedKey === `nama-${idx}` ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedKey === `nama-${idx}` ? 'Tersalin' : 'Salin'}</span>
                        </button>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mb-2">{item.arti}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-200/60 text-[11px] text-sky-800 font-medium">
                      Ide Slogan: <span className="italic">"{item.slogan}"</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

function marginAktual(percent: number): string {
  if (percent >= 40) return `${percent}% (Sangat Sehat)`;
  if (percent >= 25) return `${percent}% (Cukup Sehat)`;
  return `${percent}% (Tipis - Waspada Biaya Tak Terduga)`;
}
