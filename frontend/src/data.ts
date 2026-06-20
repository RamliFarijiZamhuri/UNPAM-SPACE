import { CampusEvent, MarketItem, KosProperty, LostFoundReport, ForumPost, MapRoom } from './types';

export const STARTER_EVENTS: CampusEvent[] = [
  {
    id: 'e1',
    title: 'Seminar Cybersecurity: Securing the Digital Era',
    description: 'Seminar nasional yang diselenggarakan oleh HIMA Teknik Informatika UNPAM menghadirkan praktisi keamanan siber industri terkemuka. Dapatkan sertifikat ber-SKPI dan wawasan dunia kerja.',
    date: '2026-06-25',
    time: '08:30 - 12:00 WIB',
    location: 'Aula Gedung Darsono, Lantai 8 Gedung B',
    category: 'seminar',
    organizer: 'HIMA TI UNPAM',
    savedByUsers: [],
    shares: 42
  },
  {
    id: 'e2',
    title: 'UNPAM Web Design Hackathon 2026',
    description: 'Tunjukkan kemampuan merancang web interaktif, responsif, dan bernilai guna sosial. Kompetisi ini terbuka untuk seluruh mahasiswa aktif Teknik Informatika Universitas Pamulang.',
    date: '2026-07-02',
    time: '09:00 WIB - Selesai',
    location: 'Lab Komputer 304, Lantai 3 Gedung A',
    category: 'lomba',
    organizer: 'Program Studi Informatika',
    savedByUsers: [],
    shares: 18
  },
  {
    id: 'e3',
    title: 'Bakti Sosial & Donor Darah Lingkungan Kampus',
    description: 'Gerakan kemanusiaan kerja sama KSR PMI UNPAM dan BEM Universitas. Terbuka bagi seluruh dosen dan mahasiswa yang ingin menyumbangkan darahnya untuk sesama.',
    date: '2026-06-28',
    time: '08:00 - 14:00 WIB',
    location: 'Lobi Utama Lantai 1 Gedung A',
    category: 'sosial',
    organizer: 'KSR PMI UNPAM',
    savedByUsers: [],
    shares: 29
  },
  {
    id: 'e4',
    title: 'Sosialisasi PKM 2026 & Klinik Proposal',
    description: 'Ingin proposal PKM kamu lolos pendanaan DIKTI? Hadiri bedah materi dan bimbingan langsung dari dosen reviewer nasional untuk menyusun proposal berkualitas tinggi.',
    date: '2026-07-10',
    time: '13:00 - 16:30 WIB',
    location: 'Ruang Rapat Rektorat, Lantai 2 Gedung B',
    category: 'akademik',
    organizer: 'Lembaga Kemahasiswaan UNPAM',
    savedByUsers: [],
    shares: 55
  }
];

