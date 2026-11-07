import { BusinessProfile, EmergencyContact, ArticleGuide, BukuKasEntry } from '../types';

export const INITIAL_BUSINESSES: BusinessProfile[] = [
  {
    id: 'biz-1',
    nama: 'Kopi Sangrai Nusantara',
    kategori: 'Kuliner',
    kota: 'Bandung',
    provinsi: 'Jawa Barat',
    deskripsi: 'Menyediakan biji kopi arabika dan robusta pilihan langsung dari petani Jawa Barat, Aceh Gayo, dan Toraja. Segar disangrai setiap minggu.',
    alamat: 'Jl. Riau No. 45, Citarum, Kota Bandung',
    kontakWA: '6281234567890',
    produkUnggulan: ['Kopi Arabika Puntang', 'Robusta Temanggung', 'Cold Brew Kemasan'],
    hargaMulai: 35000,
    rating: 4.9,
    jumlahUlasan: 128,
    terverifikasi: true
  },
  {
    id: 'biz-2',
    nama: 'Rendang Payakumbuh Uni Evi',
    kategori: 'Kuliner',
    kota: 'Jakarta Selatan',
    provinsi: 'DKI Jakarta',
    deskripsi: 'Rendang daging sapi asli Minangkabau dimasak dengan kayu bakar selama 8 jam menggunakan resep warisan keluarga. Tahan simpan tanpa pengawet.',
    alamat: 'Jl. Tebet Raya No. 12B, Jakarta Selatan',
    kontakWA: '6281398765432',
    produkUnggulan: ['Rendang Daging Sapi 500g', 'Rendang Paru Crispy', 'Sambal Ijo Teri'],
    hargaMulai: 65000,
    rating: 4.8,
    jumlahUlasan: 210,
    terverifikasi: true
  },
  {
    id: 'biz-3',
    nama: 'Bengkel Mandiri Sejahtera & Servis AC',
    kategori: 'Jasa & Servis',
    kota: 'Surabaya',
    provinsi: 'Jawa Timur',
    deskripsi: 'Layanan servis AC rumah, kantor, dan perbaikan kelistrikan motor dengan teknisi bersertifikat. Garansi servis 30 hari.',
    alamat: 'Jl. Raya Jemursari No. 88, Wonocolo, Surabaya',
    kontakWA: '6282145678901',
    produkUnggulan: ['Cuci AC Inverter', 'Isi Freon R32/R410', 'Tune Up Motor Injeksi'],
    hargaMulai: 50000,
    rating: 4.7,
    jumlahUlasan: 94,
    terverifikasi: true
  },
  {
    id: 'biz-4',
    nama: 'Batik Kencana Solo',
    kategori: 'Fashion',
    kota: 'Surakarta',
    provinsi: 'Jawa Tengah',
    deskripsi: 'Pusat kain batik cap dan tulis kontemporer ramah lingkungan dengan pewarna alami daun indigo dan kulit manggis.',
    alamat: 'Jl. Slamet Riyadi No. 204, Laweyan, Solo',
    kontakWA: '6285678901234',
    produkUnggulan: ['Kemeja Batik Katun Halus', 'Kain Panjang Pola Parang', 'Outer Batik Wanita'],
    hargaMulai: 125000,
    rating: 4.9,
    jumlahUlasan: 175,
    terverifikasi: true
  },
  {
    id: 'biz-5',
    nama: 'Anyaman Bambu Lestari Craft',
    kategori: 'Kerajinan',
    kota: 'Tasikmalaya',
    provinsi: 'Jawa Barat',
    deskripsi: 'Produk kerajinan anyaman bambu ramah lingkungan untuk dekorasi rumah, besek katering higienis, dan wadah suvenir pernikahan.',
    alamat: 'Desa Rajapolah, Kec. Rajapolah, Kab. Tasikmalaya',
    kontakWA: '6287712345678',
    produkUnggulan: ['Besek Bambu Kotak', 'Lampu Gantung Anyam', 'Tempat Buah Alami'],
    hargaMulai: 8000,
    rating: 4.8,
    jumlahUlasan: 83,
    terverifikasi: true
  },
  {
    id: 'biz-6',
    nama: 'Tani Makmur Hidroponik',
    kategori: 'Pertanian',
    kota: 'Malang',
    provinsi: 'Jawa Timur',
    deskripsi: 'Kebun sayuran segar hidroponik bebas pestisida kimia. Melayani pasokan harian untuk restoran, hotel, dan konsumsi rumah tangga.',
    alamat: 'Jl. Raya Buring No. 19, Kedungkandang, Kota Malang',
    kontakWA: '6281987654321',
    produkUnggulan: ['Selada Romaine Segar', 'Bayam Hijau Hidroponik', 'Pakcoy Mini'],
    hargaMulai: 15000,
    rating: 4.9,
    jumlahUlasan: 62,
    terverifikasi: true
  },
  {
    id: 'biz-7',
    nama: 'Percetakan & Sablon Kaos Kilat',
    kategori: 'Jasa & Servis',
    kota: 'Yogyakarta',
    provinsi: 'DI Yogyakarta',
    deskripsi: 'Jasa sablon kaos komunitas, seragam kantor, cetak banner, dan pembuatan stiker label kemasan UMKM dengan proses cepat.',
    alamat: 'Jl. Kaliurang KM 6, Sleman, Yogyakarta',
    kontakWA: '6282233445566',
    produkUnggulan: ['Sablon DTF Kaos Katun', 'Stiker Vinyl Tahan Air', 'Brosur & Banner'],
    hargaMulai: 30000,
    rating: 4.6,
    jumlahUlasan: 112,
    terverifikasi: true
  },
  {
    id: 'biz-8',
    nama: 'Toko Beras & Sembako Berkah Jaya',
    kategori: 'Toko Ritel',
    kota: 'Tangerang',
    provinsi: 'Banten',
    deskripsi: 'Distributor beras premium, minyak goreng, gula, dan telur segar berkualitas langsung dari penggilingan padi daerah.',
    alamat: 'Pasar Anyar Blok B No. 15, Kota Tangerang',
    kontakWA: '6283811223344',
    produkUnggulan: ['Beras Pandan Wangi 5kg', 'Minyak Goreng 2 Liter', 'Telur Ayam Segar 1kg'],
    hargaMulai: 28000,
    rating: 4.7,
    jumlahUlasan: 140,
    terverifikasi: true
  }
];

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    id: 'emg-1',
    instansi: 'Panggilan Darurat Terpadu Nasional',
    nomor: '112',
    kategori: 'Darurat Umum',
    wilayah: 'Seluruh Indonesia (Bebas Pulsa)',
    jamLayanan: '24 Jam Non-Stop',
    deskripsi: 'Pusat panggilan darurat terpadu untuk semua keadaan mendesak (kebakaran, kecelakaan, ambulans, keamanan).'
  },
  {
    id: 'emg-2',
    instansi: 'Kepolisian Republik Indonesia (POLRI)',
    nomor: '110',
    kategori: 'Keamanan',
    wilayah: 'Seluruh Indonesia (Bebas Pulsa)',
    jamLayanan: '24 Jam Non-Stop',
    deskripsi: 'Laporan tindak pidana, gangguan ketertiban masyarakat, kecelakaan lalu lintas, dan bantuan keamanan umum.'
  },
  {
    id: 'emg-3',
    instansi: 'Layanan Ambulans & Kemenkes',
    nomor: '118 / 119',
    kategori: 'Medis & Kesehatan',
    wilayah: 'Seluruh Indonesia',
    jamLayanan: '24 Jam Non-Stop',
    deskripsi: 'Panggilan gawat darurat medis, penjemputan ambulans pasien kritis, dan rujukan rumah sakit darurat.'
  },
  {
    id: 'emg-4',
    instansi: 'Pemadam Kebakaran & Penyelamatan',
    nomor: '113',
    kategori: 'Darurat Umum',
    wilayah: 'Seluruh Wilayah Kab/Kota',
    jamLayanan: '24 Jam Non-Stop',
    deskripsi: 'Penanganan kebakaran pemukiman, penyelamatan hewan berbisa, evakuasi pohon tumbang, dan bencana teknis.'
  },
  {
    id: 'emg-5',
    instansi: 'Badan SAR Nasional (BASARNAS)',
    nomor: '115',
    kategori: 'Bencana Alam',
    wilayah: 'Seluruh Wilayah Perairan & Darat Indonesia',
    jamLayanan: '24 Jam Non-Stop',
    deskripsi: 'Operasi pencarian dan pertolongan korban hilang, kecelakaan kapal laut, pesawat udara, dan musibah bencana alam.'
  },
  {
    id: 'emg-6',
    instansi: 'PLN Gangguan & Kelistrikan',
    nomor: '123',
    kategori: 'Utilitas & Layanan',
    wilayah: 'Nasional (Gunakan kode area di depan jika dari HP)',
    jamLayanan: '24 Jam Non-Stop',
    deskripsi: 'Laporan padam listrik mendadak, bahaya korsleting tiang listrik, kawat putus, dan pengaduan meteran PLN.'
  },
  {
    id: 'emg-7',
    instansi: 'Badan Nasional Penanggulangan Bencana (BNPB)',
    nomor: '117',
    kategori: 'Bencana Alam',
    wilayah: 'Seluruh Indonesia',
    jamLayanan: '24 Jam Siaga Bencana',
    deskripsi: 'Pusat komando dan laporan darurat bencana banjir, gempa bumi, tanah longsor, dan erupsi gunung api.'
  },
  {
    id: 'emg-8',
    instansi: 'BPJS Kesehatan Care Center',
    nomor: '165',
    kategori: 'Utilitas & Layanan',
    wilayah: 'Seluruh Indonesia',
    jamLayanan: '24 Jam Non-Stop',
    deskripsi: 'Informasi status kepesertaan JKN-KIS, pendaftaran bayi baru lahir, skrining kesehatan, dan pengaduan faskes.'
  },
  {
    id: 'emg-9',
    instansi: 'Pos Indonesia Contact Center',
    nomor: '1500161',
    kategori: 'Utilitas & Layanan',
    wilayah: 'Seluruh Indonesia',
    jamLayanan: 'Senin - Minggu (08.00 - 20.00 WIB)',
    deskripsi: 'Pelacakan kiriman pos kilat khusus, layanan logistik UMKM, dan informasi distribusi pos nusantara.'
  },
  {
    id: 'emg-10',
    instansi: 'Hotline Sahabat Perempuan & Anak (SAPA)',
    nomor: '129',
    kategori: 'Keamanan',
    wilayah: 'KemenPPPA RI - Seluruh Indonesia',
    jamLayanan: '24 Jam Non-Stop',
    deskripsi: 'Layanan pengaduan kekerasan dalam rumah tangga (KDRT), perlindungan perempuan, dan kekerasan pada anak.'
  }
];

