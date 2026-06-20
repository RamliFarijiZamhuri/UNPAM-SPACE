class User {
  /**
   * Validasi data registrasi user
   * @param {Object} data - Input body dari request
   * @returns {Object} { isValid: boolean, message: string|null }
   */
  static validateRegister(data) {
    const { nim, nama, email, password } = data;

    if (!nim || nim.trim().length < 5) {
      return {
        isValid: false,
        message: 'NIM tidak valid. Minimal harus terdiri dari 5 karakter.'
      };
    }

    if (!nama || nama.trim().length < 2) {
      return {
        isValid: false,
        message: 'Nama tidak valid. Minimal harus terdiri dari 2 karakter.'
      };
    }

    if (!email || !this.isValidEmail(email)) {
      return {
        isValid: false,
        message: 'Format email tidak valid.'
      };
    }

    if (!password || password.length < 6) {
      return {
        isValid: false,
        message: 'Password tidak valid. Password harus memiliki minimal 6 karakter.'
      };
    }

    return { isValid: true, message: null };
  }

  /**
   * Helper check email format
   * @param {string} email 
   * @returns {boolean}
   */
  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Hapus field sensitif seperti password_hash dari object user
   * @param {Object} user 
   * @returns {Object}
   */
  static sanitize(user) {
    if (!user) return null;
    const { password_hash, ...safeUser } = user;
    return safeUser;
  }
}

module.exports = User;
