require('dotenv').config();
const jwt = require('jsonwebtoken');


/**
 * Auth Middleware — Custom JWT Validation
 * 
 * Mengambil token dari header "Authorization: Bearer <token>",
 * memvalidasi signature menggunakan JWT_SECRET,
 * lalu menyimpan payload user ke req.user.
 * 
 * Payload yang diekstrak: { id, nim, nama, role }
 */
const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Akses ditolak. Token tidak ditemukan.',
        data: null,
      });
    }

    const token = authHeader.split(' ')[1];

    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not defined in environment variables');
      return res.status(500).json({
        success: false,
        message: 'Kesalahan konfigurasi server.',
        data: null,
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Simpan payload user ke request object
    req.user = {
      id: decoded.id,
      nim: decoded.nim,
      nama: decoded.nama,
      role: decoded.role,
    };

    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token sudah kedaluwarsa. Silakan login kembali.',
        data: null,
      });
    }

    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        message: 'Token tidak valid.',
        data: null,
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Gagal memvalidasi token.',
      data: null,
    });
  }
};

module.exports = authMiddleware;