export const STARTER_PRODUCTS: MarketItem[] = [
  {
    id: 'p1',
    title: 'Buku Algoritma & Pemrograman (Edisi Revisi)',
    description: 'Sangat cocok untuk anak semester 1 atau 2 Teknik Informatika. Kondisi mulus, tidak ada coretan, kertas masih bersih. Bisa COD di depan lobby Gedung B.',
    price: 45000,
    condition: 'bekas',
    category: 'buku',
    photoIndex: 1,
    sellerId: 'u2',
    sellerName: 'Asep Ridwan',
    sellerPhone: '08123456789',
    sellerVerLevel: 2,
    createdAt: '2026-06-18',
    isBoosted: false,
    boostExpiresAt: null,
    views: 124
  },
  {
    id: 'p2',
    title: 'Keyboard Mechanical Rexus Daiva d68',
    description: 'Switch Outemu Blue, mulus, semua tombol normal. Kelengkapan box lengkap, dapet pembersih tombol juga. Jual butuh buat bayar UTS. COD area kantin Gedung A.',
    price: 250000,
    condition: 'bekas',
    category: 'elektronik',
    photoIndex: 2,
    sellerId: 'u3',
    sellerName: 'Dina Octavia',
    sellerPhone: '08987654321',
    sellerVerLevel: 3,
    createdAt: '2026-06-19',
    isBoosted: true,
    boostExpiresAt: '2026-07-20',
    views: 310
  },
  {
    id: 'p3',
    title: 'Kalkulator Ilmiah Casio fx-991EX',
    description: 'Biasa dipake buat anak Teknik Sipil atau Akuntansi. Kondisi batre sehat walafiat, tombol empuk, solar panel lancar jaya. COD samping Lawson kampus.',
    price: 180000,
    condition: 'bekas',
    category: 'peralatan',
    photoIndex: 3,
    sellerId: 'u4',
    sellerName: 'Rian Hidayat',
    sellerPhone: '08544332211',
    sellerVerLevel: 1,
    createdAt: '2026-06-15',
    isBoosted: false,
    boostExpiresAt: null,
    views: 87
  },
  {
    id: 'p4',
    title: 'Jaket Almamater UNPAM (Size L)',
    description: 'Jaket jas almamater resmi UNPAM, jarang banget dipake (banyakan disimpan). Bahan tebal, warna kuning cerah tidak pudar. COD area gazebo belakang kampus.',
    price: 120000,
    condition: 'bekas',
    category: 'fashion',
    photoIndex: 4,
    sellerId: 'u5',
    sellerName: 'Fahri Aliy',
    sellerPhone: '08112233445',
    sellerVerLevel: 2,
    createdAt: '2026-06-17',
    isBoosted: false,
    boostExpiresAt: null,
    views: 145
  }
];

export const STARTER_KOS: KosProperty[] = [
  {
    id: 'k1',
    title: 'Kos Pamulang Permai 1 (Putra)',
    address: 'Jl. Pamulang Permai Raya No. 42 (5 menit jalan kaki ke UNPAM)',
    priceMonthly: 750000,
    gender: 'putra',
    facilities: ['AC', 'WiFi', 'Kasur', 'Lemari', 'Kamar Mandi Dalam'],
    distanceFromCampus: 0.3,
    photoIndex: 1,
    contactPhone: '08785544332',
    reporterName: 'Bayu Saputra',
    reporterVerLevel: 3,
    isVerified: true,
    isBoosted: true,
    views: 420
  },
  {
    id: 'k2',
    title: 'Kos Putri Melati Asri',
    address: 'Jl. Surya Kencana Gg. Melati No. 12 (Belakang Kampus UNPAM)',
    priceMonthly: 850000,
    gender: 'putri',
    facilities: ['WiFi', 'Kasur', 'Lemari', 'Kipas Angin', 'Dapur Bersama', 'Kamar Mandi Dalam'],
    distanceFromCampus: 0.1,
    photoIndex: 2,
    contactPhone: '08129988776',
    reporterName: 'Siti Aminah',
    reporterVerLevel: 2,
    isVerified: true,
    isBoosted: false,
    views: 290
  },
  {
    id: 'k3',
    title: 'Pondok Lestari Campur (WiFi Kencang)',
    address: 'Jl. Pajajaran Gg. Subur, Pamulang Barat (Dekat Bundaran Pamulang)',
    priceMonthly: 1200000,
    gender: 'campur',
    facilities: ['AC', 'WiFi', 'Kasur', 'Lemari', 'Dapur Bersama', 'Kamar Mandi Dalam', 'Parkir Mobil'],
    distanceFromCampus: 0.8,
    photoIndex: 3,
    contactPhone: '08964433221',
    reporterName: 'Gilang Ramadhan',
    reporterVerLevel: 2,
    isVerified: false,
    isBoosted: false,
    views: 180
  },
  {
    id: 'k4',
    title: 'Kos Surya Kencana Pondok Hijau',
    address: 'Kampung Pondok Hijau, Pamulang (12 menit jalan kaki / naik motor 3 menit)',
    priceMonthly: 600000,
    gender: 'putra',
    facilities: ['WiFi', 'Kasur', 'Kamar Mandi Luar', 'Parkir Motor'],
    distanceFromCampus: 1.2,
    photoIndex: 4,
    contactPhone: '08521122334',
    reporterName: 'Hendri Setiawan',
    reporterVerLevel: 1,
    isVerified: true,
    isBoosted: false,
    views: 215
  }
];

