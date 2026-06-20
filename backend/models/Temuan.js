class Temuan {
  /**
   * Validasi data laporan barang temuan / hilang
   * @param {Object} data - Input body dari request
   * @returns {Object} { isValid: boolean, message: string|null }
   */
  static validate(data) {
    const { type, title, description, location, contact } = data;

    if (!type || !['hilang', 'temuan'].includes(type)) {
      return {
        isValid: false,
        message: 'Tipe laporan tidak valid. Harus "hilang" atau "temuan".'
      };
    }

    if (!title || title.trim().length < 3) {
      return {
        isValid: false,
        message: 'Judul laporan minimal harus 3 karakter.'
      };
    }

    if (!description || description.trim().length < 10) {
      return {
        isValid: false,
        message: 'Deskripsi detail laporan minimal harus 10 karakter.'
      };
    }

    if (!location || location.trim().length < 3) {
      return {
        isValid: false,
        message: 'Lokasi kejadian harus diisi secara jelas.'
      };
    }

    if (!contact || contact.trim().length < 5) {
      return {
        isValid: false,
        message: 'Informasi kontak yang bisa dihubungi harus disertakan.'
      };
    }

    return { isValid: true, message: null };
  }
}

module.exports = Temuan;
