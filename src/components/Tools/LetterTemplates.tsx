import React, { useState } from 'react';
import { Mail, Copy, Check, Printer, FileText, RefreshCw } from 'lucide-react';
import { formatTanggalIndonesia } from '../../utils/format';

type LetterType = 'penawaran' | 'tagihan' | 'kerjasama' | 'sku';

export const LetterTemplates: React.FC = () => {
  const [letterType, setLetterType] = useState<LetterType>('penawaran');
  const [copied, setCopied] = useState<boolean>(false);

  // Form states
  const [kotaSurat, setKotaSurat] = useState<string>('Bandung');
  const [tanggalSurat, setTanggalSurat] = useState<string>(new Date().toISOString().split('T')[0]);
  const [namaPengirim, setNamaPengirim] = useState<string>('Budi Santoso');
  const [jabatanPengirim, setJabatanPengirim] = useState<string>('Pemilik Usaha');
  const [namaUsaha, setNamaUsaha] = useState<string>('CV Nusantara Berkah Food');
  const [alamatPengirim, setAlamatPengirim] = useState<string>('Jl. Asia Afrika No. 120, Bandung');
  const [kontakPengirim, setKontakPengirim] = useState<string>('0812-3456-7890');
  
  const [namaPenerima, setNamaPenerima] = useState<string>('Ibu Ratna Dewi');
  const [perusahaanPenerima, setPerusahaanPenerima] = useState<string>('PT Graha Sejahtera Abadi');
  const [alamatPenerima, setAlamatPenerima] = useState<string>('Jl. Gatot Subroto Kav. 52, Jakarta');

  // Khusus penawaran
  const [nomorSurat, setNomorSurat] = useState<string>('012/PBR/XI/2026');
  const [produkDitawarkan, setProdukDitawarkan] = useState<string>('Paket Pasokan Biji Kopi Arabika & Cold Brew untuk Katering Karyawan');
  const [nilaiNominal, setNilaiNominal] = useState<string>('Rp 4.500.000 / bulan');

  const getLetterContent = (): string => {
    const tgl = formatTanggalIndonesia(tanggalSurat);

    if (letterType === 'penawaran') {
      return `${namaUsaha.toUpperCase()}
${alamatPengirim} | Telp/WA: ${kontakPengirim}
========================================================================

Nomor   : ${nomorSurat}
Lampiran: 1 (Satu) Berkas Brosur & Daftar Harga
Perihal : Surat Penawaran Kerjasama Pengadaan Barang/Jasa

${kotaSurat}, ${tgl}

Kepada Yth.
${namaPenerima}
${perusahaanPenerima}
${alamatPenerima}

Dengan hormat,

Sehubungan dengan kebutuhan pengadaan barang/jasa di instansi yang Bapak/Ibu pimpin, bersama surat ini kami dari ${namaUsaha} bermaksud mengajukan penawaran kerjasama:

Produk/Layanan : ${produkDitawarkan}
Estimasi Biaya : ${nilaiNominal}

Adapun keunggulan yang kami tawarkan meliputi:
1. Kualitas bahan baku terstandarisasi dan segar setiap hari.
2. Pengiriman tepat waktu dengan garansi penggantian barang bila tidak sesuai.
3. Fleksibilitas sistem pembayaran tempo bagi rekanan perusahaan.

Besar harapan kami agar penawaran ini dapat berlanjut ke tahap kerjasama yang saling menguntungkan. Apabila Bapak/Ibu membutuhkan informasi lebih rinci atau sampel produk, silakan menghubungi kami di nomor ${kontakPengirim}.

Demikian surat penawaran ini kami sampaikan. Atas perhatian dan kerjasamanya, kami mengucapkan terima kasih.


Hormat kami,
${namaUsaha}



(${namaPengirim})
${jabatanPengirim}`;
    }

    if (letterType === 'tagihan') {
      return `${namaUsaha.toUpperCase()}
${alamatPengirim} | Telp/WA: ${kontakPengirim}
========================================================================

Nomor   : TAG-${nomorSurat}
Perihal : Surat Pemberitahuan & Penagihan Pembayaran (Invoice)

${kotaSurat}, ${tgl}

Kepada Yth.
${namaPenerima}
${perusahaanPenerima}
Di Tempat

Dengan hormat,

Melalui surat ini kami memberitahukan bahwa berdasarkan transaksi pemesanan barang/jasa yang telah kami selesaikan, terdapat kewajiban pembayaran yang telah memasuki masa jatuh tempo dengan rincian sebagai berikut:

Uraian Pekerjaan/Barang : ${produkDitawarkan}
Jumlah Tagihan          : ${nilaiNominal}
Tanggal Jatuh Tempo     : ${tgl}

Pembayaran dapat ditransfer melalui rekening resmi kami:
Bank                    : BCA (Bank Central Asia)
Nomor Rekening          : 123-456-7890
Atas Nama               : ${namaPengirim}

Mohon mengirimkan bukti transfer setelah pembayaran dilakukan melalui WhatsApp ke ${kontakPengirim}. Apabila pembayaran telah dilakukan sebelum surat ini diterima, kami mohon agar surat ini dapat diabaikan.

Demikian pemberitahuan ini kami sampaikan. Atas kerjasama dan pengertian yang baik, kami ucapkan terima kasih.


Hormat kami,
${namaUsaha}



(${namaPengirim})
Bagian Keuangan & Administrasi`;
    }

    if (letterType === 'kerjasama') {
      return `SURAT PERJANJIAN KERJASAMA KEMITRAAN USAHA
Nomor: MoU/001/${namaUsaha.slice(0, 3).toUpperCase()}/2026

Pada hari ini, tanggal ${tgl}, bertempat di ${kotaSurat}, yang bertanda tangan di bawah ini:

1. Nama        : ${namaPengirim}
   Jabatan     : ${jabatanPengirim}
   Usaha       : ${namaUsaha}
   Alamat      : ${alamatPengirim}
   Selanjutnya disebut sebagai PIHAK PERTAMA.

2. Nama        : ${namaPenerima}
   Perusahaan  : ${perusahaanPenerima}
   Alamat      : ${alamatPenerima}
   Selanjutnya disebut sebagai PIHAK KEDUA.

Kedua belah pihak telah sepakat untuk mengikatkan diri dalam kerjasama kemitraan dengan ketentuan sebagai berikut:

PASAL 1 - BENTUK KERJASAMA
PIHAK PERTAMA sepakat untuk menyediakan dan memasok: ${produkDitawarkan} kepada PIHAK KEDUA.

PASAL 2 - HAK DAN KEWAJIBAN
1. PIHAK PERTAMA berkewajiban menjamin ketersediaan barang dengan standar mutu yang disepakati.
2. PIHAK KEDUA berkewajiban melakukan pembayaran sesuai termin yang telah ditentukan sebesar ${nilaiNominal}.

PASAL 3 - PENYELESAIAN PERSELISIHAN
Segala perselisihan yang timbul akan diselesaikan secara musyawarah untuk mufakat.

Demikian surat perjanjian ini dibuat rangkap dua bermeterai cukup dan memiliki kekuatan hukum yang sama.


PIHAK PERTAMA                              PIHAK KEDUA
${namaUsaha}                              ${perusahaanPenerima}



(${namaPengirim})                         (${namaPenerima})`;
    }

    // SKU
    return `SURAT PERNYATAAN KETERANGAN USAHA (SKU) MANDIRI
Nomor Register: SKU/${Date.now().toString().slice(-6)}/UMKM

Yang bertanda tangan di bawah ini menerangkan dengan sebenarnya bahwa:

Nama Pemilik Usaha  : ${namaPengirim}
Nama Usaha / Merk   : ${namaUsaha}
Bidang Usaha        : ${produkDitawarkan}
Alamat Tempat Usaha : ${alamatPengirim}
Kontak Telepon / WA : ${kontakPengirim}

Benar-benar sedang menjalankan kegiatan usaha produktif berskala Mikro/Kecil di alamat tersebut di atas secara aktif dan berkelanjutan terhitung sejak pendirian usaha.

Surat keterangan ini dibuat dengan sadar dan sebenar-benarnya untuk keperluan kelengkapan administrasi perbankan, permohonan kemitraan usaha, serta pendaftaran perizinan usaha lainnya.

Dibuat di : ${kotaSurat}
Pada tanggal : ${tgl}

Yang Membuat Pernyataan,
Pemilik Usaha



(${namaPengirim})
${namaUsaha}`;
  };

  const handleCopy = () => {
    const text = getLetterContent();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
      {/* Header Alat */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4 no-print">
        <div>
          <div className="flex items-center gap-2 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-1">
            <Mail className="w-4 h-4" />
            <span>Format Surat Resmi Usaha</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">
            Pembuat Surat Bisnis & Niaga Otomatis
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Pilih jenis surat, isi formulir nama & produk Anda, lalu langsung salin atau cetak surat berformat rapi.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-3.5 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition flex items-center gap-1.5"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Teks Tersalin!' : 'Salin Semua Teks'}
          </button>
          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition flex items-center gap-1.5 shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            Cetak Surat
          </button>
        </div>
      </div>

      {/* Tabs Jenis Surat */}
      <div className="flex flex-wrap items-center gap-2 mt-6 p-1.5 bg-slate-100 rounded-lg max-w-2xl no-print">
        <button
          onClick={() => setLetterType('penawaran')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${
            letterType === 'penawaran' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          1. Surat Penawaran Harga
        </button>
        <button
          onClick={() => setLetterType('tagihan')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${
            letterType === 'tagihan' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          2. Surat Tagihan Pembayaran
        </button>
        <button
          onClick={() => setLetterType('kerjasama')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${
            letterType === 'kerjasama' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          3. Perjanjian Kerjasama (MoU)
        </button>
        <button
          onClick={() => setLetterType('sku')}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${
            letterType === 'sku' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          4. Surat Keterangan Usaha (SKU)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Form Inputs (Disembunyikan saat cetak) */}
        <div className="lg:col-span-5 space-y-3 no-print">
          <h3 className="text-xs font-semibold text-slate-800 uppercase tracking-wide">
            Data Pengirim & Usaha
          </h3>

          <div>
            <label className="block text-[11px] font-medium text-slate-600 mb-0.5">Nama Toko / Usaha</label>
            <input
              type="text"
              value={namaUsaha}
              onChange={(e) => setNamaUsaha(e.target.value)}
              className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] font-medium text-slate-600 mb-0.5">Nama Pemilik / Anda</label>
              <input
                type="text"
                value={namaPengirim}
                onChange={(e) => setNamaPengirim(e.target.value)}
                className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-slate-600 mb-0.5">Jabatan</label>
              <input
                type="text"
                value={jabatanPengirim}
                onChange={(e) => setJabatanPengirim(e.target.value)}
                className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-600 mb-0.5">Alamat Usaha & No. WA</label>
            <input
              type="text"
              value={alamatPengirim}
              onChange={(e) => setAlamatPengirim(e.target.value)}
              className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none mb-1"
            />
            <input
              type="text"
              value={kontakPengirim}
              onChange={(e) => setKontakPengirim(e.target.value)}
              placeholder="No. WA/Telepon"
              className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none"
            />
          </div>

          <h3 className="text-xs font-semibold text-slate-800 uppercase tracking-wide pt-2 border-t border-slate-100">
            Data Penerima & Keterangan Surat
          </h3>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] font-medium text-slate-600 mb-0.5">Nama Penerima</label>
              <input
                type="text"
                value={namaPenerima}
                onChange={(e) => setNamaPenerima(e.target.value)}
                className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-slate-600 mb-0.5">Instansi / Perusahaan</label>
              <input
                type="text"
                value={perusahaanPenerima}
                onChange={(e) => setPerusahaanPenerima(e.target.value)}
                className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-600 mb-0.5">Barang / Layanan yang Ditawarkan / Ditagih</label>
            <input
              type="text"
              value={produkDitawarkan}
              onChange={(e) => setProdukDitawarkan(e.target.value)}
              className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] font-medium text-slate-600 mb-0.5">Nominal Harga / Nilai</label>
              <input
                type="text"
                value={nilaiNominal}
                onChange={(e) => setNilaiNominal(e.target.value)}
                className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-slate-600 mb-0.5">Kota & Tanggal</label>
              <input
                type="text"
                value={kotaSurat}
                onChange={(e) => setKotaSurat(e.target.value)}
                placeholder="Kota"
                className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none mb-1"
              />
            </div>
          </div>
        </div>

        {/* Live Surat Preview (Siap Cetak / Print) */}
        <div className="lg:col-span-7">
          <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200 font-mono text-xs leading-relaxed text-slate-800 whitespace-pre-wrap shadow-inner overflow-x-auto print:bg-white print:p-0 print:border-none print:shadow-none print:text-black">
            {getLetterContent()}
          </div>
        </div>
      </div>
    </div>
  );
};
