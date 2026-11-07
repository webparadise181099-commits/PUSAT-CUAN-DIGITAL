export type PromptCategory =
  | 'Semua'
  | 'Prompt Bisnis'
  | 'Prompt Jualan'
  | 'Prompt Facebook'
  | 'Prompt TikTok'
  | 'Prompt Instagram'
  | 'Prompt Desain Gambar'
  | 'Prompt Penulisan'
  | 'Prompt Pendidikan'
  | 'Prompt Produktivitas';

export interface AIPrompt {
  id: string;
  judul: string;
  kategori: Exclude<PromptCategory, 'Semua'>;
  deskripsiSingkat: string;
  promptText: string;
  platform: string; // e.g. 'ChatGPT / Claude / Gemini'
  tags: string[];
  popularitas?: number; // 1-100
  relatedIds?: string[];
}

export interface ArticleHeading {
  id: string;
  title: string;
  content: string;
  sublist?: string[];
}

export interface Article {
  id: string;
  judul: string;
  kategori: string;
  ringkasan: string;
  waktuBaca: string;
  tanggal: string;
  penulis: string;
  tags: string[];
  headings: ArticleHeading[];
  contohKasus?: string;
  kesimpulan: string;
  relatedIds: string[];
}

export type ToolType =
  | 'caption'
  | 'deskripsi'
  | 'ide-konten'
  | 'bio'
  | 'hashtag'
  | 'judul'
  | 'kalkulator-laba'
  | 'kalkulator-diskon'
  | 'promo'
  | 'nama-bisnis';

export interface ToolMeta {
  id: ToolType;
  nama: string;
  deskripsi: string;
  kategori: string;
  badge: string;
}

export type ViewMode =
  | 'home'
  | 'prompts'
  | 'tools'
  | 'ide-konten'
  | 'bisnis'
  | 'artikel'
  | 'favorit'
  | 'detail-artikel'
  | 'tentang'
  | 'kontak'
  | 'privasi'
  | 'syarat'
  | 'disclaimer';

export interface BusinessProfile {
  id: string;
  nama: string;
  kategori: 'Kuliner' | 'Jasa & Servis' | 'Kerajinan' | 'Fashion' | 'Pertanian' | 'Toko Ritel';
  kota: string;
  provinsi: string;
  deskripsi: string;
  alamat: string;
  kontakWA: string;
  produkUnggulan: string[];
  hargaMulai: number;
  rating: number;
  jumlahUlasan: number;
  terverifikasi: boolean;
  createdAt?: string;
  isCustom?: boolean;
}

export interface BukuKasEntry {
  id: string;
  tanggal: string;
  tipe: 'masuk' | 'keluar';
  kategori: string;
  jumlah: number;
  keterangan: string;
  createdAt: number;
}

export interface InvoiceItem {
  id: string;
  nama: string;
  qty: number;
  harga: number;
}

export interface InvoiceData {
  namaToko: string;
  alamatToko: string;
  nomorWA: string;
  nomorInvoice: string;
  tanggal: string;
  jatuhTempo: string;
  namaPelanggan: string;
  alamatPelanggan: string;
  items: InvoiceItem[];
  catatan: string;
  diskonPersen: number;
  pajakPersen: number;
}

export interface EmergencyContact {
  id: string;
  instansi: string;
  nomor: string;
  kategori: 'Darurat Umum' | 'Medis & Kesehatan' | 'Keamanan' | 'Bencana Alam' | 'Utilitas & Layanan';
  wilayah: string;
  jamLayanan: string;
  deskripsi: string;
}

export interface ArticleGuide {
  id: string;
  judul: string;
  kategori: string;
  waktuBaca: string;
  ringkasan: string;
  isiLengkap: string[];
  tipsPenting: string[];
  tanggal: string;
}

