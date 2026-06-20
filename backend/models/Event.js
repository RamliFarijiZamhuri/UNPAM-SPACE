class Event {
  /**
   * Validasi data input pembuatan event baru
   * @param {Object} data - Input body dari request
   * @returns {Object} { isValid: boolean, message: string|null }
   */
  static validate(data) {
    const { judul, tanggal_mulai, tanggal_selesai, lokasi } = data;

    if (!judul || judul.trim().length === 0) {
      return {
        isValid: false,
        message: 'Judul event wajib diisi.'
      };
    }

    if (!tanggal_mulai) {
      return {
        isValid: false,
        message: 'Tanggal mulai event wajib diisi.'
      };
    }

    const start = new Date(tanggal_mulai);
    if (isNaN(start.getTime())) {
      return {
        isValid: false,
        message: 'Format tanggal_mulai tidak valid.'
      };
    }

    if (tanggal_selesai) {
      const end = new Date(tanggal_selesai);
      if (isNaN(end.getTime())) {
        return {
          isValid: false,
          message: 'Format tanggal_selesai tidak valid.'
        };
      }
      if (end < start) {
        return {
          isValid: false,
          message: 'Tanggal selesai tidak boleh mendahului tanggal mulai.'
        };
      }
    }

    if (!lokasi || lokasi.trim().length === 0) {
      return {
        isValid: false,
        message: 'Lokasi event wajib diisi.'
      };
    }

    return { isValid: true, message: null };
  }
}

module.exports = Event;
