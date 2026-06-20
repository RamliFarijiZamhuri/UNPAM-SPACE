const express = require('express');
const router = express.Router();
const supabase = require('../lib/supabase');
const authMiddleware = require('../middleware/auth.middleware');
const Subscription = require('../models/Subscription');

// ============================================================
// GET /status — Periksa status subscription user aktif
// ============================================================
router.get('/status', authMiddleware, async (req, res) => {
  try {
    const { data: user, error } = await supabase
      .from('users')
      .select('role')
      .eq('id', req.user.id)
      .maybeSingle();

    if (error || !user) {
      return res.status(404).json({
        success: false,
        message: 'Data user tidak ditemukan.',
        data: null,
      });
    }

    const isPremium = user.role === 'premium' || user.role === 'admin';
    const features = Subscription.getFeatures(user.role);

    return res.status(200).json({
      success: true,
      message: 'Berhasil memeriksa status langganan.',
      data: {
        is_premium: isPremium,
        role: user.role,
        features: features,
      },
    });
  } catch (err) {
    console.error('GET /subscription/status error:', err);
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server.',
      data: null,
    });
  }
});

// ============================================================
// POST /subscribe — Aktifkan langganan (upgrade ke premium)
// ============================================================
router.post('/subscribe', authMiddleware, async (req, res) => {
  try {
    const { data: user, error } = await supabase
      .from('users')
      .update({ role: 'premium' })
      .eq('id', req.user.id)
      .select('id, nim, nama, email, role')
      .single();

    if (error) {
      console.error('Subscribe update error:', error);
      return res.status(400).json({
        success: false,
        message: `Gagal mengaktifkan langganan: ${error.message}`,
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Selamat! Langganan UNPAM Space Plus Anda berhasil diaktifkan.',
      data: {
        is_premium: true,
        user,
      },
    });
  } catch (err) {
    console.error('POST /subscription/subscribe error:', err);
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server.',
      data: null,
    });
  }
});

// ============================================================
// POST /unsubscribe — Batalkan langganan (kembali ke student)
// ============================================================
router.post('/unsubscribe', authMiddleware, async (req, res) => {
  try {
    const { data: user, error } = await supabase
      .from('users')
      .update({ role: 'student' })
      .eq('id', req.user.id)
      .select('id, nim, nama, email, role')
      .single();

    if (error) {
      console.error('Unsubscribe update error:', error);
      return res.status(400).json({
        success: false,
        message: `Gagal membatalkan langganan: ${error.message}`,
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Langganan UNPAM Space Plus berhasil dibatalkan.',
      data: {
        is_premium: false,
        user,
      },
    });
  } catch (err) {
    console.error('POST /subscription/unsubscribe error:', err);
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server.',
      data: null,
    });
  }
});

module.exports = router;
