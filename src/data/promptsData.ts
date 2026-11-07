import { AIPrompt } from '../types';

export const PROMPTS_DATA: AIPrompt[] = [
  // --- KATEGORI 1: PROMPT BISNIS ---
  {
    id: 'p-bisnis-1',
    judul: 'Analisis SWOT Lengkap untuk Ide Usaha Baru',
    kategori: 'Prompt Bisnis',
    deskripsiSingkat: 'Menganalisis kekuatan, kelemahan, peluang, dan ancaman bisnis Anda secara mendalam.',
    promptText: `Bertindaklah sebagai konsultan bisnis senior. Tolong bantu saya melakukan Analisis SWOT (Strengths, Weaknesses, Opportunities, Threats) untuk ide usaha saya.

Informasi Usaha Saya:
- Nama Ide Usaha: [Tulis ide usaha, misal: Kedai Kopi Susu Rumahan]
- Target Pasar: [Tulis target, misal: Mahasiswa dan pekerja WFH]
- Lokasi / Saluran Jual: [Tulis lokasi, misal: Garasi rumah & GoFood]
- Modal Awal: [Tulis modal, misal: Rp 10.000.000]

Tolong berikan:
1. Analisis detail pada 4 kuadran (Kekuatan, Kelemahan, Peluang, Ancaman).
2. Tiga strategi kunci untuk memaksimalkan peluang dengan kekuatan yang ada.
3. Langkah mitigasi risiko untuk mengatasi kelemahan utama.
Sajikan dalam format poin-poin yang mudah dipahami pemula.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['SWOT', 'Strategi', 'Rencana Usaha'],
    popularitas: 98,
    relatedIds: ['p-bisnis-2', 'p-bisnis-3']
  },
  {
    id: 'p-bisnis-2',
    judul: 'Rencana Bisnis 1 Halaman (Lean Business Plan)',
    kategori: 'Prompt Bisnis',
    deskripsiSingkat: 'Membuat ringkasan strategi bisnis yang padat, fokus, dan siap dieksekusi tanpa bertele-tele.',
    promptText: `Saya ingin memulai usaha [Tulis jenis usaha, contoh: Jual Pakaian Muslimah Online]. 
Bantu saya menyusun Rencana Bisnis 1 Halaman (Lean Business Plan) yang mencakup:
1. Masalah utama yang dialami calon pembeli.
2. Solusi & Keunggulan Produk yang saya tawarkan.
3. Target Konsumen Spesifik (Buyer Persona).
4. Saluran Penjualan & Promosi utama.
5. Struktur Biaya Utama (Modal Pokok, Operasional, Pemasaran).
6. Sumber Pendapatan (Model Moneter).
7. Tolok Ukur Keberhasilan (Key Metrics) dalam 3 bulan pertama.

Gunakan bahasa Indonesia yang lugas, terstruktur, dan aplikatif.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Business Plan', 'Strategi', 'Eksekusi'],
    popularitas: 94,
    relatedIds: ['p-bisnis-1', 'p-bisnis-4']
  },
  {
    id: 'p-bisnis-3',
    judul: 'Riset Kompetitor & Menemukan Keunikan Usaha (USP)',
    kategori: 'Prompt Bisnis',
    deskripsiSingkat: 'Menemukan celah pasar yang belum dipenuhi oleh pesaing di bidang usaha Anda.',
    promptText: `Saya menjalankan bisnis [Sebutkan bisnis, misal: Katering Harian Sehat] di area [Sebutkan kota/area].
Kompetitor saya umumnya menawarkan [Sebutkan apa yang biasa dijual kompetitor].

Bantu saya:
1. Menganalisis apa saja keluhan umum konsumen terhadap layanan/produk kompetitor di industri ini.
2. Merumuskan 3 opsi Nilai Unik Penjualan (Unique Selling Proposition / USP) yang membuat produk saya berbeda dan lebih menarik.
3. Kalimat slogan/tagline pendek (di bawah 10 kata) yang menonjolkan keunikan tersebut.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Riset Pasar', 'USP', 'Diferensiasi'],
    popularitas: 90,
    relatedIds: ['p-bisnis-1', 'p-jualan-1']
  },
  {
    id: 'p-bisnis-4',
    judul: 'Simulasi Strategi Penetapan Harga Produk (Pricing Strategy)',
    kategori: 'Prompt Bisnis',
    deskripsiSingkat: 'Menghitung harga jual yang tepat agar tidak perang harga dan bisnis tetap untung sehat.',
    promptText: `Bantu saya menentukan strategi penetapan harga yang tepat untuk produk [Nama produk, misal: Sambal Kemasan Botol 150gr].

Data Keuangan Saya:
- Biaya Pokok Produksi (HPP) per botol: [Contoh: Rp 12.000]
- Biaya Kemasan & Label: [Contoh: Rp 2.500]
- Biaya Operasional & Tenaga: [Contoh: Rp 2.000]
- Harga pasaran kompetitor: [Contoh: Rp 25.000 - Rp 35.000]

Tolong berikan rekomendasi:
1. Opsi Harga Hemat (Margin tipis untuk penetrasi pasar awal).
2. Opsi Harga Standar (Margin sehat 40-50%).
3. Opsi Paket Bundling (Misal: Beli 3 lebih hemat) untuk menaikkan nilai rata-rata keranjang belanja.
4. Tips psikologi harga (misal akhiran angka 9.000 atau promo beli 2 gratis 1).`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Penetapan Harga', 'Margin', 'Keuangan'],
    popularitas: 88,
    relatedIds: ['p-bisnis-2', 'p-jualan-3']
  },

  // --- KATEGORI 2: PROMPT JUALAN ---
  {
    id: 'p-jualan-1',
    judul: 'Copywriting Formula PAS (Problem, Agitate, Solution)',
    kategori: 'Prompt Jualan',
    deskripsiSingkat: 'Membuat teks penawaran yang menyentuh masalah pembeli dan menawarkan produk sebagai solusi tepat.',
    promptText: `Buatkan teks promosi penjualan menggunakan formula PAS (Problem, Agitate, Solution) dalam bahasa Indonesia.

Detail Produk:
- Nama Produk: [Tulis nama produk, misal: Bantal Kesehatan Memory Foam]
- Masalah Konsumen: [Misal: Sering sakit leher dan pegal saat bangun tidur]
- Akibat Masalah (Agitate): [Misal: Seharian jadi tidak fokus kerja dan cepat lelah]
- Solusi dari Produk: [Misal: Bantal menopang leher dengan sempurna sesuai bentuk tulang leher]
- Penawaran Khusus: [Misal: Diskon 30% untuk 50 pemesan pertama + Gratis Sarung Bantal]
- Call to Action: [Misal: Klik link di bio / Hubungi WhatsApp 08xxx]

Buat teksnya mengalir, menyentuh emosi, dan tidak terkesan memaksa (soft selling).`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Copywriting', 'Formula PAS', 'Soft Selling'],
    popularitas: 97,
    relatedIds: ['p-jualan-2', 'p-jualan-4']
  },
  {
    id: 'p-jualan-2',
    judul: 'Naskah Chat WhatsApp Follow-Up Calon Pembeli yang Menghilang',
    kategori: 'Prompt Jualan',
    deskripsiSingkat: 'Follow-up calon pembeli yang sudah tanya harga atau pesan tapi belum transfer.',
    promptText: `Tolong buatkan 3 variasi pesan follow-up WhatsApp yang ramah dan sopan untuk calon pembeli yang sudah menanyakan produk [Sebutkan produk, misal: Gamis Lebaran] namun belum melakukan pembayaran:

1. Variasi 1: Pengingat santai & ramah (dikirim 3-4 jam setelah chat terakhir).
2. Variasi 2: Memberitahu sisa stok menipis (urgensi wajar, dikirim H+1).
3. Variasi 3: Penawaran bonus tambahan kecil seperti gratis ongkir subsidi (dikirim H+2 sebagai upaya penutupan terakhir).

Syarat: Jangan gunakan nada menagih atau menyindir. Gunakan panggilan Kakak/Bunda yang hangat.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['WhatsApp', 'Closing', 'Follow Up'],
    popularitas: 99,
    relatedIds: ['p-jualan-1', 'p-jualan-3']
  },
  {
    id: 'p-jualan-3',
    judul: 'Mengatasi Keberatan Pembeli: "Harga Kemahalan Kak"',
    kategori: 'Prompt Jualan',
    deskripsiSingkat: 'Menjawab komplain harga mahal dari calon pembeli dengan cerdas tanpa menurunkan harga.',
    promptText: `Bantu saya menyiapkan respon chat untuk mengatasi keberatan calon pembeli yang berkata: "Wah mahal banget ya kak harganya, toko sebelah lebih murah".

Informasi Produk Saya:
- Produk: [Contoh: Sepatu Kulit Asli Lokal]
- Harga: [Contoh: Rp 350.000]
- Keunggulan dibanding produk murah: [Contoh: 100% kulit sapi asli bukan sintetis, jahitan sol tembus anti copot, garansi 6 bulan ganti baru]

Berikan 3 alternatif jawaban:
1. Menjelaskan nilai jangka panjang & keawetan.
2. Menjelaskan garansi & kenyamanan pakai.
3. Penawaran alternatif pembayaran bertahap atau bonus perawatan sepatu.
Semua jawaban harus sopan, menghargai calon pembeli, dan tetap percaya diri dengan kualitas produk.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Keberatan Harga', 'Handling Objections', 'Sales'],
    popularitas: 95,
    relatedIds: ['p-jualan-2', 'p-jualan-4']
  },
  {
    id: 'p-jualan-4',
    judul: 'Formula AIDA untuk Iklan Penjualan Kilat (Flash Sale)',
    kategori: 'Prompt Jualan',
    deskripsiSingkat: 'Membuat teks iklan dengan struktur Attention, Interest, Desire, Action untuk promo terbatas.',
    promptText: `Tolong buatkan copywriting penawaran kilat (Flash Sale) dengan struktur AIDA (Attention - Interest - Desire - Action):

- Produk: [Sebutkan produk]
- Diskon / Promo: [Contoh: Diskon 40% + Beli 2 Gratis 1]
- Batas Waktu: [Contoh: Hanya sampai malam ini pukul 23.59 WIB]
- Stok Promo: [Contoh: Hanya tersedia untuk 25 transaksi pertama]

Buat teksnya memicu rasa ingin segera bertindak (urgency) secara wajar dan menyertakan arahan link order yang jelas.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['AIDA', 'Flash Sale', 'Diskon'],
    popularitas: 92,
    relatedIds: ['p-jualan-1', 'p-jualan-2']
  },

  // --- KATEGORI 3: PROMPT FACEBOOK ---
  {
    id: 'p-fb-1',
    judul: 'Postingan Cerita Pribadi (Storytelling) untuk Menjual di Facebook',
    kategori: 'Prompt Facebook',
    deskripsiSingkat: 'Menulis status Facebook bergaya curhat atau inspirasi yang berujung pada penjualan organik.',
    promptText: `Tuliskan sebuah status Facebook bergaya cerita personal (storytelling) yang menyentuh hati dan diakhiri dengan penawaran produk secara halus.

Tema Cerita:
- Perjuangan / Latar Belakang: [Contoh: Pengalaman saya yang dulu sering minder karena masalah jerawat dan kulit kusam]
- Titik Balik / Eksperimen: [Contoh: Mencoba berbagai produk kimia sampai akhirnya menemukan ramuan sabun alami minyak zaitun]
- Hasil yang dirasakan: [Contoh: Wajah lebih bersih dan percaya diri kembali]
- Produk yang dijual: [Contoh: Sabun Herbal Zaitun Alami produksi rumahan]

Aturan:
- Gunakan gaya bahasa percakapan sehari-hari yang akrab di Facebook.
- Jangan langsung jualan di paragraf awal.
- Buat pembaca penasaran dan ingin berkomentar.
- Taruh ajakan untuk inbox (kirim pesan) atau tinggalkan komentar jika ingin coba.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Facebook', 'Storytelling', 'Organik'],
    popularitas: 96,
    relatedIds: ['p-fb-2', 'p-fb-3']
  },
  {
    id: 'p-fb-2',
    judul: 'Pertanyaan Interaksi Polling untuk Meningkatkan Jangkauan Akun FB',
    kategori: 'Prompt Facebook',
    deskripsiSingkat: 'Membuat 5 status pemicu interaksi komentar tinggi agar algoritma Facebook mengangkat akun Anda.',
    promptText: `Saya ingin meningkatkan interaksi (engagement) di akun Facebook pribadi / fanspage jualan saya yang bertopik [Tulis topik, misal: Masakan Rumahan & Resep Ibu].

Tolong buatkan 5 ide status pertanyaan pendek yang memancing orang untuk berkomentar:
- 2 Pertanyaan perdebatan seru tapi santai (Contoh: Tim makan bubur diaduk vs tidak diaduk).
- 2 Pertanyaan tebak-tebakan atau meminta saran dari para ibu-ibu.
- 1 Pertanyaan nostalgia masa kecil yang memicu kenangan manis.

Semua pertanyaan harus ditulis singkat (maksimal 3 baris) dan menggunakan bahasa yang sangat ramah.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Facebook', 'Engagement', 'Algoritma'],
    popularitas: 89,
    relatedIds: ['p-fb-1', 'p-fb-4']
  },
  {
    id: 'p-fb-3',
    judul: 'Teks Iklan Facebook Ads untuk Produk Fisik / UMKM',
    kategori: 'Prompt Facebook',
    deskripsiSingkat: 'Menulis Primary Text, Headline, dan Deskripsi untuk kampanye Meta / Facebook Ads.',
    promptText: `Buatkan komponen teks iklan Facebook Ads profesional untuk produk [Nama produk, misal: Jas Hujan Anti Rembes Bahan Parasut Balon]:

1. Primary Text (Variasi Pendek - to the point, fokus solusi cuaca hujan).
2. Primary Text (Variasi Panjang - cerita pengalaman basah kuyup di jalan dan solusinya).
3. 3 Opsi Headline Iklan (Maksimal 5 kata, memikat perhatian saat scrolling feed).
4. Description Text (1 baris di bawah headline untuk memperkuat rasa percaya, misal: Garansi tukar baru jika bocor).
5. Call to Action pilihan: [Beli Sekarang / Pesan Sekarang].`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Facebook Ads', 'Meta Ads', 'Paid Traffic'],
    popularitas: 93,
    relatedIds: ['p-fb-1', 'p-jualan-1']
  },
  {
    id: 'p-fb-4',
    judul: 'Deskripsi Produk untuk Facebook Marketplace agar Cepat Laku',
    kategori: 'Prompt Facebook',
    deskripsiSingkat: 'Format postingan Facebook Marketplace yang rapi, lengkap, dan lolos filter peninjauan.',
    promptText: `Buatkan template deskripsi jualan untuk Facebook Marketplace untuk barang: [Sebutkan barang, misal: Lemari Pakaian Minimalis Kayu Jati Belanda].

Sertakan bagian:
- Judul Marketplace yang ramah pencarian lokal (sertakan kata kunci seperti COD / Antar Gratis).
- Kondisi barang (Baru/Mulus).
- Ukuran & Spesifikasi detail (Panjang, Lebar, Tinggi).
- Sistem pembayaran (Bisa Bayar di Tempat / COD area tertentu).
- Lokasi pengambilan barang / ongkos kirim.
- Catatan penting: "Selama iklan tayang barang masih ada, langsung chat WA/Messenger".`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['FB Marketplace', 'COD', 'Lokal'],
    popularitas: 91,
    relatedIds: ['p-fb-1', 'p-fb-3']
  },

  // --- KATEGORI 4: PROMPT TIKTOK ---
  {
    id: 'p-tiktok-1',
    judul: 'Hook 3 Detik Pertama Video TikTok yang Bikin Penonton Berhenti Scrolling',
    kategori: 'Prompt TikTok',
    deskripsiSingkat: 'Kumpulan hook visual dan verbal pembuka video TikTok agar penonton tidak skip.',
    promptText: `Saya membuat video TikTok tentang [Topik video, misal: Tips Memulai Bisnis Thrift Baju Modal 500 Ribu].
Bantu saya membuat 7 ide kalimat Hook pembuka (3 detik pertama) yang sangat memancing rasa penasaran:
- 2 Hook gaya kontroversial / membongkar rahasia.
- 2 Hook gaya pertanyaan yang mengena di hati pemula.
- 2 Hook gaya larangan / peringatan ("Jangan lakukan ini sebelum...").
- 1 Hook gaya bukti hasil ("Cuma modal segini, hasilnya segini...").

Tulis setiap hook dalam 1 kalimat padat dan berikan arahan visual gerak tubuh yang cocok saat mengucapkannya.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['TikTok', 'Hook Viral', 'FYP'],
    popularitas: 99,
    relatedIds: ['p-tiktok-2', 'p-tiktok-3']
  },
  {
    id: 'p-tiktok-2',
    judul: 'Naskah Skrip Video Edukasi TikTok Durasi 45-60 Detik',
    kategori: 'Prompt TikTok',
    deskripsiSingkat: 'Naskah video lengkap dengan visual cue, narasi audio, dan teks di layar (on-screen text).',
    promptText: `Tuliskan skrip video TikTok durasi 45-60 detik tentang [Topik: Cara Menghitung Modal Usaha Minuman Kekinian].

Format tabel atau kolom:
- Detik 0-3: Hook verbal & visual cue.
- Detik 4-15: Penjelasan masalah / kesalahan umum orang-orang.
- Detik 16-40: 3 Langkah solusi praktis langkah demi langkah.
- Detik 41-50: Rekap singkat.
- Detik 51-60: Call to Action (Follow untuk tips harian & cek keranjang kuning / link bio).

Gunakan bahasa lisan yang santai, energik, dan tidak kaku.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['TikTok Skrip', 'Konten Edukasi', 'Keranjang Kuning'],
    popularitas: 95,
    relatedIds: ['p-tiktok-1', 'p-tiktok-4']
  },
  {
    id: 'p-tiktok-3',
    judul: 'Ide Konten "Behind The Scene" Pengemasan Barang (Packing Order)',
    kategori: 'Prompt TikTok',
    deskripsiSingkat: 'Konsep video estetik proses packing pesanan yang disukai penonton TikTok Shop.',
    promptText: `Saya punya toko online [Sebutkan jenis produk, misal: Lilin Aromaterapi & Sabun Handmade].
Tolong buatkan konsep 3 video TikTok "Packing Pesanan Pelanggan" yang estetik dan disukai penonton:
1. Konsep video ASMR packing (fokus suara sobekan selotip, bubble wrap, stiker).
2. Konsep video cerita sambil packing (menjawab pertanyaan komentar pembeli).
3. Konsep video "Pesanan Terbesar / Terjauh Minggu Ini".

Sertakan rekomendasi jenis musik latar (sound trending) yang cocok dan ide teks caption pendek.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['TikTok Shop', 'Packing Order', 'ASMR'],
    popularitas: 90,
    relatedIds: ['p-tiktok-1', 'p-tiktok-2']
  },
  {
    id: 'p-tiktok-4',
    judul: 'Skrip Live Streaming TikTok Shop untuk Menaikkan Keranjang Kuning',
    kategori: 'Prompt TikTok',
    deskripsiSingkat: 'Panduan berbicara saat siaran langsung agar penonton betah dan langsung check out.',
    promptText: `Saya akan mengadakan Live TikTok Shop selama 1 jam untuk produk [Sebutkan produk, misal: Hijab Segi Empat Voal Premium].
Bantu saya membuat susunan kata-kata dan alur siaran langsung:
1. Kalimat pembuka untuk menyapa penonton baru (detik-detik pertama masuk live).
2. Cara mendemonstrasikan keunggulan produk (tahan kusut, tegak di dahi, bahan adem).
3. Cara memicu penonton mengetuk layar (tap-tap layar) dan follow akun.
4. Kata-kata mendesak untuk checkout keranjang nomor 1 (klaim voucher diskon live & gratis ongkir ekstra sekarang juga sebelum kuota habis).`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Live TikTok', 'Live Selling', 'Keranjang Kuning'],
    popularitas: 94,
    relatedIds: ['p-tiktok-2', 'p-jualan-4']
  },

  // --- KATEGORI 5: PROMPT INSTAGRAM ---
  {
    id: 'p-ig-1',
    judul: 'Desain Konten Carousel Edukasi Instagram 7 Slide',
    kategori: 'Prompt Instagram',
    deskripsiSingkat: 'Rencana konten komidi putar (carousel) yang rapi untuk meningkatkan jumlah simpanan (save) dan share.',
    promptText: `Buatkan konsep dan isi tulisan untuk Instagram Carousel 7 slide tentang topik: [Sebutkan topik, misal: 5 Kesalahan Fatal Saat Menjual di Shopee untuk Pemula].

Detail per slide:
- Slide 1 (Cover): Judul memikat + subjudul + elemen visual pendukung.
- Slide 2: Masalah pertama & dampaknya.
- Slide 3: Masalah kedua & contohnya.
- Slide 4: Masalah ketiga & cara menghindarinya.
- Slide 5: Masalah keempat & solusinya.
- Slide 6: Masalah kelima & tips praktis.
- Slide 7 (Call to Action): Ajakan untuk "Simpan postingan ini biar tidak lupa" dan ajakan berdiskusi di kolom komentar.

Sertakan draf caption pendamping dan 10 hashtag relevan.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Instagram Carousel', 'Edukasi', 'Save Post'],
    popularitas: 97,
    relatedIds: ['p-ig-2', 'p-ig-3']
  },
  {
    id: 'p-ig-2',
    judul: 'Caption Instagram Reels yang Mengundang Komentar (Komentar Kata Kunci)',
    kategori: 'Prompt Instagram',
    deskripsiSingkat: 'Teks caption dengan ajakan otomatis komentar kata tertentu untuk dikirimkan link via DM.',
    promptText: `Tolong buatkan caption Instagram Reels yang menarik untuk video tentang [Topik video: Template Hitung Keuangan Bisnis Gratis].

Struktur Caption:
1. Baris pertama (Hook): Menggugah rasa penasaran agar penonton membaca selengkapnya.
2. Paragraf isi: Penjelasan ringkas mengapa template ini sangat membantu mereka menghemat waktu dan tahu untung bersih harian.
3. Call to Action: "Ketik kata KEUANGAN di kolom komentar, nanti link unduhan gratisnya langsung saya kirimkan ke DM kamu!"
4. 5 Hashtag yang relevan dan bertarget.

Gunakan jarak baris yang rapi (tidak menumpuk jadi satu blok teks tebal).`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Reels Caption', 'DM Otomatis', 'Lead Magnet'],
    popularitas: 95,
    relatedIds: ['p-ig-1', 'p-ig-4']
  },
  {
    id: 'p-ig-3',
    judul: 'Bio Profil Instagram Bisnis yang Profesional & Menghasilkan Klik',
    kategori: 'Prompt Instagram',
    deskripsiSingkat: 'Menata 150 karakter bio Instagram agar calon pembeli langsung paham apa yang Anda tawarkan.',
    promptText: `Bantu saya membuat 3 pilihan Bio Instagram untuk akun bisnis saya.

Profil Usaha:
- Bidang Usaha: [Contoh: Jasa Desain Grafis & Cetak Kemasan UMKM]
- Target Pasar: [Contoh: Pelaku usaha kuliner dan online shop baru]
- Nilai Tambah / Bukti: [Contoh: Telah dipercaya 500+ UMKM, pengerjaan cepat 2 hari, revisi sampai cocok]
- Tawaran Link: [Contoh: Konsultasi gratis via WhatsApp & unduh portofolio]

Tolong buatkan:
- Pilihan 1: Gaya formal & kredibel.
- Pilihan 2: Gaya ramah & modern dengan emoji secukupnya.
- Pilihan 3: Gaya minimalis & to the point.
Semua pilihan harus di bawah 150 karakter.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Bio Instagram', 'Profil Bisnis', 'Konversi'],
    popularitas: 91,
    relatedIds: ['p-ig-1', 'p-ig-2']
  },
  {
    id: 'p-ig-4',
    judul: 'Ide Konten Instagram Story 1 Hari Penuh untuk Menaikkan Penjualan',
    kategori: 'Prompt Instagram',
    deskripsiSingkat: 'Runtutan 5 story bertahap dari pagi sampai malam untuk memanaskan interaksi sebelum jualan.',
    promptText: `Buatkan jadwal 5 Instagram Story berurutan untuk hari ini dalam menjual produk [Nama produk, misal: Kue Kering Lebaran Premium]:

1. Jam 08.00 (Story 1 - Engagement): Stiker polling atau kuis santai yang relevan dengan tema.
2. Jam 11.30 (Story 2 - Behind The Scene): Video/foto proses memanggang atau persiapan bahan higienis.
3. Jam 14.30 (Story 3 - Testimoni): Tangkapan layar chat pembeli puas yang memuji rasa kue.
4. Jam 17.00 (Story 4 - Penawaran): Menampilkan foto toples cantik dengan info diskon kuota terbatas + stiker tautan WhatsApp.
5. Jam 20.30 (Story 5 - Urgensi): Pengingat sisa slot pesanan untuk pengiriman besok pagi.

Berikan deskripsi detail foto/video apa yang harus diunggah beserta teks stikernya.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Instagram Story', 'Story Selling', 'Urutan Story'],
    popularitas: 89,
    relatedIds: ['p-ig-1', 'p-ig-3']
  },

  // --- KATEGORI 6: PROMPT DESAIN GAMBAR ---
  {
    id: 'p-desain-1',
    judul: 'Prompt Midjourney / DALL-E: Foto Produk Kosmetik / Skincare Estetik',
    kategori: 'Prompt Desain Gambar',
    deskripsiSingkat: 'Menghasilkan foto produk komersial berkualitas studio foto majalah kelas atas.',
    promptText: `Commercial studio product photography of a [Sebutkan botol produk, misal: minimalist amber glass serum dropper bottle], placed on a smooth travertine stone pedestal, surrounded by soft water ripples and delicate white jasmine flowers, morning natural sunbeams casting soft shadows, shallow depth of field, hyper-realistic, luxury beauty editorial aesthetic, 8k resolution, shot on 85mm lens --ar 4:5 --v 6.0`,
    platform: 'Midjourney / DALL-E / Bing Image',
    tags: ['Foto Produk', 'Midjourney', 'Estetik'],
    popularitas: 96,
    relatedIds: ['p-desain-2', 'p-desain-3']
  },
  {
    id: 'p-desain-2',
    judul: 'Prompt Desain Logo Minimalis Modern untuk Bisnis Kopi & Kuliner',
    kategori: 'Prompt Desain Gambar',
    deskripsiSingkat: 'Membuat logo brand vektor sederhana, bersih, dan mudah diingat konsumen.',
    promptText: `Minimalist modern vector logo design for a coffee shop named "[Nama Toko]", featuring a stylized sleek coffee cup integrated with a single coffee leaf, clean geometric lines, single dark navy blue tone on a solid white background, flat design, no gradients, elegant typography, corporate branding identity, vector silhouette --no realistic photo, 3d, shading --ar 1:1`,
    platform: 'Midjourney / DALL-E / Bing Image',
    tags: ['Logo Brand', 'Desain Minimalis', 'Vektor'],
    popularitas: 92,
    relatedIds: ['p-desain-1', 'p-desain-4']
  },
  {
    id: 'p-desain-3',
    judul: 'Prompt Foto Makanan Menggugah Selera (Food Photography)',
    kategori: 'Prompt Desain Gambar',
    deskripsiSingkat: 'Menghasilkan gambar sajian makanan hangat dengan pencahayaan profesional restoran bintang lima.',
    promptText: `Professional appetizing food photography of [Sebutkan makanan, misal: authentic Indonesian beef rendang with aromatic coconut rice], served on a rustic dark ceramic plate with fresh cut red chili and kaffir lime leaf garnish, gentle steam rising, overhead 45-degree angle shot, warm cozy ambient lighting, wooden dining table texture, depth of field, food magazine cover quality --ar 16:9`,
    platform: 'Midjourney / DALL-E / Bing Image',
    tags: ['Food Photography', 'Kuliner', 'Foto Makanan'],
    popularitas: 94,
    relatedIds: ['p-desain-1', 'p-desain-2']
  },
  {
    id: 'p-desain-4',
    judul: 'Prompt Mockup Kaos Distro / T-Shirt Polos Realistis',
    kategori: 'Prompt Desain Gambar',
    deskripsiSingkat: 'Membuat mockup kaos katun tampak nyata untuk display katalog toko pakaian.',
    promptText: `Realistic clean product mockup of an oversized streetwear cotton t-shirt in [Warna kaos, misal: vintage washed charcoal black], flat lay on a textured clean industrial concrete background, natural cloth wrinkles and fabric texture clearly visible, soft neutral studio lighting, no graphics on shirt, blank canvas ready for print design, high resolution 8k --ar 1:1`,
    platform: 'Midjourney / DALL-E / Bing Image',
    tags: ['Mockup Kaos', 'Katalog Pakaian', 'Streetwear'],
    popularitas: 88,
    relatedIds: ['p-desain-1', 'p-desain-3']
  },

  // --- KATEGORI 7: PROMPT PENULISAN ---
  {
    id: 'p-tulis-1',
    judul: 'Menulis Artikel Blog SEO Lengkap Ramah Pembaca & Google',
    kategori: 'Prompt Penulisan',
    deskripsiSingkat: 'Menyusun artikel web lengkap dengan judul H1, H2, H3, pengantar menarik, dan meta description.',
    promptText: `Bertindaklah sebagai penulis konten web profesional & spesialis SEO Indonesia. 
Tolong tuliskan artikel blog lengkap yang orisinal, informatif, dan mengalir alami mengenai topik:
"[Tulis judul/topik artikel, misal: 7 Cara Mengatur Keuangan untuk Usaha Rumahan agar Cepat Berkembang]"

Ketentuan penulisan:
1. Sertakan rekomendasi Meta Description (120-150 karakter) yang memikat klik.
2. Buat pengantar pembuka yang menghubungkan langsung dengan masalah sehari-hari pembaca.
3. Gunakan hierarki subjudul yang teratur (H2 dan H3).
4. Setiap poin solusi harus ada contoh nyata dan langkah praktis yang bisa langsung diterapkan.
5. Gunakan bahasa Indonesia yang baik, lugas, santai, dan tidak terkesan diterjemahkan kaku dari bahasa asing.
6. Buat kesimpulan penutup serta 1 pertanyaan interaktif untuk pembaca di akhir artikel.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Artikel SEO', 'Blog Content', 'Penulisan Web'],
    popularitas: 97,
    relatedIds: ['p-tulis-2', 'p-tulis-3']
  },
  {
    id: 'p-tulis-2',
    judul: 'Email Broadcast Penawaran Kerjasama Bisnis (B2B Cold Outreach)',
    kategori: 'Prompt Penulisan',
    deskripsiSingkat: 'Surat penawaran kerjasama resmi namun tidak membosankan ke perusahaan atau mitra usaha.',
    promptText: `Tuliskan draf email penawaran kerjasama bisnis resmi (B2B proposal) dari [Nama usaha saya: misal CV Sumber Berkah Konveksi] kepada [Target mitra: misal Bagian HRD / Pengadaan PT Maju Bersama].

Hal yang ingin ditawarkan:
- Pengadaan seragam kantor dan merchandise promosi tahunan.
- Keunggulan: Harga langsung dari pabrik konveksi, bahan dingin bersertifikat OEKO-TEX, tepat waktu dengan garansi jahit ulang bila cacat.

Format:
- 3 Pilihan Subject Line Email yang menarik perhatian dan tidak masuk folder spam.
- Salam pembuka profesional.
- Penjelasan singkat alasan menghubungi dan nilai manfaat yang kami bawa untuk perusahaan mereka.
- Ajakan pertemuan daring singkat 15 menit (Call to Action).
- Tanda tangan resmi.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Email Bisnis', 'B2B', 'Proposal'],
    popularitas: 91,
    relatedIds: ['p-tulis-1', 'p-tulis-4']
  },
  {
    id: 'p-tulis-3',
    judul: 'Menulis Deskripsi Profil Usaha ("Tentang Kami / About Us")',
    kategori: 'Prompt Penulisan',
    deskripsiSingkat: 'Menceritakan visi, misi, dan kisah pendirian bisnis agar membangun kepercayaan konsumen.',
    promptText: `Bantu saya menulis halaman "Tentang Kami (About Us)" untuk website / profil toko online saya.

Informasi Usaha:
- Nama Brand: [Sebutkan nama brand]
- Tahun Berdiri & Lokasi: [Contoh: 2023 di Yogyakarta]
- Produk Utama: [Contoh: Kerajinan Anyaman Bambu Ramah Lingkungan]
- Alasan Usaha Dimulai: [Contoh: Ingin mengurangi sampah plastik sekaligus memberdayakan perajin lokal di desa]
- Nilai yang dijunjung: [Contoh: Kejujuran kualitas, keberlanjutan alam, kepuasan pembeli]

Buat tulisan dengan nada hangat, tulus, profesional, dan membuat pembeli merasa bangga membeli produk lokal ini.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Tentang Kami', 'Branding', 'Kisah Usaha'],
    popularitas: 93,
    relatedIds: ['p-tulis-1', 'p-tulis-2']
  },
  {
    id: 'p-tulis-4',
    judul: 'Menyusun Naskah Presentasi Bisnis / Pitch Deck Singkat (10 Slide)',
    kategori: 'Prompt Penulisan',
    deskripsiSingkat: 'Rangkaian poin per slide untuk mempresentasikan ide usaha kepada investor atau rekan bisnis.',
    promptText: `Saya perlu mempresentasikan usaha saya: [Nama usaha & bidang, misal: Aplikasi Pengingat Servis Motor Mandiri].
Bantu saya menyusun struktur naskah presentasi 10 slide:
- Slide 1: Judul & Nilai Utama.
- Slide 2: Masalah Besar di Pasar.
- Slide 3: Solusi Produk yang Kami Tawarkan.
- Slide 4: Ukuran Pasar & Peluang Konsumen.
- Slide 5: Model Bisnis (Cara Menghasilkan Uang).
- Slide 6: Keunggulan Kompetitif dibanding Pesaing.
- Slide 7: Rencana Pemasaran & Distribusi.
- Slide 8: Proyeksi Finansial Ringkas.
- Slide 9: Tim Pendiri & Keahlian.
- Slide 10: Ajakan Kerjasama / Investasi.

Sertakan poin kunci yang harus diucapkan pada masing-masing slide.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Pitch Deck', 'Presentasi', 'Investor'],
    popularitas: 89,
    relatedIds: ['p-tulis-2', 'p-bisnis-2']
  },

  // --- KATEGORI 8: PROMPT PENDIDIKAN ---
  {
    id: 'p-didik-1',
    judul: 'Menjelaskan Konsep Rumit Menjadi Bahasa Sederhana untuk Pemula',
    kategori: 'Prompt Pendidikan',
    deskripsiSingkat: 'Memahami istilah keuangan, teknologi, atau bisnis yang sulit seperti menjelaskan ke anak usia 12 tahun.',
    promptText: `Jelaskan konsep berikut ini kepada saya dengan bahasa yang sangat sederhana, seolah-olah saya adalah anak berusia 12 tahun yang belum pernah belajar ekonomi/teknologi:

Konsep yang ingin dipahami: [Tulis konsep, misal: Apa itu Inflasi / Apa itu Algoritma Media Sosial / Apa itu Margin Laba Bersih].

Syarat penjelasan:
1. Gunakan analogi kehidupan nyata (seperti jualan mainan, belanja jajan di warung, atau bersepeda).
2. Hindari istilah teknis yang berbelit-belit.
3. Berikan 1 contoh kasus sehari-hari.
4. Rangkum kesimpulan utamanya dalam 1 kalimat pendek.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Edukasi', 'Pahami Konsep', 'Analogi'],
    popularitas: 96,
    relatedIds: ['p-didik-2', 'p-didik-3']
  },
  {
    id: 'p-didik-2',
    judul: 'Rencana Belajar Mandiri Suatu Keterampilan Baru dalam 30 Hari',
    kategori: 'Prompt Pendidikan',
    deskripsiSingkat: 'Jadwal belajar harian terstruktur dari nol hingga mahir untuk skill digital.',
    promptText: `Saya seorang pemula yang ingin menguasai keterampilan: [Sebutkan skill, misal: Desain Grafis Canva untuk Konten Media Sosial].
Waktu yang saya miliki adalah 1 jam setiap hari.

Tolong buatkan kurikulum jadwal belajar mandiri selama 30 hari yang dibagi menjadi 4 minggu:
- Minggu 1: Dasar-dasar pengenalan & fungsi alat.
- Minggu 2: Praktik meniru karya bagus (ATM: Amati, Tiru, Modifikasi).
- Minggu 3: Membuat karya sendiri & studi kasus nyata.
- Minggu 4: Evaluasi hasil, membuat portofolio, dan cara memonetisasi skill ini.

Berikan juga daftar referensi jenis video / materi gratis yang perlu saya cari.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Rencana Belajar', 'Skill Digital', '30 Hari'],
    popularitas: 94,
    relatedIds: ['p-didik-1', 'p-didik-4']
  },
  {
    id: 'p-didik-3',
    judul: 'Pembuat Soal Kuis Pilihan Ganda & Pembahasan Lengkap',
    kategori: 'Prompt Pendidikan',
    deskripsiSingkat: 'Membuat 5-10 soal latihan interaktif untuk menguji pemahaman materi pelatihan.',
    promptText: `Buatkan 5 butir soal pilihan ganda (A, B, C, D) yang mendalam dan berkualitas tentang topik:
"[Sebutkan topik, misal: Strategi Manajemen Arus Kas Kasih Masuk & Keluar Usaha Kecil]".

Ketentuan:
- 2 Soal tingkat pemahaman konsep dasar.
- 2 Soal studi kasus terapan di kehidupan nyata.
- 1 Soal analisis pemecahan masalah.
- Di bagian bawah, sertakan Kunci Jawaban beserta penjelasan / pembahasan ilmiah mengapa jawaban tersebut benar dan opsi lainnya salah.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Kuis', 'Latihan Soal', 'Pembahasan'],
    popularitas: 88,
    relatedIds: ['p-didik-1', 'p-didik-2']
  },
  {
    id: 'p-didik-4',
    judul: 'Merangkum Buku / Makalah Panjang Menjadi 5 Poin Inti Terapan',
    kategori: 'Prompt Pendidikan',
    deskripsiSingkat: 'Mengekstrak sari pati ilmu dari buku bisnis tebal agar bisa langsung dipraktekkan hari ini.',
    promptText: `Tolong rangkumkan ide-ide utama dari konsep buku bisnis terkenal:
"[Tulis judul buku atau konsep, misal: The Lean Startup karya Eric Ries / Atomic Habits karya James Clear]".

Berikan:
1. Ide sentral buku ini dalam 2 kalimat.
2. 5 Prinsip tindakan paling berharga yang bisa langsung dipraktekkan oleh pemilik bisnis kecil di Indonesia.
3. Satu kesalahan paling sering dilakukan orang yang bertolak belakang dengan isi buku ini.
4. Kutipan paling inspiratif dari buku tersebut.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Rangkuman Buku', 'Sari Pati', 'Praktek'],
    popularitas: 92,
    relatedIds: ['p-didik-2', 'p-didik-1']
  },

  // --- KATEGORI 9: PROMPT PRODUKTIVITAS ---
  {
    id: 'p-prod-1',
    judul: 'Prioritas Tugas Harian Menggunakan Matriks Eisenhower (Penting vs Mendesak)',
    kategori: 'Prompt Produktivitas',
    deskripsiSingkat: 'Menata daftar tugas kerjaan yang menumpuk agar Anda tahu apa yang harus dikerjakan duluan.',
    promptText: `Berikut adalah daftar semua hal yang harus saya selesaikan minggu ini sebagai pemilik usaha / pekerja:
[Salin daftar tugas Anda di sini, contoh:
- Membalas chat 15 pelanggan
- Membayar tagihan listrik toko
- Merencanakan promosi bulan depan
- Mencari pemasok botol kemasan baru
- Mengunggah foto produk di Instagram
- Merapikan nota kasir yang berserakan]

Tolong petakan tugas-tugas di atas ke dalam 4 Kuadran Matriks Eisenhower:
1. Kuadran 1: Mendesak & Penting (Kerjakan SEKARANG sendiri).
2. Kuadran 2: Tidak Mendesak tapi Penting (Jadwalkan waktu fokus untuk ini).
3. Kuadran 3: Mendesak tapi Kurang Penting (Delegasikan / lakukan cepat).
4. Kuadran 4: Tidak Mendesak & Tidak Penting (Tinggalkan atau kurangi).

Beri saya urutan 3 tugas utama yang wajib saya selesaikan hari ini terlebih dahulu.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Produktivitas', 'Eisenhower', 'Prioritas Kerja'],
    popularitas: 98,
    relatedIds: ['p-prod-2', 'p-prod-3']
  },
  {
    id: 'p-prod-2',
    judul: 'Notula Rapat Cepat & Daftar Rencana Tindak Lanjut (Action Items)',
    kategori: 'Prompt Produktivitas',
    deskripsiSingkat: 'Mengubah catatan coretan hasil diskusi rapat menjadi ringkasan rapi siapa mengerjakan apa.',
    promptText: `Berikut adalah catatan kasar hasil diskusi rapat tim kami:
[Tempel catatan kasar/poin obrolan rapat Anda di sini]

Tolong ubah catatan di atas menjadi Format Notula Rapat Profesional:
1. Keputusan Utama yang Telah Disepakati.
2. Rencana Tindak Lanjut (Tabel berisi: Tugas Pekerjaan, Penanggung Jawab (PIC), dan Batas Waktu Penyelesaian/Deadline).
3. Hal yang masih tertunda dan perlu dibahas pada pertemuan berikutnya.

Gunakan format ringkas yang bisa langsung saya kirimkan ke grup WhatsApp tim.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Notula Rapat', 'Action Items', 'Koordinasi Tim'],
    popularitas: 91,
    relatedIds: ['p-prod-1', 'p-prod-4']
  },
  {
    id: 'p-prod-3',
    judul: 'Menyusun Jadwal Rutinitas Pagi & Sore Pemilik Usaha agar Tidak Burnout',
    kategori: 'Prompt Produktivitas',
    deskripsiSingkat: 'Rancangan jadwal kerja harian yang seimbang antara jualan, operasional, dan waktu istirahat.',
    promptText: `Saya menjalankan usaha mandiri [Sebutkan jenis usaha] dari rumah. Seringkali saya merasa kelelahan (burnout) karena batas antara waktu kerja dan waktu pribadi menjadi kabur.

Bantu saya membuat Jadwal Kerja Harian yang seimbang:
- Jam mulai: [Contoh: 07.30 pagi]
- Jam selesai: [Contoh: 17.30 sore]
- Target harian: Menangani pesanan, mengunggah konten promosi, membalas pelanggan, dan mengecek stok.

Atur jadwal dengan menyisipkan blok waktu fokus (Deep Work 90 menit), waktu santai/makan siang tanpa melihat HP toko, dan aturan mematikan notifikasi pesan jualan di malam hari.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['Manajemen Waktu', 'Anti Burnout', 'Rutinitas'],
    popularitas: 94,
    relatedIds: ['p-prod-1', 'p-prod-2']
  },
  {
    id: 'p-prod-4',
    judul: 'Template SOP (Standar Operasional Prosedur) Singkat untuk Karyawan Toko',
    kategori: 'Prompt Produktivitas',
    deskripsiSingkat: 'Panduan kerja langkah-demi-langkah agar karyawan atau asisten Anda bekerja rapi sesuai standar.',
    promptText: `Buatkan Standar Operasional Prosedur (SOP) sederhana 1 halaman untuk posisi:
[Sebutkan posisi & tugas, misal: Admin Chat & Pengemasan Barang Toko Online].

Sertakan:
1. Tujuan SOP.
2. Langkah Membuka Toko (Cek stok harian, cek status pesanan baru).
3. Standar Balas Chat (Kecepatan respon maksimal 5 menit, sapaan wajib, cara mengirim resi).
4. Standar Pengemasan (Bungkus lapis bubble wrap minimal 2 lilitan, tempel stiker rapuh/fragile, pastikan alamat terbaca jelas).
5. Langkah Menutup Hari (Rekap jumlah paket yang diserahkan ke kurir, lapor kas harian ke pemilik).

Format dalam daftar periksa (checklist) yang mudah dicetak dan ditempel di dinding tempat kerja.`,
    platform: 'ChatGPT / Claude / Gemini',
    tags: ['SOP Toko', 'Delegasi', 'Operasional'],
    popularitas: 90,
    relatedIds: ['p-prod-1', 'p-prod-3']
  }
];
