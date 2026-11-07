import React, { useState, useEffect } from 'react';
import { Search, MapPin, Phone, MessageSquare, Star, Bookmark, PlusCircle, CheckCircle2, X, Store, ExternalLink } from 'lucide-react';
import { BusinessProfile } from '../../types';
import { INITIAL_BUSINESSES } from '../../data/initialData';
import { formatRupiah, cleanWhatsAppNumber } from '../../utils/format';

const DIRECTORY_STORAGE_KEY = 'pusatusaha_directory_v1';
const BOOKMARKS_STORAGE_KEY = 'pusatusaha_bookmarks_v1';

interface BusinessDirectoryProps {
  onOpenAddModal?: () => void;
  isAddModalOpen?: boolean;
  onCloseAddModal?: () => void;
}

export const BusinessDirectory: React.FC<BusinessDirectoryProps> = ({
  isAddModalOpen: controlledModalOpen,
  onCloseAddModal: controlledCloseModal
}) => {
  const [businesses, setBusinesses] = useState<BusinessProfile[]>(() => {
    try {
      const saved = localStorage.getItem(DIRECTORY_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading businesses', e);
    }
    return INITIAL_BUSINESSES;
  });

  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [];
  });

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedWilayah, setSelectedWilayah] = useState<string>('Semua');
  const [activeTab, setActiveTab] = useState<'semua' | 'favorit'>('semua');
  
  // Modal states
  const [selectedBizDetail, setSelectedBizDetail] = useState<BusinessProfile | null>(null);
  const [internalModalOpen, setInternalModalOpen] = useState<boolean>(false);
  const isAddModalOpen = controlledModalOpen !== undefined ? controlledModalOpen : internalModalOpen;
  const closeAddModal = controlledCloseModal || (() => setInternalModalOpen(false));

  // Form tambah usaha baru
  const [formNama, setFormNama] = useState('');
  const [formKategori, setFormKategori] = useState<BusinessProfile['kategori']>('Kuliner');
  const [formKota, setFormKota] = useState('');
  const [formProvinsi, setFormProvinsi] = useState('');
  const [formAlamat, setFormAlamat] = useState('');
  const [formWA, setFormWA] = useState('');
  const [formProduk, setFormProduk] = useState('');
  const [formHarga, setFormHarga] = useState<number | ''>('');
  const [formDeskripsi, setFormDeskripsi] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(DIRECTORY_STORAGE_KEY, JSON.stringify(businesses));
    } catch (e) {
      console.error(e);
    }
  }, [businesses]);

  useEffect(() => {
    try {
      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  const toggleBookmark = (id: string) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter(bId => bId !== id));
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
    }
  };

  const handleAddReview = (id: string) => {
    setBusinesses(businesses.map(b => {
      if (b.id === id) {
        return {
          ...b,
          jumlahUlasan: b.jumlahUlasan + 1,
          rating: Number((Math.min(5, b.rating + 0.02)).toFixed(1))
        };
      }
      return b;
    }));
  };

  const handleCreateBusiness = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formNama || !formKota || !formWA) return;

    const newBiz: BusinessProfile = {
      id: `custom-biz-${Date.now()}`,
      nama: formNama.trim(),
      kategori: formKategori,
      kota: formKota.trim(),
      provinsi: formProvinsi.trim() || 'Indonesia',
      alamat: formAlamat.trim() || `Kota ${formKota}`,
      deskripsi: formDeskripsi.trim() || 'Melayani pelanggan dengan produk berkualitas dan pelayanan ramah.',
      kontakWA: formWA.trim(),
      produkUnggulan: formProduk ? formProduk.split(',').map(s => s.trim()).filter(Boolean) : ['Produk & Layanan Unggulan'],
      hargaMulai: Number(formHarga) || 10000,
      rating: 5.0,
      jumlahUlasan: 1,
      terverifikasi: true,
      isCustom: true,
      createdAt: new Date().toISOString()
    };

    setBusinesses([newBiz, ...businesses]);
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      closeAddModal();
      // Reset form
      setFormNama('');
      setFormKota('');
      setFormProvinsi('');
      setFormAlamat('');
      setFormWA('');
      setFormProduk('');
      setFormHarga('');
      setFormDeskripsi('');
    }, 1500);
  };

  // Filter logic
  const categories = ['Semua', 'Kuliner', 'Jasa & Servis', 'Fashion', 'Kerajinan', 'Pertanian', 'Toko Ritel'];
  const cities = ['Semua', 'Bandung', 'Jakarta', 'Surabaya', 'Solo', 'Yogyakarta', 'Tasikmalaya', 'Malang', 'Tangerang'];

  const filtered = businesses.filter(b => {
    if (activeTab === 'favorit' && !bookmarkedIds.includes(b.id)) {
      return false;
    }
    const matchCategory = selectedCategory === 'Semua' || b.kategori === selectedCategory;
    const matchCity = selectedWilayah === 'Semua' || b.kota.toLowerCase().includes(selectedWilayah.toLowerCase());
    const matchSearch = b.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        b.deskripsi.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        b.kota.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        b.produkUnggulan.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchCity && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Baris Pencarian & Kontrol Navigasi */}
      <div className="bg-white p-5 rounded-xl border border-slate-200">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Input Search */}
          <div className="relative w-full md:flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama usaha, produk kuliner, jasa servis, atau kota..."
              className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          {/* Tab Semua vs Favorit */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg w-full md:w-auto shrink-0">
            <button
              onClick={() => setActiveTab('semua')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${
                activeTab === 'semua' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua Usaha ({businesses.length})
            </button>
            <button
              onClick={() => setActiveTab('favorit')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition flex items-center gap-1 ${
                activeTab === 'favorit' ? 'bg-white text-amber-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 text-amber-500" />
              Favorit Saya ({bookmarkedIds.length})
            </button>
          </div>

          {/* Tombol Tambah Usaha */}
          <button
            onClick={() => setInternalModalOpen(true)}
            className="w-full md:w-auto px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-medium transition flex items-center justify-center gap-1.5 shrink-0 shadow-sm"
          >
            <PlusCircle className="w-4 h-4" />
            <span>+ Daftarkan Usaha Anda</span>
          </button>
        </div>

        {/* Filter Kategori */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-4 mt-4 border-t border-slate-100 pb-1 scrollbar-none">
          <span className="text-xs text-slate-400 mr-1 shrink-0 font-medium">Kategori:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition shrink-0 ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filter Kota Populer */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-2 scrollbar-none">
          <span className="text-xs text-slate-400 mr-1 shrink-0 font-medium">Wilayah:</span>
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedWilayah(city)}
              className={`px-2.5 py-0.5 text-xs rounded transition shrink-0 ${
                selectedWilayah === city
                  ? 'bg-emerald-100 text-emerald-800 font-semibold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Profil Usaha */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
          <Store className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-sm font-bold text-slate-700">Tidak ada usaha yang sesuai</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            Coba ubah kata kunci pencarian atau reset filter kategori untuk melihat profil usaha lainnya.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('Semua');
              setSelectedWilayah('Semua');
              setActiveTab('semua');
            }}
            className="mt-4 px-3 py-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition"
          >
            Reset Semua Filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((biz) => {
            const isSaved = bookmarkedIds.includes(biz.id);
            const waClean = cleanWhatsAppNumber(biz.kontakWA);
            const waUrl = `https://wa.me/${waClean}?text=Halo%20${encodeURIComponent(biz.nama)},%20saya%20melihat%20profil%20usaha%20Anda%20di%20PusatUsaha.%20Boleh%20tanya%20info%20produk?`;

            return (
              <div
                key={biz.id}
                className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition"
              >
                <div>
                  {/* Top Header Card */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="text-xs text-slate-500 flex items-center gap-1.5 mb-1">
                        <span>{biz.kategori}</span>
                        <span>·</span>
                        <span className="flex items-center gap-0.5">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {biz.kota}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 leading-snug">
                        {biz.nama}
                      </h4>
                    </div>

                    <button
                      onClick={() => toggleBookmark(biz.id)}
                      className={`p-1.5 rounded-lg border transition ${
                        isSaved ? 'bg-amber-50 border-amber-300 text-amber-600' : 'border-slate-100 text-slate-300 hover:text-slate-600'
                      }`}
                      title={isSaved ? 'Hapus dari favorit' : 'Simpan ke favorit'}
                    >
                      <Bookmark className="w-4 h-4 fill-current" />
                    </button>
                  </div>

                  {/* Rating & Review */}
                  <div className="flex items-center gap-2 mt-2 text-xs">
                    <div className="flex items-center text-amber-500 font-bold gap-1">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{biz.rating}</span>
                    </div>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500 font-medium">({biz.jumlahUlasan} ulasan)</span>
                    <button
                      onClick={() => handleAddReview(biz.id)}
                      className="text-[11px] text-emerald-700 hover:underline font-medium ml-auto"
                    >
                      + Beri Nilai
                    </button>
                  </div>

                  {/* Deskripsi Singkat */}
                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {biz.deskripsi}
                  </p>

                  {/* Produk Unggulan */}
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Produk Unggulan:
                    </span>
                    <div className="flex flex-wrap gap-1 text-[11px] text-slate-600">
                      {biz.produkUnggulan.map((prod, i) => (
                        <span key={i} className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Card */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Mulai dari</span>
                    <span className="text-xs font-bold text-slate-800 font-mono">
                      {formatRupiah(biz.hargaMulai)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setSelectedBizDetail(biz)}
                      className="px-2.5 py-1.5 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition font-medium"
                    >
                      Detail
                    </button>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-medium transition flex items-center gap-1 shadow-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat WA</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal Detail Usaha Lengkap */}
      {selectedBizDetail && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl border border-slate-200 max-w-lg w-full p-6 shadow-xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs text-emerald-700 font-semibold">{selectedBizDetail.kategori}</span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">{selectedBizDetail.nama}</h3>
              </div>
              <button
                onClick={() => setSelectedBizDetail(null)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span><strong>Alamat:</strong> {selectedBizDetail.alamat}, {selectedBizDetail.kota}, {selectedBizDetail.provinsi}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span><strong>WhatsApp:</strong> {selectedBizDetail.kontakWA}</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h5 className="font-semibold text-slate-800 mb-1">Tentang Usaha:</h5>
                <p className="leading-relaxed">{selectedBizDetail.deskripsi}</p>
              </div>

              <div>
                <h5 className="font-semibold text-slate-800 mb-1.5">Menu / Produk Utama:</h5>
                <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                  {selectedBizDetail.produkUnggulan.map((prod, idx) => (
                    <li key={idx}>{prod}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                onClick={() => setSelectedBizDetail(null)}
                className="px-3.5 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition"
              >
                Tutup
              </button>
              <a
                href={`https://wa.me/${cleanWhatsAppNumber(selectedBizDetail.kontakWA)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-medium transition flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Hubungi Penjual</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Modal Tambah Usaha Baru */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl border border-slate-200 max-w-md w-full p-6 shadow-xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-900">Daftarkan Usaha Anda Gratis</h3>
                <p className="text-xs text-slate-500 mt-0.5">Tampilkan usaha Anda di direktori lokal tanpa biaya</p>
              </div>
              <button
                onClick={closeAddModal}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formSuccess ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-sm font-bold text-slate-900">Pendaftaran Berhasil!</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Usaha Anda telah ditambahkan ke direktori dan langsung dapat dilihat calon pembeli.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCreateBusiness} className="space-y-3.5 mt-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Nama Usaha / Merk *</label>
                  <input
                    type="text"
                    required
                    value={formNama}
                    onChange={(e) => setFormNama(e.target.value)}
                    placeholder="Contoh: Kripik Tempe Renyah Barokah"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Kategori Usaha</label>
                    <select
                      value={formKategori}
                      onChange={(e) => setFormKategori(e.target.value as BusinessProfile['kategori'])}
                      className="w-full px-2.5 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none bg-white"
                    >
                      <option value="Kuliner">Kuliner</option>
                      <option value="Jasa & Servis">Jasa & Servis</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Kerajinan">Kerajinan</option>
                      <option value="Pertanian">Pertanian</option>
                      <option value="Toko Ritel">Toko Ritel</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Nomor WhatsApp *</label>
                    <input
                      type="text"
                      required
                      value={formWA}
                      onChange={(e) => setFormWA(e.target.value)}
                      placeholder="081234567890"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Kota / Kabupaten *</label>
                    <input
                      type="text"
                      required
                      value={formKota}
                      onChange={(e) => setFormKota(e.target.value)}
                      placeholder="Contoh: Bandung"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Provinsi</label>
                    <input
                      type="text"
                      value={formProvinsi}
                      onChange={(e) => setFormProvinsi(e.target.value)}
                      placeholder="Contoh: Jawa Barat"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Alamat Lengkap</label>
                  <input
                    type="text"
                    value={formAlamat}
                    onChange={(e) => setFormAlamat(e.target.value)}
                    placeholder="Jl. Sukajadi No. 12, RT 02/04"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Produk Unggulan (Pisahkan koma)</label>
                  <input
                    type="text"
                    value={formProduk}
                    onChange={(e) => setFormProduk(e.target.value)}
                    placeholder="Kripik Balado, Kripik Original, Sambal Bawang"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Harga Mulai Dari (Rp)</label>
                  <input
                    type="number"
                    min="1000"
                    step="1000"
                    value={formHarga}
                    onChange={(e) => setFormHarga(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="Contoh: 15000"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Deskripsi Usaha Singkat</label>
                  <textarea
                    rows={2}
                    value={formDeskripsi}
                    onChange={(e) => setFormDeskripsi(e.target.value)}
                    placeholder="Jelaskan keistimewaan produk Anda..."
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={closeAddModal}
                    className="px-3.5 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-medium transition shadow-sm"
                  >
                    Simpan & Publikasikan
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
