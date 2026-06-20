class Subscription {
  // Konstanta peran (Role/Tier) yang didukung oleh sistem
  static PLANS = {
    STUDENT: 'student',
    PREMIUM: 'premium',
    ADMIN: 'admin'
  };

  /**
   * Mengambil fitur/keuntungan berdasarkan tingkat peran user
   * @param {string} role - Peran/Role user ('student', 'premium', 'admin')
   * @returns {Object}
   */
  static getFeatures(role) {
    switch (role) {
      case this.PLANS.ADMIN:
        return {
          planName: 'Administrator',
          maxListingLimit: Infinity,
          canBoost: true,
          badgeColor: 'red',
          features: [
            'Akses penuh ke semua listing',
            'Manajemen konten & laporan pengguna',
            'Unlimited listing kos & marketplace',
            'Fitur Premium Boost Tanpa Batas',
            'Bebas Iklan'
          ]
        };
      case this.PLANS.PREMIUM:
        return {
          planName: 'UNPAM Space Plus',
          maxListingLimit: 50,
          canBoost: true,
          badgeColor: 'gold',
          features: [
            'Akses prioritas pada pencarian kos & marketplace',
            'Hingga 50 listing kos/marketplace aktif',
            'Fitur Premium Boost (pin listing teratas)',
            'Bebas Iklan',
            'Badge "Plus" eksklusif di profil'
          ]
        };
      case this.PLANS.STUDENT:
      default:
        return {
          planName: 'Free Student Tier',
          maxListingLimit: 3,
          canBoost: false,
          badgeColor: 'gray',
          features: [
            'Hingga 3 listing kos/marketplace aktif',
            'Akses ke forum diskusi mahasiswa',
            'Akses pencarian normal'
          ]
        };
    }
  }
}

module.exports = Subscription;
