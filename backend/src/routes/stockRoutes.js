const express = require('express');
const router = express.Router();
const { searchStocks, addToWatchlist, removeFromWatchlist, getStockHistory } = require('../controllers/stockController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/search', protect, searchStocks);
router.post('/watchlist', protect, addToWatchlist);
router.delete('/watchlist/:symbol', protect, removeFromWatchlist);
router.get('/history/:symbol', protect, getStockHistory);

module.exports = router;