export const STARTER_LOSTFOUND: LostFoundReport[] = [
  {
    id: 'lf1',
    type: 'hilang',
    title: 'Kunci Motor Honda Vario 125',
    description: 'Gantungan kunci warna merah tulisan Converse. Hilang di area parkir motor basement Gedung B kemarin sore sekitar jam 17:30 WIB. Tolong kabari jika ketemu.',
    location: 'Parkiran Basement Gedung B',
    date: '2026-06-19',
    photoIndex: 1,
    reporterName: 'Ahmad Maulana',
    contact: '087711223344',
    status: 'aktif',
    createdAt: '2026-06-19T10:00:00Z',
    chatMessages: [
      { id: 'm1', senderName: 'Dian Candra', text: 'Saya liat ada kunci mirip digantung di pos satpam lobi timur mas', createdAt: '2026-06-19T11:20:00Z' },
      { id: 'm2', senderName: 'Ahmad Maulana', text: 'Oh ya? Nanti saya coba cek ke pos lobi timur. Makasih banyak infonya mbak!', createdAt: '2026-06-19T11:45:00Z' }
    ]
  },
  {
    id: 'lf2',
    type: 'temuan',
    title: 'Tumbler Corkcicle Hitam Matte',
    description: 'Ditemukan tertinggal di bawah meja baris ketiga Ruang Lab Komputer 304 Gedung A setelah mata kuliah Pemrograman Web selesai. Saya titipkan di meja dosen lab dulu.',
    location: 'Lab Komputer 304, Lantai 3 Gedung A',
    date: '2026-06-18',
    photoIndex: 2,
    reporterName: 'Riska Wahyuni',
    contact: '081244556677',
    status: 'aktif',
    createdAt: '2026-06-18T15:00:00Z',
    chatMessages: []
  },
  {
    id: 'lf3',
    type: 'hilang',
    title: 'KTM atas nama Ahmad Fauzi (Informatika)',
    description: 'Kartu Tanda Mahasiswa UNPAM warna kuning/hijau. Kemungkinan terjatuh atau tertinggal di kantin lantai dasar Gedung B pas jam makan siang.',
    location: 'Kantin Lantai Dasar Gedung B',
    date: '2026-06-17',
    photoIndex: 3,
    reporterName: 'Ahmad Fauzi',
    contact: '085699887766',
    status: 'selesai',
    createdAt: '2026-06-17T13:00:00Z',
    chatMessages: [
      { id: 'm3', senderName: 'Budi Hartono', text: 'Bro ini ada di kassa Bu Sumi pedagang soto kantin B. Coba ke sana tanya bu sumi.', createdAt: '2026-06-17T14:10:00Z' },
      { id: 'm4', senderName: 'Ahmad Fauzi', text: 'Wah bener bro! Udah saya ambil tadi dari Bu Sumi. Thank you banget infonya!', createdAt: '2026-06-17T15:30:00Z' }
    ]
  }
];

