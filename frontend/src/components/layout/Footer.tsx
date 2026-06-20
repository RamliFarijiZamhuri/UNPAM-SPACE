import React from 'react';
import { HelpCircle, Shield, FileText, Globe, Heart } from 'lucide-react';

interface FooterProps {
  onOpenPolicy?: (title: string, content: string) => void;
}

export default function Footer({ onOpenPolicy }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleOpenDoc = (type: 'kebijakan' | 'syarat') => {
    if (onOpenPolicy) {
      if (type === 'kebijakan') {
        onOpenPolicy(
          'Kebijakan Privasi UNPAM SPACE',
          'Kami berkomitmen menjaga keamanan data mahasiswa Universitas Pamulang. Berkas verifikasi KTM/screenshot MyUnpam yang Anda unggah hanya digunakan satu kali untuk memvalidasi status kemahasiswaan Anda oleh dewan admin, kemudian dienkripsi secara aman dan tidak akan disebarluaskan kepada pihak ketiga mana pun selaras dengan Undang-Undang Perlindungan Data Pribadi (UU PDP) Republik Indonesia.'
        );
      } else {
        onOpenPolicy(
          'Syarat & Ketentuan Penggunaan',
          'Dengan menggunakan platform UNPAM SPACE, Anda setuju bahwa: 1. Anda tidak akan mengunggah informasi palsu baik pada listing kos maupun marketplace. 2. Segala bentuk transaksi jual beli dilakukan melalui metode COD secara aman di lingkungan kampus. 3. Anda bertanggung jawab penuh atas pesan serta komentar yang dituliskan pada forum komunitas UNPAM Space. 4. Penyalahgunaan identitas NIM milik mahasiswa lain akan berujung pembekuan akun permanen.'
        );
      }
    }
  };

  return (
    <footer className="w-full bg-(--color-midnight-harbor) text-white border-t border-slate-800 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-1.5 flex flex-col gap-4">
            <span className="text-xl font-extrabold tracking-tight">
              unpam<span className="text-(--color-signal-blue)">space</span>
            </span>
            <p className="text-sm text-slate-300 leading-relaxed max-w-xs">
              Temukan seluruh kebutuhan esensial kehidupan kampus Universitas Pamulang dekat dalam genggaman Anda.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-(--color-signal-blue) transition-colors">Instagram</a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-(--color-signal-blue) transition-colors">TikTok</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-(--color-signal-blue) transition-colors">X / Twitter</a>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold tracking-wider uppercase text-slate-400 text-xs">Eksplorasi</h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-300">
              <li><span className="hover:text-(--color-signal-blue) cursor-pointer transition-colors">Forum Komunitas</span></li>
              <li><span className="hover:text-(--color-signal-blue) cursor-pointer transition-colors">Marketplace Mahasiswa</span></li>
              <li><span className="hover:text-(--color-signal-blue) cursor-pointer transition-colors">Pencarian Kos</span></li>
              <li><span className="hover:text-(--color-signal-blue) cursor-pointer transition-colors">Denah Kampus</span></li>
            </ul>
          </div>

          {/* Guidelines/Legal Col */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold tracking-wider uppercase text-slate-400 text-xs font-mono">Kepercayaan & Keamanan</h4>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <button 
                onClick={() => handleOpenDoc('kebijakan')}
                className="flex items-center gap-1.5 hover:text-(--color-signal-blue) text-left cursor-pointer transition-colors"
              >
                <Shield className="w-3.5 h-3.5" />
                Kebijakan Privasi
              </button>
              <button 
                onClick={() => handleOpenDoc('syarat')}
                className="flex items-center gap-1.5 hover:text-(--color-signal-blue) text-left cursor-pointer transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                Syarat & Ketentuan
              </button>
              <span className="flex items-center gap-1.5 text-slate-400 text-xs">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                Dihosting Lokal
              </span>
            </div>
          </div>

          {/* Kampus Col */}
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-bold tracking-wider uppercase text-slate-400 text-xs">Universitas Pamulang</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-mono">
              Jl. Surya Kencana No. 1, <br />
              Pamulang Barat, Tangerang Selatan,<br />
              Banten 15417
            </p>
            <div className="mt-2 text-slate-400 text-xs">
              Mendukung Kampus Merdeka 🇮🇩
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>© {currentYear} UNPAM SPACE. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for Universitas Pamulang Hackathon 2026.
          </p>
        </div>

      </div>
    </footer>
  );
}
