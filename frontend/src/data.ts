import { MapRoom } from './types';

export const MAP_ROOMS: MapRoom[] = [
  // Lantai 1 Gedung A
  { id: 'ma101', name: 'Lobi Utama Gedung A', floor: 1, gedung: 'A', type: 'administrasi', description: 'Area santai dengan pusat penerimaan tamu, meja informasi, dan akses lift utama Gedung A.' },
  { id: 'ma102', name: 'Loket Keuangan & Akademik', floor: 1, gedung: 'A', type: 'administrasi', description: 'Pelayanan administrasi pembayaran perkuliahan, registrasi ulang NIM, serta pengajuan cuti akademik.' },
  { id: 'ma103', name: 'Kantin Gedung A', floor: 1, gedung: 'A', type: 'kantin', description: 'Menyediakan aneka sajian makan siang mahasiswa: nasi rames, soto, gado-gado, minuman segar.' },

  // Lantai 2 Gedung A
  { id: 'ma201', name: 'Ruang Dosen Teknik Informatika', floor: 2, gedung: 'A', type: 'administrasi', description: 'Pusat konsultasi akademik mahasiswa dengan dosen pembimbing akademik (PA) dan pengarsipan tugas akhir.' },
  { id: 'ma202', name: 'Ruang Kelas A.202', floor: 2, gedung: 'A', type: 'kelas', description: 'Ruang perkuliahan umum dengan pendingin AC, proyektor LCD, dan kapasitas 40 mahasiswa.' },
  { id: 'ma203', name: 'Ruang Kelas A.203', floor: 2, gedung: 'A', type: 'kelas', description: 'Ruang perkuliahan reguler A dan B, digunakan terjadwal.' },

  // Lantai 3 Gedung A
  { id: 'ma301', name: 'Lab Komputer Rekayasa Perangkat Lunak', floor: 3, gedung: 'A', type: 'laboratorium', description: 'Lab komputer berisi PC berspesifikasi tinggi untuk mata kuliah basis data, java, and python.' },
  { id: 'ma302', name: 'Lab Komputer Jaringan & Cisco', floor: 3, gedung: 'A', type: 'laboratorium', description: 'Digunakan untuk praktikum jaringan komputer, pemrograman soket, dengan router dan switch Cisco fisik.' },
  { id: 'ma303', name: 'Lab Komputer Pemrograman Web (304)', floor: 3, gedung: 'A', type: 'laboratorium', description: 'Tempat penyelenggaraan UTS/UAS praktikum pemrograman web dan web design.' },

  // Lantai 4 Gedung A
  { id: 'ma401', name: 'Perpustakaan Universitas Pamulang', floor: 4, gedung: 'A', type: 'lainnya', description: 'Koleksi lengkap buku teks akademik sains, teknik, ekonomi, jurnal riset, fiksi, dan ruang baca ber-AC.' },
  { id: 'ma402', name: 'Ruang Kelas A.402', floor: 4, gedung: 'A', type: 'kelas', description: 'Ruang perkuliahan lantai 4.' },

  // Lantai 5 Gedung A
  { id: 'ma501', name: 'Pusat Kegiatan Mahasiswa (PKM) / Sekretariat UKM', floor: 5, gedung: 'A', type: 'administrasi', description: 'Basecamp seluruh unit kegiatan mahasiswa (UKM), tempat kumpul organisasi, kepramukaan, paduan suara, dll.' },

  // Lantai 1 Gedung B
  { id: 'mb101', name: 'Lobi Utama Gedung B (Darsono)', floor: 1, gedung: 'B', type: 'administrasi', description: 'Lobi megah lobi utama gedung B, akses lift canggih, dan dekat taman rekreasi belakang.' },
  { id: 'mb102', name: 'Loket Pendaftaran Mahasiswa Baru', floor: 1, gedung: 'B', type: 'administrasi', description: 'Gedung utama penerimaan civitas akademika baru UNPAM.' },
  { id: 'mb103', name: 'Lawson Samping Gedung B', floor: 1, gedung: 'B', type: 'kantin', description: 'Tempat jajan favorit mahasiswa: oden, onigiri, bento, kopi sore, dan spot kumpul outdoor.' },

  // Lantai 3 Gedung B
  { id: 'mb301', name: 'Ruang Dekanat Fakultas Ilmu Komputer', floor: 3, gedung: 'B', type: 'administrasi', description: 'Kantor Dekan, Wakil Dekan, dan staf administrasi Fakultas Ilmu Komputer.' },
  { id: 'mb302', name: 'Laboratorium Keamanan Siber & IoT', floor: 3, gedung: 'B', type: 'laboratorium', description: 'Studio riset siber keamanan, ethical hacking, digital forensik, dan proyek mikro-kontroler IoT.' },

  // Lantai 8 Gedung B (Aula)
  { id: 'mb801', name: 'Aula Gedung Darsono Lantai 8', floor: 8, gedung: 'B', type: 'lainnya', description: 'Aula utama berkapasitas 1000+ orang, tempat penyelenggaraan wisuda, seminar nasional, dan ospek.' },
];
