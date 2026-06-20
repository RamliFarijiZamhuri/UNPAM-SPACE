import React, { useEffect, useState } from 'react';
import { User, ForumCategory } from '../../../types';
import { Calendar, ShoppingBag, Home, Map, MessageSquare, ShieldAlert, Sparkles, LogOut, ArrowRight, Star, GraduationCap } from 'lucide-react';

interface MainSelectionPageProps {
  currentUser: User;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

// Vector mascot emojis based on gender for dynamic, highly approachable student avatar representation
const MASCULES_PRIAS = [
  { emoji: '👨‍💻', mood: 'Fokus Coding & Modul', color: 'from-blue-200 to-indigo-100' },
  { emoji: '🙋‍♂️', mood: 'Energetik Menyapa Teman Baru', color: 'from-emerald-200 to-teal-100' },
  { emoji: '🚴‍♂️', mood: 'Santai Menjelajahi Pamulang', color: 'from-amber-200 to-orange-100' },
  { emoji: '🧠', mood: 'Fokus Belajar Cisco Jaringan', color: 'from-violet-200 to-purple-100' },
  { emoji: '🎓', mood: 'Semangat Menyelesaikan Proposal PKM', color: 'from-pink-200 to-rose-100' }
];

const MASCULES_WANITAS = [
  { emoji: '👩‍💻', mood: 'Fokus Coding & Pemrograman Web', color: 'from-pink-200 to-purple-100' },
  { emoji: '🙋‍♀️', mood: 'Ramah Menyambut Mahasiswa Baru', color: 'from-emerald-200 to-teal-100' },
  { emoji: '📚', mood: 'Fokus Membaca di Perpustakaan', color: 'from-amber-200 to-orange-100' },
  { emoji: '👩‍🎓', mood: 'Semangat BedahProposal PKM-KC', color: 'from-blue-200 to-indigo-100' },
  { emoji: '✨', mood: 'Santai Menikmati Lawson Kampus', color: 'from-violet-200 to-fuchsia-100' }
];

export default function MainSelectionPage({
  currentUser,
  activeTab,
  setActiveTab,
  onLogout
}: MainSelectionPageProps) {
  const [typedGreeting, setTypedGreeting] = useState('');
  const [selectedMascot, setSelectedMascot] = useState({ emoji: '👨‍💻', mood: 'Membuka UNPAM SPACE', color: 'from-blue-100 to-indigo-100' });

  // Stamping greeting typing
  useEffect(() => {
    const origText = `Hai, ${currentUser.name}!`;
    let ix = 0;
    const interval = setInterval(() => {
      setTypedGreeting(origText.substring(0, ix + 1));
      ix++;
      if (ix >= origText.length) {
        clearInterval(interval);
      }
    }, 85);
    return () => clearInterval(interval);
  }, [currentUser.name]);

  // Choose a random mascot based on gender
  useEffect(() => {
    const setOfMascots = currentUser.gender === 'pria' ? MASCULES_PRIAS : MASCULES_WANITAS;
    const randomIdx = Math.floor(Math.random() * setOfMascots.length);
    setSelectedMascot(setOfMascots[randomIdx]);
  }, [currentUser.gender]);

  const cardsList = [
    {
      id: 'event',
      title: 'Event Kampus',
      desc: 'Seminar, kompetisi web, & hackathon.',
      icon: Calendar,
      color: 'hover:border-blue-400 group-hover:bg-blue-50/50',
      badge: 'SKPI'
    },
    {
      id: 'marketplace',
      title: 'Marketplace COD',
      desc: 'Beli buku, jas lab, & barang kuliah.',
      icon: ShoppingBag,
      color: 'hover:border-emerald-400 group-hover:bg-emerald-50/50',
      badge: 'COD'
    },
    {
      id: 'kos',
      title: 'Pencarian Kos',
      desc: 'Sewa kamar, filter jarak, & banding.',
      icon: Home,
      color: 'hover:border-amber-400 group-hover:bg-amber-50/50',
      badge: 'Hunian'
    },
    {
      id: 'map',
      title: 'Denah Kampus',
      desc: 'Peta digital virtual Gedung A & B.',
      icon: Map,
      color: 'hover:border-indigo-400 group-hover:bg-indigo-50/50',
      badge: 'Indoor'
    },
    {
      id: 'community',
      title: 'Forum Komunitas',
      desc: 'Diskusi, mabar ML, cari tim PKM, & hobi.',
      icon: MessageSquare,
      color: 'hover:border-teal-400 group-hover:bg-teal-50/50',
      badge: 'Social'
    },
    {
      id: 'temuan',
      title: 'Barang Temuan',
      desc: 'Klem kunci, dompet, & KTM hilang.',
      icon: ShieldAlert,
      color: 'hover:border-rose-400 group-hover:bg-rose-50/50',
      badge: 'LostFound'
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      
      {/* Greetings Header Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 bg-white border border-slate-200 p-4 rounded-xl shadow-xs">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-black text-(--color-midnight-harbor) tracking-tight">
            {typedGreeting}
          </h1>
          <p className="text-xs font-semibold text-(--color-slate-channel)">
            Ingin melakukan apa Anda hari ini di lingkungan kampus? Pilih menu pintas di bawah.
          </p>
        </div>

        {/* Mascot box layout */}
        <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 p-2 rounded-lg max-w-sm w-full md:w-auto shrink-0 select-none">
          <div className={`w-9 h-9 rounded bg-gradient-to-tr ${selectedMascot.color} flex items-center justify-center text-xl border border-slate-200/50 cursor-help`} title="Karakter Mascot Random Kampus Anda">
            {selectedMascot.emoji}
          </div>
          <div>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block font-mono">Maskot Kampus</span>
            <span className="text-xs font-bold text-(--color-midnight-harbor) leading-tight block">{selectedMascot.mood}</span>
          </div>
        </div>
      </div>

      {/* Grid selections menu boards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
        {cardsList.map((card) => {
          const Icon = card.icon;
          return (
            <button
              key={card.id}
              onClick={() => setActiveTab(card.id)}
              className="group bg-white border border-slate-200 p-4.5 rounded-xl text-left hover:border-(--color-signal-blue) hover:bg-slate-50/50 shadow-xs transition-all h-38 flex flex-col justify-between cursor-pointer focus:outline-none"
            >
              <div className="flex items-center justify-between w-full">
                <div className="p-2.5 bg-slate-50 text-(--color-signal-blue) rounded-lg border border-slate-100">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-extrabold uppercase font-mono bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                  {card.badge}
                </span>
              </div>

              <div>
                <h3 className="font-extrabold text-sm text-(--color-midnight-harbor) mb-0.5 flex items-center gap-1 group-hover:text-(--color-signal-blue) transition-colors">
                  {card.title}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </h3>
                <p className="text-xs text-(--color-slate-channel) leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom advertisement horizontal banner segment (Unpam Space+) */}
      <div className="bg-slate-900 text-white border border-slate-800 p-5 md:p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-radial from-amber-400/10 to-transparent blur-3xl pointer-events-none" />
        
        <div className="relative space-y-1.5">
          <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>VIP Membership</span>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight">Upgrade Layanan ke UNPAM SPACE+</h2>
          <p className="text-slate-300 text-xs leading-relaxed max-w-xl">
            Buka status member VIP dengan ornamen posting menyala, lencana mahkota bintang emas berwibawa, dan peningkatan automatik listing sewaan milik Anda di teratas directory. Hanya Rp 13.000/bln!
          </p>
        </div>

        <button
          onClick={() => setActiveTab('plus')}
          className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-lg cursor-pointer text-xs flex items-center gap-1.5 transition-all w-full md:w-auto justify-center select-none shrink-0"
        >
          <span>Eksplor Membership</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
        </button>
      </div>

    </div>
  );
}