export const BUSINESS_GUIDES: ArticleGuide[] = [
  {
    id: 'guide-1',
    judul: 'Panduan Lengkap Cara Buat NIB (Nomor Induk Berusaha) di OSS Gratis',
    kategori: 'Legalitas & Izin',
    waktuBaca: '4 menit baca',
    tanggal: '12 Januari 2026',
    ringkasan: 'Langkah mudah mendaftarkan izin usaha mikro dan kecil (UMKM) melalui portal resmi OSS-RBA secara mandiri tanpa biaya perantara.',
    isiLengkap: [
      'Memiliki Nomor Induk Berusaha (NIB) adalah langkah pondasi bagi setiap pelaku usaha di Indonesia. NIB berfungsi sebagai identitas resmi usaha sekaligus izin operasional, tanda daftar perusahaan, dan akses kepabeanan jika Anda berniat ekspor.',
      'Kabar baiknya, pembuatan NIB untuk usaha mikro dan kecil (modal usaha di bawah Rp1 miliar) 100% GRATIS dan bisa diselesaikan dalam waktu kurang dari 20 menit lewat portal oss.go.id.',
      'Persyaratan yang perlu disiapkan sangat sederhana: Nomor KTP (NIK), Nomor WhatsApp aktif, Email aktif, dan perkiraan modal awal usaha.',
      'Setelah akun terdaftar, pilih menu Perizinan Berusaha Mikro & Kecil, masukkan Kode KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) sesuai jenis dagangan Anda, isi alamat usaha, lalu klik cetak NIB berformat PDF dengan barcode resmi pemerintah.'
    ],
    tipsPenting: [
      'Gunakan email khusus usaha agar tidak tertumpuk dengan email pribadi.',
      'Pastikan NIK sudah sesuai data kependudukan Capil terbaru.',
      'NIB berlaku seumur hidup selama usaha Anda masih beroperasi.'
    ]
  },
  {
    id: 'guide-2',
    judul: 'Cara Menghitung HPP (Harga Pokok Penjualan) & Margin Laba Tanpa Boncos',
    kategori: 'Keuangan Usaha',
    waktuBaca: '5 menit baca',
    tanggal: '18 Januari 2026',
    ringkasan: 'Rumus praktis menghitung biaya bahan, kemasan, tenaga kerja, dan operasional agar jualan tetap menghasilkan laba bersih nyata.',
    isiLengkap: [
      'Banyak pedagang dan pemilik UMKM merasa omzet penjualannya tinggi, namun di akhir bulan tidak ada uang tunai tersisa. Kesalahan nomor satu biasanya terletak pada perhitungan HPP yang tidak lengkap.',
      'HPP bukan hanya harga beli bahan baku utama. Anda wajib memasukkan: Biaya Bahan Baku Langsung, Biaya Bahan Pembantu (minyak goreng, bumbu, gas), Biaya Kemasan (kotak, plastik, stiker label), dan Biaya Tenaga Kerja (termasuk gaji untuk diri Anda sendiri!).',
      'Setelah mendapatkan HPP per porsi atau per barang, tentukan Margin Laba yang sehat. Untuk makanan umumnya 40% - 60%, sedangkan ritel 15% - 30%.',
      'Rumus Menghitung Harga Jual: Harga Jual = HPP / (1 - (Persentase Margin / 100)). Contoh jika HPP Rp10.000 dan ingin margin 40%, maka Harga Jual = Rp10.000 / (1 - 0.4) = Rp16.666 (dibulatkan Rp17.000).'
    ],
    tipsPenting: [
      'Selalu alokasikan 5% untuk biaya penyusutan alat & barang rusak.',
      'Gunakan kalkulator HPP pada menu website ini untuk kemudahan hitung instan.',
      'Jangan menetapkan harga hanya karena ikut-ikutan harga tetangga tanpa tahu modal asli Anda.'
    ]
  },
  {
    id: 'guide-3',
    judul: 'Trik Foto Produk Menarik Menggunakan Kamera HP & Cahaya Alami',
    kategori: 'Pemasaran & Konten',
    waktuBaca: '3 menit baca',
    tanggal: '24 Januari 2026',
    ringkasan: 'Panduan visual sederhana menghasilkan foto katalog produk profesional dengan modal smartphone dan kertas karton putih.',
    isiLengkap: [
      'Visual adalah penentu utama calon pembeli di marketplace dan media sosial. Anda tidak perlu kamera mahal jutaan rupiah untuk membuat foto produk yang menggugah selera.',
      'Pertama, bersihkan lensa kamera HP dengan kain bersih sebelum memotret. Lensa yang terkena minyak tangan akan membuat foto buram dan berkabut.',
      'Kedua, manfaatkan cahaya alami jendela samping (morning/afternoon light) antara jam 08.00 - 10.00 pagi atau 15.00 - 16.30 sore. Hindari menggunakan lampu kilat (flash) langsung dari HP karena membuat bayangan keras.',
      'Ketiga, gunakan latar belakang polos. Kertas karton manila putih seharga Rp3.000 atau papan kayu bersih sangat efektif membuat produk Anda menjadi pusat perhatian utama.'
    ],
    tipsPenting: [
      'Gunakan sudut pengambilan gambar 45 derajat (seperti pandangan orang duduk melihat makanan).',
      'Kunci fokus kamera HP dan turunkan sedikit slider eksposur/kecerahan agar warna asli produk tidak pudar.',
      'Sertakan pembanding ukuran (misal tangan memegang cangkir) agar pembeli paham dimensi fisik produk.'
    ]
  },
  {
    id: 'guide-4',
    judul: 'Pisahkan Rekening Usaha & Pribadi: Kunci Disiplin Arus Kas Pemula',
    kategori: 'Manajemen Keuangan',
    waktuBaca: '4 menit baca',
    tanggal: '02 Februari 2026',
    ringkasan: 'Langkah mendasar agar uang usaha tidak terpakai untuk belanja harian keluarga dan usaha bisa terus berkembang.',
    isiLengkap: [
      'Salah satu penyebab utama UMKM bangkrut bukan karena tidak laku, melainkan karena percampuran antara uang belanja dapur pribadi dan uang kas usaha.',
      'Solusi paling efektif dan wajib dilakukan hari ini: Buat rekening bank khusus usaha yang terpisah dari rekening keluarga. Saat ini membuka rekening bank digital di Indonesia bisa dilakukan dalam 10 menit via aplikasi tanpa biaya admin bulanan.',
      'Tentukan gaji tetap bulanan untuk diri Anda sendiri. Ambil uang dari kas usaha hanya sebesar porsi gaji Anda, dan bayar kebutuhan pribadi hanya dari gaji tersebut.',
      'Catat setiap transaksi masuk dan keluar setiap hari menggunakan Buku Kas Digital yang telah disediakan di platform ini. Jangan menunda pencatatan hingga akhir pekan.'
    ],
    tipsPenting: [
      'Disiplin catat sekecil apa pun pengeluaran, termasuk parkir dan pulsa kuota jualan.',
      'Sisihkan keuntungan 10% untuk dana darurat usaha sebelum membagi sisa laba.',
      'Cek saldo kas setiap malam sebelum tutup toko.'
    ]
  }
];

