import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { QrCode, Download, Copy, Check, MessageSquare, Globe, CreditCard, Wifi } from 'lucide-react';
import { cleanWhatsAppNumber } from '../../utils/format';

type QrType = 'link' | 'whatsapp' | 'bank' | 'wifi';

export const QrGenerator: React.FC = () => {
  const [qrType, setQrType] = useState<QrType>('whatsapp');
  
  // Link state
  const [url, setUrl] = useState<string>('https://pusatusaha.id');
  
  // WhatsApp state
  const [waPhone, setWaPhone] = useState<string>('081234567890');
  const [waMessage, setWaMessage] = useState<string>('Halo, saya tertarik dengan produk Anda. Boleh minta info katalog dan daftar harga?');
  
  // Bank state
  const [bankName, setBankName] = useState<string>('BCA');
  const [accNumber, setAccNumber] = useState<string>('1234567890');
  const [accName, setAccName] = useState<string>('BUDI SANTOSO');
  
  // Wifi state
  const [wifiSsid, setWifiSsid] = useState<string>('WiFi-Toko-Tamu');
  const [wifiPassword, setWifiPassword] = useState<string>('kopi12345');
  
  // Options
  const [qrColor, setQrColor] = useState<string>('#0f172a');
  const [copied, setCopied] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Generate payload string based on type
  const getPayload = (): string => {
    switch (qrType) {
      case 'whatsapp': {
        const clean = cleanWhatsAppNumber(waPhone);
        return `https://wa.me/${clean}?text=${encodeURIComponent(waMessage)}`;
      }
      case 'bank': {
        return `PEMBAYARAN TRANSFER\nBank: ${bankName}\nNo. Rekening: ${accNumber}\nAtas Nama: ${accName}`;
      }
      case 'wifi': {
        return `WIFI:T:WPA;S:${wifiSsid};P:${wifiPassword};;`;
      }
      case 'link':
      default: {
        return url.startsWith('http') ? url : `https://${url}`;
      }
    }
  };

  useEffect(() => {
    if (!canvasRef.current) return;
    const payload = getPayload();
    
    QRCode.toCanvas(
      canvasRef.current,
      payload,
      {
        width: 280,
        margin: 2,
        color: {
          dark: qrColor,
          light: '#ffffff'
        }
      },
      (error) => {
        if (error) console.error('QR code error:', error);
      }
    );
  }, [qrType, url, waPhone, waMessage, bankName, accNumber, accName, wifiSsid, wifiPassword, qrColor]);

  const handleDownload = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = `kode-qr-${qrType}-${Date.now()}.png`;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  const handleCopyText = () => {
    const payload = getPayload();
    navigator.clipboard.writeText(payload);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
      {/* Header Alat */}
      <div className="pb-6 border-b border-slate-100">
        <div className="flex items-center gap-2 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-1">
          <QrCode className="w-4 h-4" />
          <span>Generator Kode QR Gratis</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-slate-900">
          Pembuat Kode QR Toko & WhatsApp Instan
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Cetak stiker kode QR untuk meja toko, kemasan produk, tautan chat WhatsApp otomatis, atau info transfer rekening.
        </p>
      </div>

      {/* Tabs Kategori Kode QR */}
      <div className="flex flex-wrap items-center gap-2 mt-6 p-1.5 bg-slate-100 rounded-lg max-w-xl">
        <button
          onClick={() => setQrType('whatsapp')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition ${
            qrType === 'whatsapp' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          WhatsApp Otomatis
        </button>
        <button
          onClick={() => setQrType('link')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition ${
            qrType === 'link' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Globe className="w-3.5 h-3.5 text-blue-600" />
          Tautan Website / Sosmed
        </button>
        <button
          onClick={() => setQrType('bank')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition ${
            qrType === 'bank' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <CreditCard className="w-3.5 h-3.5 text-amber-600" />
          Rekening Bank
        </button>
        <button
          onClick={() => setQrType('wifi')}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition ${
            qrType === 'wifi' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Wifi className="w-3.5 h-3.5 text-purple-600" />
          Wi-Fi Toko
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Kolom Form Input */}
        <div className="lg:col-span-7 space-y-4">
          {qrType === 'whatsapp' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Nomor WhatsApp Toko / Admin
                </label>
                <input
                  type="text"
                  value={waPhone}
                  onChange={(e) => setWaPhone(e.target.value)}
                  placeholder="081234567890"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                />
                <p className="text-[11px] text-slate-400 mt-1">Bisa dimulai dari 08... atau 62...</p>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Pesan Pembuka Otomatis dari Pembeli
                </label>
                <textarea
                  rows={3}
                  value={waMessage}
                  onChange={(e) => setWaMessage(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                  placeholder="Halo kak, saya mau pesan..."
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Ketika pembeli memindai QR ini, aplikasi WhatsApp di HP mereka langsung terbuka dengan pesan ini.
                </p>
              </div>
            </div>
          )}

          {qrType === 'link' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Alamat Web, Link Instagram, atau Menu Digital
                </label>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://instagram.com/tokoanda"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
            </div>
          )}

          {qrType === 'bank' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Nama Bank</label>
                  <input
                    type="text"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    placeholder="BCA / BRI / Mandiri"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Nomor Rekening</label>
                  <input
                    type="text"
                    value={accNumber}
                    onChange={(e) => setAccNumber(e.target.value)}
                    placeholder="1234567890"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none font-mono"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Nama Pemilik Rekening</label>
                <input
                  type="text"
                  value={accName}
                  onChange={(e) => setAccName(e.target.value)}
                  placeholder="BUDI SANTOSO"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none uppercase"
                />
              </div>
            </div>
          )}

          {qrType === 'wifi' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Nama Wi-Fi (SSID)</label>
                <input
                  type="text"
                  value={wifiSsid}
                  onChange={(e) => setWifiSsid(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Kata Sandi Wi-Fi</label>
                <input
                  type="text"
                  value={wifiPassword}
                  onChange={(e) => setWifiPassword(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                />
                <p className="text-[11px] text-slate-400 mt-1">Pengunjung tinggal scan untuk langsung terhubung ke Wi-Fi.</p>
              </div>
            </div>
          )}

          {/* Opsi Warna Kode QR */}
          <div className="pt-3 border-t border-slate-100">
            <label className="block text-xs font-medium text-slate-700 mb-2">Pilih Warna Kode QR</label>
            <div className="flex items-center gap-3">
              {[
                { label: 'Hitam Pekat', color: '#0f172a' },
                { label: 'Hijau Daun', color: '#047857' },
                { label: 'Biru Samudera', color: '#1d4ed8' },
                { label: 'Cokelat Kopi', color: '#78350f' }
              ].map((item) => (
                <button
                  key={item.color}
                  onClick={() => setQrColor(item.color)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg border transition ${
                    qrColor === item.color ? 'border-emerald-600 bg-emerald-50 font-semibold text-emerald-900' : 'border-slate-200 text-slate-600'
                  }`}
                >
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Kolom Preview & Tombol Unduh */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-200">
            <canvas ref={canvasRef} className="max-w-full h-auto rounded" />
          </div>

          <p className="text-xs text-slate-500 mt-3 text-center">
            Pindai dengan kamera HP / aplikasi scanner untuk menguji
          </p>

          <div className="flex items-center gap-3 w-full mt-5">
            <button
              onClick={handleDownload}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium text-xs transition shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Gambar PNG</span>
            </button>
            <button
              onClick={handleCopyText}
              className="px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-medium transition flex items-center gap-1.5"
              title="Salin Teks / Link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Tersalin' : 'Salin'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
