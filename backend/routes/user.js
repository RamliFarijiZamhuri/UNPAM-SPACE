const express = require('express');
const router = express.Router();
const supabase = require('../lib/supabase');
const authMiddleware = require('../middleware/auth.middleware');

// ============================================================
// PUT /upgrade-verification — Upgrade Verification Level
// ============================================================
router.put('/upgrade-verification', authMiddleware, async (req, res) => {
  try {
    const { targetLevel } = req.body;

    if (![1, 2, 3].includes(targetLevel)) {
      return res.status(400).json({
        success: false,
        message: 'Level verifikasi tidak valid.',
        data: null,
      });
    }

    // In a real app, you would upload files to storage and wait for admin approval.
    // For this MVP simulation, we automatically grant the target level.

    const { data: user, error: updateError } = await supabase
      .from('users')
      .update({ verification_level: targetLevel })
      .eq('id', req.user.id)
      .select('id, verification_level')
      .single();

    if (updateError) {
      console.error('Upgrade verification error:', updateError);
      return res.status(500).json({
        success: false,
        message: 'Gagal memproses upgrade verifikasi.',
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      message: `Berhasil naik ke Level Verifikasi ${targetLevel}.`,
      data: user,
    });
  } catch (err) {
    console.error('PUT /user/upgrade-verification error:', err);
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server.',
      data: null,
    });
  }
});

// ============================================================
// PUT /upgrade-space-plus — Upgrade to Space+
// ============================================================
router.put('/upgrade-space-plus', authMiddleware, async (req, res) => {
  try {
    const { durationMonths } = req.body || { durationMonths: 1 };
    
    // Calculate expiry date
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + (durationMonths || 1));

    const { data: user, error: updateError } = await supabase
      .from('users')
      .update({ 
        is_plus_subscriber: true,
        plus_expires_at: futureDate.toISOString()
      })
      .eq('id', req.user.id)
      .select('id, is_plus_subscriber, plus_expires_at')
      .single();

    if (updateError) {
      console.error('Upgrade Space+ error:', updateError);
      return res.status(500).json({
        success: false,
        message: 'Gagal memproses pembayaran Space+.',
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Layanan UNPAM SPACE+ Berhasil diaktifkan!',
      data: user,
    });
  } catch (err) {
    console.error('PUT /user/upgrade-space-plus error:', err);
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server.',
      data: null,
    });
  }
});

module.exports = router;
