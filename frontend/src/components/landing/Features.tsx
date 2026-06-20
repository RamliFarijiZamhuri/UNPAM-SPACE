import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Calendar, Home, Map, MessageSquare, ShieldAlert, ArrowUpRight } from 'lucide-react';

interface FeaturesProps {
  onSelectFeature: (tab: string) => void;
  isLoggedIn: boolean;
  onOpenAuth: () => void;
}

export default function Features({ onSelectFeature, isLoggedIn, onOpenAuth }: FeaturesProps) {
  const featuresList = [
    {
      id: 'event',
      title: 'Event Kampus',
      description: 'Temukan seminar, workshop, lomba, dan kegiatan kampus UNPAM terbaru dengan info sertifikat resmi.',
      icon: Calendar,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
      badge: 'SKPI Ready'
    },
    {
      id: 'marketplace',
      title: 'Marketplace COD',
      description: 'Jual beli kebutuhan kuliah, buku bekas, jas almamater, atau gadget dengan aman langsung di area kampus.',
      icon: ShoppingBag,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      badge: 'COD Kampus'
    },
    {
      id: 'kos',
      title: 'Pencarian Kos',
      description: 'Cari tempat tinggal terdekat, filter harga & gender, serta bandingkan langsung fasilitas hingga 3 kos sekaligus.',
      icon: Home,
      color: 'bg-amber-50 text-amber-600 border-amber-100',
      badge: 'Real-time Distance'
    },
    {
      id: 'map',
      title: 'Denah Kampus',
      description: 'Navigasi virtual per-lantai Gedung A & B Universitas Pamulang. Cari ruang kuliah atau lab komputer tanpa tersesat.',
      icon: Map,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      badge: 'Indoor Mapper'
    },
    {
      id: 'community',
      title: 'Forum Komunitas',
      description: 'Wadah obrolan mahasiswa untuk mabar game, diskusi mata kuliah, cari tim PKM/proyek, dan kolaborasi akademik.',
      icon: MessageSquare,
      color: 'bg-teal-50 text-teal-600 border-teal-100',
      badge: 'Komunitas'
    },
    {
      id: 'temuan',
      title: 'Barang Temuan',
      description: 'Papan pelaporan klaim barang hilang/temuan di lobi, kantin, atau ruang lab komputer yang terintegrasi chat sistem.',
      icon: ShieldAlert,
      color: 'bg-rose-50 text-rose-600 border-rose-100',
      badge: 'Auto-Match'
    }
  ];

  const handleCardClick = (id: string) => {
    if (isLoggedIn) {
      onSelectFeature(id);
    } else {
      onOpenAuth();
    }
  };

  return (
    <section id="features-section" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 z-10 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-(--color-midnight-harbor) sm:text-4xl">
          Satu Aplikasi, Seluruh Kebutuhan Kampus
        </h2>
        <p className="mt-4 text-base sm:text-lg text-(--color-slate-channel) leading-relaxed">
          Dirancang hyperlocal khusus untuk civitas akademika Universitas Pamulang dengan sistem verifikasi identitas terintegrasi untuk menjamin keamanan.
        </p>
      </div>

      {/* Grid List with scroll-reveal simulation or stagger animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {featuresList.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => handleCardClick(feature.id)}
              className="group bg-white rounded-2xl p-6 border border-(--color-sea-fog) hover:border-(--color-signal-blue) shadow-md hover:shadow-xl hover:-translate-y-2 focus-within:ring-2 focus-within:ring-(--color-signal-blue) transition-all duration-300 cursor-pointer flex flex-col justify-between"
              id={`feature-${feature.id}`}
            >
              <div>
                {/* Icon wrapper & badge status */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3.5 rounded-xl border ${feature.color} transition-transform group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-extrabold tracking-wider uppercase bg-(--color-ice-tint) text-(--color-signal-blue) px-2.5 py-1 rounded-md">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-(--color-midnight-harbor) mb-2.5 flex items-center gap-1.5 group-hover:text-(--color-signal-blue) transition-colors">
                  {feature.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity font-bold" />
                </h3>
                
                <p className="text-sm text-(--color-slate-channel) leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Action label at bottom */}
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-(--color-signal-blue)">
                <span>{isLoggedIn ? 'Buka Fitur Sekarang' : 'Daftar untuk Memulai'}</span>
                <span className="w-5 h-5 rounded-full bg-(--color-ice-tint) flex items-center justify-center text-xs group-hover:bg-(--color-signal-blue) group-hover:text-white transition-colors">→</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
