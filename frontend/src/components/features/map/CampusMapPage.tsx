import React, { useState } from 'react';
import { MapRoom, User } from '../../../types';
import { MAP_ROOMS } from '../../../data';
import { Compass, Search, Building, ArrowLeft, Heart, Check, Layers, AlertCircle } from 'lucide-react';

interface CampusMapPageProps {
  currentUser: User;
  onGoBack: () => void;
}

export default function CampusMapPage({ currentUser, onGoBack }: CampusMapPageProps) {
  const [selectedGedung, setSelectedGedung] = useState<'A' | 'B'>('A');
  const [selectedFloor, setSelectedFloor] = useState<number>(1);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRoom, setActiveRoom] = useState<MapRoom | null>(MAP_ROOMS[0]);

  const floors = [1, 2, 3, 4, 5, 8];

  const types = [
    { value: 'all', label: 'Semua Fasilitas' },
    { value: 'kelas', label: 'Ruang Kelas' },
    { value: 'laboratorium', label: 'Laboratorium PC' },
    { value: 'administrasi', label: 'Loket & Office' },
    { value: 'kantin', label: 'Kantin / Spot Jajan' }
  ];

  // Filters
  const filteredRooms = MAP_ROOMS.filter((room) => {
    const matchesGedung = room.gedung === selectedGedung;
    const matchesFloor = room.floor === selectedFloor;
    const matchesType = selectedType === 'all' || room.type === selectedType;
    return matchesGedung && matchesFloor && matchesType;
  });

  // Search Results overall (any floor)
  const searchResults = searchQuery.trim() === '' ? [] : MAP_ROOMS.filter(r => 
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectSearchedRoom = (room: MapRoom) => {
    setSelectedGedung(room.gedung);
    setSelectedFloor(room.floor);
    setActiveRoom(room);
    setSearchQuery('');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      
      {/* Header Back Button */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <button
            onClick={onGoBack}
            className="flex items-center gap-1.5 text-xs font-bold text-(--color-slate-channel) hover:text-(--color-midnight-harbor) cursor-pointer transition-colors mb-2 focus:outline-none"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Menu
          </button>
          <h1 className="text-3xl font-extrabold tracking-tight text-(--color-midnight-harbor)">
            Denah Kampus Interaktif
          </h1>
          <p className="text-sm text-(--color-slate-channel) mt-1">
            Navigasi letak gedung, lantai, dan ruang kelas di Universitas Pamulang Sektor Barat.
          </p>
        </div>
      </div>

      {/* Main Grid: Left Controls & Search, Middle/Right Map Visualization, Right Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Selector & Search (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Quick Search */}
          <div className="bg-white rounded-2xl p-5 border border-(--color-sea-fog) shadow-md">
            <h3 className="text-sm font-bold text-(--color-midnight-harbor) uppercase tracking-wide mb-3">
              Cari Ruangan / Fasilitas
            </h3>
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-(--color-slate-channel)" />
              <input
                type="text"
                placeholder="Ketik: 'Lab 304' atau 'Kantin'..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white pl-10 pr-4 py-2.5 text-sm rounded-xl border border-(--color-sea-fog) focus:border-(--color-signal-blue) focus:outline-none text-(--color-midnight-harbor)"
              />
            </div>

            {/* Live Search suggestions */}
            {searchResults.length > 0 && (
              <div className="mt-3 divide-y divide-slate-100 max-h-48 overflow-y-auto border border-blue-100 rounded-xl bg-blue-50/50 p-2">
                {searchResults.map(room => (
                  <button
                    key={room.id}
                    onClick={() => selectSearchedRoom(room)}
                    className="w-full text-left p-2.5 hover:bg-white rounded-lg text-xs font-semibold text-(--color-midnight-harbor) flex justify-between items-center transition-colors cursor-pointer focus:outline-none"
                  >
                    <div>
                      <span className="font-bold block">{room.name}</span>
                      <span className="text-[10px] text-(--color-slate-channel)">Gedung {room.gedung} - Lantai {room.floor}</span>
                    </div>
                    <span className="text-[10px] bg-(--color-signal-blue) text-white font-bold px-2 py-0.5 rounded-full">Temukan</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Building & Floor Selector */}
          <div className="bg-white rounded-2xl p-5 border border-(--color-sea-fog) shadow-md space-y-4">
            <div>
              <h3 className="text-sm font-bold text-(--color-midnight-harbor) uppercase tracking-wide mb-2">
                Pilih Gedung
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => { setSelectedGedung('A'); setSelectedFloor(1); }}
                  className={`py-3 text-sm font-bold rounded-xl border cursor-pointer transition-all ${
                    selectedGedung === 'A'
                      ? 'bg-(--color-midnight-harbor) border-(--color-midnight-harbor) text-white'
                      : 'bg-white border-(--color-sea-fog) text-(--color-slate-channel) hover:bg-slate-50'
                  }`}
                >
                  <Building className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
                  Gedung A
                </button>
                
                <button
                  type="button"
                  onClick={() => { setSelectedGedung('B'); setSelectedFloor(1); }}
                  className={`py-3 text-sm font-bold rounded-xl border cursor-pointer transition-all ${
                    selectedGedung === 'B'
                      ? 'bg-(--color-midnight-harbor) border-(--color-midnight-harbor) text-white'
                      : 'bg-white border-(--color-sea-fog) text-(--color-slate-channel) hover:bg-slate-50'
                  }`}
                >
                  <Building className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
                  Gedung B (Darsono)
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-(--color-midnight-harbor) uppercase tracking-wide mb-2">
                Pilih Lantai
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {floors.map((fl) => (
                  <button
                    key={fl}
                    onClick={() => setSelectedFloor(fl)}
                    className={`py-2 text-xs font-bold rounded-xl border cursor-pointer transition-all ${
                      selectedFloor === fl
                        ? 'bg-(--color-signal-blue) border-(--color-signal-blue) text-white'
                        : 'bg-white border-(--color-sea-fog) text-(--color-midnight-harbor) hover:bg-slate-50'
                    }`}
                  >
                    Lantai {fl}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Type filters */}
          <div className="bg-white rounded-2xl p-5 border border-(--color-sea-fog) shadow-md">
            <h3 className="text-sm font-bold text-(--color-midnight-harbor) uppercase tracking-wide mb-3">
              Filter Kategori Fasilitas
            </h3>
            <div className="space-y-1.5">
              {types.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={`w-full text-left px-3.5 py-2.5 text-xs font-bold rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    selectedType === type.value
                      ? 'bg-(--color-ice-tint) border-(--color-signal-blue) text-(--color-signal-blue)'
                      : 'bg-white border-(--color-sea-fog) text-(--color-midnight-harbor) hover:bg-slate-50'
                  }`}
                >
                  <span>{type.label}</span>
                  {selectedType === type.value && <Check className="w-3.5 h-3.5 text-(--color-signal-blue)" />}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Middle/Right Column: Interactive Map Render Screen (8 cols) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Map canvas view box (7 cols equivalent) */}
          <div className="md:col-span-7 bg-white rounded-2xl p-6 border border-(--color-sea-fog) shadow-md flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-(--color-slate-channel) font-mono uppercase tracking-wide">
                  Virtual Floor Plan View
                </span>
                <span className="text-sm font-extrabold text-(--color-midnight-harbor)">
                  Gedung {selectedGedung} — Lantai {selectedFloor}
                </span>
              </div>
              
              {/* SVG Mock Layout Grid */}
              <div className="relative w-full aspect-square max-w-[280px] sm:max-w-xs mx-auto border-4 border-(--color-sea-fog) rounded-2xl bg-slate-50 overflow-hidden flex flex-col justify-between p-4">
                
                {/* Labels of building zones */}
                <div className="text-[10px] font-extrabold text-slate-300 tracking-wide uppercase flex justify-between">
                  <span>Sisi Barat</span>
                  <span>Koridor Utama</span>
                  <span>Sisi Timur</span>
                </div>

                {/* Simulated Room Grid blocks based on filters */}
                <div className="grid grid-cols-2 gap-3 my-auto">
                  {filteredRooms.length === 0 ? (
                    <div className="col-span-2 text-center py-10">
                      <AlertCircle className="w-8 h-8 text-(--color-pale-steel) mx-auto mb-2" />
                      <p className="text-[11px] font-bold text-(--color-slate-channel)">Lantai ini belum terdaftar untuk filter ini</p>
                    </div>
                  ) : (
                    filteredRooms.map((room) => {
                      const isActive = activeRoom?.id === room.id;
                      return (
                        <button
                          key={room.id}
                          onClick={() => setActiveRoom(room)}
                          className={`p-3 rounded-xl border text-left flex flex-col justify-between text-xs font-bold transition-all h-20 cursor-pointer focus:outline-none ${
                            isActive
                              ? 'bg-(--color-signal-blue) border-(--color-signal-blue) text-white shadow-md shadow-blue-100 scale-103'
                              : 'bg-white border-(--color-sea-fog) text-(--color-midnight-harbor) hover:border-(--color-signal-blue)'
                          }`}
                        >
                          <span className="line-clamp-2 h-7 leading-tight">{room.name}</span>
                          <span className={`text-[9px] uppercase px-1.5 py-0.5 rounded text-center w-full block mt-1 ${
                            isActive 
                              ? 'bg-white/20 text-white' 
                              : 'bg-(--color-ice-tint) text-(--color-signal-blue)'
                          }`}>
                            {room.type}
                          </span>
                        </button>
                      );
                    })
                  )}
                </div>

                <div className="text-[9px] font-bold text-center text-(--color-pale-steel)">
                  *Klik ruangan pada cetakan cetak biru untuk detail lengkap
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-semibold text-(--color-slate-channel) flex items-center gap-2">
              <Compass className="w-4 h-4 text-(--color-signal-blue) animate-[spin_5s_linear_infinite]" />
              <span>Menampilkan total {filteredRooms.length} ruangan terdaftar di lokasi ini.</span>
            </div>

          </div>

          {/* Selected Room Detail Drawer Panel (5 cols equivalent) */}
          <div className="md:col-span-5 bg-(--color-ice-tint) rounded-2xl p-6 border border-(--color-sea-fog) shadow-md flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xs font-extrabold text-(--color-slate-channel) uppercase tracking-wide mb-6 pb-2 border-b border-(--color-sea-fog)">
                Detail Informasi Ruangan
              </h3>

              {activeRoom ? (
                <div className="space-y-4 animate-[fadeIn_0.2s_ease-out]">
                  <div>
                    <h4 className="text-2xl font-extrabold text-(--color-midnight-harbor) tracking-tight leading-tight">
                      {activeRoom.name}
                    </h4>
                    <span className="text-xs font-bold bg-(--color-signal-blue)/10 text-(--color-signal-blue) px-2.5 py-1 rounded-md inline-block uppercase mt-2">
                      Fasilitas: {activeRoom.type === 'laboratorium' ? 'Laboratorium PC' : activeRoom.type}
                    </span>
                  </div>

                  <hr className="border-(--color-sea-fog)" />

                  <div className="space-y-2 text-xs font-semibold text-(--color-midnight-harbor)">
                    <p className="flex justify-between">
                      <span className="text-(--color-pale-steel)">Gedung:</span>
                      <span>Gedung {activeRoom.gedung} ({activeRoom.gedung === 'A' ? 'Gedung Lama' : 'Gedung B / Darsono'})</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-(--color-pale-steel)">Sektor Lantai:</span>
                      <span>Lantai {activeRoom.floor}</span>
                    </p>
                  </div>

                  <hr className="border-(--color-sea-fog)" />

                  <div>
                    <p className="text-xs font-bold text-(--color-slate-channel) uppercase tracking-wide mb-1.5">
                      Fungsi & Informasi
                    </p>
                    <p className="text-sm text-(--color-slate-channel) leading-relaxed">
                      {activeRoom.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-sm text-(--color-slate-channel)">Silakan pilih ruangan di denah untuk informasi detail.</p>
                </div>
              )}
            </div>

            {activeRoom && (
              <div className="mt-8 bg-white rounded-xl p-4 border border-(--color-sea-fog) text-xs leading-relaxed text-(--color-slate-channel)">
                <span className="font-bold text-(--color-midnight-harbor) block mb-1">💡 Tips Navigasi Kampus</span>
                Gedung B diakses melalui pintu samping timur. Lift berada dekat pos sekuriti lobi tengah. Gunakan tangga darurat samping untuk naik ke lantai 2 jika lift padat jam perkuliahan reguler.
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
