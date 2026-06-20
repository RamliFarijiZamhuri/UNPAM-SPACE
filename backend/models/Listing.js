class Listing {
  /**
   * Validasi data input pembuatan Kos Listing baru
   * @param {Object} data - Input body dari request
   * @returns {Object} { isValid: boolean, message: string|null }
   */
  static validateKos(data) {
    const { nama_kos, alamat, harga_bulanan, kontak } = data;

    if (!nama_kos || nama_kos.trim().length === 0) {
      return {
        isValid: false,
        message: 'Nama kos wajib diisi.'
      };
    }

    if (!alamat || alamat.trim().length === 0) {
      return {
        isValid: false,
        message: 'Alamat kos wajib diisi.'
      };
    }

    if (harga_bulanan === undefined || harga_bulanan === null) {
      return {
        isValid: false,
        message: 'Harga bulanan wajib diisi.'
      };
    }

    const price = parseInt(harga_bulanan, 10);
    if (isNaN(price) || price <= 0) {
      return {
        isValid: false,
        message: 'Harga bulanan harus berupa angka positif.'
      };
    }

    if (!kontak || kontak.trim().length === 0) {
      return {
        isValid: false,
        message: 'Kontak pemilik/pengelola wajib diisi.'
      };
    }

    return { isValid: true, message: null };
  }

  /**
   * Validasi data input pembuatan Marketplace Listing baru
   * @param {Object} data - Input body dari request
   * @returns {Object} { isValid: boolean, message: string|null }
   */
  static validateMarketplace(data) {
    const { judul, harga, kondisi } = data;

    if (!judul || judul.trim().length === 0) {
      return {
        isValid: false,
        message: 'Judul barang wajib diisi.'
      };
    }

    if (harga === undefined || harga === null) {
      return {
        isValid: false,
        message: 'Harga barang wajib diisi.'
      };
    }

    const price = parseInt(harga, 10);
    if (isNaN(price) || price < 0) {
      return {
        isValid: false,
        message: 'Harga barang harus berupa angka non-negatif.'
      };
    }

    if (kondisi && !['baru', 'bekas', 'new', 'used'].includes(kondisi.toLowerCase())) {
      return {
        isValid: false,
        message: 'Kondisi barang harus "baru" atau "bekas".'
      };
    }

    return { isValid: true, message: null };
  }
}

module.exports = Listing;