export const INITIAL_CASHFLOW: BukuKasEntry[] = [
  {
    id: 'cf-1',
    tanggal: '2026-11-01',
    tipe: 'masuk',
    kategori: 'Penjualan',
    jumlah: 850000,
    keterangan: 'Penjualan 17 paket kopi dan cold brew harian',
    createdAt: Date.now() - 3600000 * 96
  },
  {
    id: 'cf-2',
    tanggal: '2026-11-02',
    tipe: 'keluar',
    kategori: 'Bahan Baku',
    jumlah: 320000,
    keterangan: 'Beli biji kopi arabika mentah 5kg dari petani',
    createdAt: Date.now() - 3600000 * 72
  },
  {
    id: 'cf-3',
    tanggal: '2026-11-03',
    tipe: 'masuk',
    kategori: 'Penjualan',
    jumlah: 1250000,
    keterangan: 'Pesanan katering kantor 25 botol kopi susu',
    createdAt: Date.now() - 3600000 * 48
  },
  {
    id: 'cf-4',
    tanggal: '2026-11-04',
    tipe: 'keluar',
    kategori: 'Kemasan',
    jumlah: 145000,
    keterangan: 'Beli botol plastik 250ml dan stiker label logo',
    createdAt: Date.now() - 3600000 * 24
  },
  {
    id: 'cf-5',
    tanggal: '2026-11-05',
    tipe: 'masuk',
    kategori: 'Penjualan',
    jumlah: 920000,
    keterangan: 'Penjualan toko offline pagi sampai siang',
    createdAt: Date.now() - 3600000 * 4
  }
];
