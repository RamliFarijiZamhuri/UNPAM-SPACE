const express = require('express');
const router = express.Router();
const supabase = require('../lib/supabase');
const authMiddleware = require('../middleware/auth.middleware');

// In-memory cache untuk mencatat listing yang sedang di-boost
const boostedKosListings = new Set();
const boostedMarketplaceListings = new Set();

// ============================================================
// GET /active — Mengambil daftar listing ID yang di-boost
// ============================================================
router.get('/active', async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: 'Berhasil mengambil daftar listing yang di-boost.',
      data: {
        kos: Array.from(boostedKosListings),
        marketplace: Array.from(boostedMarketplaceListings),
      },
    });
  } catch (err) {
    console.error('GET /boost/active error:', err);
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server.',
      data: null,
    });
  }
});

// ============================================================
// POST /kos/:id — Boost Listing Kos (Perlu Login)
// ============================================================
router.post('/kos/:id', authMiddleware, async (req, res) => {
  try {
    const listingId = req.params.id;

    // Verifikasi apakah kos listing tersebut memang ada
    const { data: listing, error } = await supabase
      .from('kos_listings')
      .select('id, user_id')
      .eq('id', listingId)
      .maybeSingle();

    if (error) {
      console.error('Check kos listing error:', error);
      return res.status(500).json({
        success: false,
        message: 'Gagal memverifikasi listing kos.',
        data: null,
      });
    }

    if (!listing) {
      return res.status(404).json({
        success: false,
        message: 'Listing kos tidak ditemukan.',
        data: null,
      });
    }

    // Catat ke in-memory store
    boostedKosListings.add(listingId);

    return res.status(200).json({
      success: true,
      message: 'Listing kos berhasil di-boost!',
      data: {
        id: listingId,
        boosted: true,
      },
    });
  } catch (err) {
    console.error('POST /boost/kos/:id error:', err);
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server.',
      data: null,
    });
  }
});

// ============================================================
// POST /marketplace/:id — Boost Listing Marketplace (Perlu Login)
// ============================================================
router.post('/marketplace/:id', authMiddleware, async (req, res) => {
  try {
    const listingId = req.params.id;

    // Verifikasi apakah marketplace listing tersebut memang ada
    const { data: listing, error } = await supabase
      .from('marketplace_listings')
      .select('id, user_id')
      .eq('id', listingId)
      .maybeSingle();

    if (error) {
      console.error('Check marketplace listing error:', error);
      return res.status(500).json({
        success: false,
        message: 'Gagal memverifikasi listing marketplace.',
        data: null,
      });
    }

    if (!listing) {
      return res.status(404).json({
        success: false,
        message: 'Listing marketplace tidak ditemukan.',
        data: null,
      });
    }

    // Perbarui status listing di database menjadi 'boosted'
    const { data, error: updateError } = await supabase
      .from('marketplace_listings')
      .update({ status: 'boosted' })
      .eq('id', listingId)
      .select()
      .single();

    if (updateError) {
      console.error('Update status to boosted error:', updateError);
      // Tetap lanjutkan in-memory boost jika gagal update db
    }

    // Catat ke in-memory store
    boostedMarketplaceListings.add(listingId);

    return res.status(200).json({
      success: true,
      message: 'Listing marketplace berhasil di-boost!',
      data: data || { id: listingId, status: 'boosted' },
    });
  } catch (err) {
    console.error('POST /boost/marketplace/:id error:', err);
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server.',
      data: null,
    });
  }
});

module.exports = router;