export const STARTER_FORUM_POSTS: ForumPost[] = [
  {
    id: 'fp1',
    title: 'Nyari Partner Buat Proposal PKM Karsa Cipta (Sistem IoT)',
    content: 'Halo teman-teman! Saya dari Informatika angkatan 2024 (Semester 4), punya ide bikin prototype IoT Monitoring Kualitas Air Hidroponik otomatis berbasis Telegram bot. Saya butuh partner yang paham IoT/Sensor Arduino. Saya sendiri fokus di Backend Node.js dan penulisan proposal. Yuk yang minat PM kita koordinasi!',
    category: 'pkm',
    tags: ['#pkm', '#iot', '#arduino', '#informatika', '#kolaborasi'],
    authorId: 'u11',
    authorName: 'Farhan Maulana',
    isAuthorPlus: false,
    authorGender: 'pria',
    upvotes: 14,
    upvotedByUsers: [],
    createdAt: '2026-06-19T21:30:10.000Z',
    comments: [
      {
        id: 'fc1',
        postId: 'fp1',
        authorId: 'u12',
        authorName: 'Rian Firdaus',
        isAuthorPlus: true,
        content: 'Wah menarik nih bro! Kebetulan saya semester 4 juga dan sering ngoprek ESP32. Boleh nih kita join, saya DM ya.',
        createdAt: '2026-06-19T22:05:00.000Z'
      }
    ]
  },
  {
    id: 'fp2',
    title: '🚀 Belajar OSPF Mutli-area di Cisco Packet Tracer Yuk!',
    content: 'Bagi teman-teman yang ngambil mata kuliah Jaringan Komputer, yuk latihan bareng topologi OSPF multi-area. Saya udah bikin file lab-nya, yang mau join diskusi silakan masuk thread ini. Kita bahas bareng-bareng kendala waktu routing inter-area.',
    category: 'cisco-network',
    tags: ['#cisco', '#network', '#ospf', '#routing', '#jarkom'],
    authorId: 'u15',
    authorName: 'Raka Permana (Premium)',
    isAuthorPlus: true,
    authorGender: 'pria',
    upvotes: 24,
    upvotedByUsers: [],
    createdAt: '2026-06-19T18:15:22.000Z',
    comments: [
      {
        id: 'fc2',
        postId: 'fp2',
        authorId: 'u2',
        authorName: 'Asep Ridwan',
        isAuthorPlus: false,
        content: 'Wah boleh dong download filenya dimana bro Raka? Kebetulan materi ini keluar di kisi-kisi UAS saya.',
        createdAt: '2026-06-19T18:45:00.000Z'
      }
    ]
  },
  {
    id: 'fp3',
    title: 'Ada yang Main bareng (Mabar) Mobile Legends Malam Ini?',
    content: 'Mencari tim mabar Push Rank dari Epic/Legend ke Mythic. Butuh Role Roamer dan goldlaner yang nggak feeding. Main asyik pake Discord / mic aktif di lobi gazebo. Jam 20.00 WIB ngumpul di depan Lawson dulu biar seger.',
    category: 'mabar',
    tags: ['#mabar', '#mobilelegends', '#gaming', '#pushrank', '#lawson'],
    authorId: 'u13',
    authorName: 'Zaki Wardana',
    isAuthorPlus: false,
    authorGender: 'pria',
    upvotes: 6,
    upvotedByUsers: [],
    createdAt: '2026-06-19T14:40:00.000Z',
    comments: []
  },
  {
    id: 'fp4',
    title: 'Tanya Soal Praktikum Basis Data 2: Query Left Outer Join',
    content: 'Permisi min, saya mau tanya barangkali ada yang paham sintaks SQL buat Left Join di PostgreSQL yang nampilin null valuenya juga. Sering dapet error "column reference is ambiguous" padahal udah pake alias tabel. Terima kasih!',
    category: 'bahas-matkul',
    tags: ['#sql', '#postgresql', '#basisdata', '#database', '#tanya'],
    authorId: 'u14',
    authorName: 'Nabila Syakieb',
    isAuthorPlus: true,
    authorGender: 'wanita',
    upvotes: 9,
    upvotedByUsers: [],
    createdAt: '2026-06-18T10:12:00.000Z',
    comments: [
      {
        id: 'fc3',
        postId: 'fp4',
        authorId: 'u16',
        authorName: 'Devi Kartika',
        isAuthorPlus: false,
        content: 'Error itu gara-gara di bagian SELECT atau WHERE kamu panggil nama kolom tanpa nama alias tabelnya mbak Nabila. Coba tulisnya lengkap misal "tabel1.nama_kolom" barangkali membantu!',
        createdAt: '2026-06-18T11:00:00.000Z'
      }
    ]
  }
];

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
  { id: 'mb801', name: 'Aula Gedung Darsono Lantai 8', floor: 8, gedung: 'B', type: 'lainnya', description: 'Aula utama berkapasitas 1000+ orang, tempat penyelenggaraan wisuda, seminar nasional, dan ospek.' }
];
