const express = require('express');
const router = express.Router();
const supabase = require('../lib/supabase');
const authMiddleware = require('../middleware/auth.middleware');
const Event = require('../models/Event');

// ============================================================
// GET /  —  Mengambil semua event (terdekat duluan)
// ============================================================
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*, users(nama, foto_profil)')
      .order('tanggal_mulai', { ascending: true });

    if (error) {
      return res.status(500).json({
        success: false,
        message: 'Gagal mengambil daftar event.',
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Berhasil mengambil daftar event.',
      data,
    });
  } catch (err) {
    console.error('GET /event error:', err);
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server.',
      data: null,
    });
  }
});

// ============================================================
// GET /:id  —  Detail event by ID
// ============================================================
router.get('/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*, users(nama, foto_profil), event_peserta(count)')
      .eq('id', req.params.id)
      .single();

    if (error || !data) {
      return res.status(404).json({
        success: false,
        message: 'Event tidak ditemukan.',
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Berhasil mengambil detail event.',
      data,
    });
  } catch (err) {
    console.error('GET /event/:id error:', err);
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server.',
      data: null,
    });
  }
});

// ============================================================
// POST /  —  Buat event baru (perlu login)
// ============================================================
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { judul, deskripsi, lokasi, tanggal_mulai, tanggal_selesai, kategori } = req.body;

    const validation = Event.validate(req.body);
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: validation.message,
        data: null,
      });
    }

    const { data, error } = await supabase
      .from('events')
      .insert([{
        user_id: req.user.id,
        judul, deskripsi, lokasi, tanggal_mulai, tanggal_selesai, kategori,
      }])
      .select()
      .single();

    if (error) {
      return res.status(400).json({
        success: false,
        message: `Gagal membuat event: ${error.message}`,
        data: null,
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Event berhasil dibuat.',
      data,
    });
  } catch (err) {
    console.error('POST /event error:', err);
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server.',
      data: null,
    });
  }
});

// ============================================================
// POST /:id/daftar  —  Daftar jadi peserta event (perlu login)
// ============================================================
router.post('/:id/daftar', authMiddleware, async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('event_peserta')
      .insert([{ event_id: req.params.id, user_id: req.user.id }])
      .select()
      .single();

    if (error) {
      return res.status(400).json({
        success: false,
        message: `Gagal mendaftar event: ${error.message}`,
        data: null,
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Berhasil mendaftar event.',
      data,
    });
  } catch (err) {
    console.error('POST /event/:id/daftar error:', err);
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server.',
      data: null,
    });
  }
});

module.exports = router;