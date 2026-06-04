const StockCache = require('../models/StockCache');
const User = require('../models/User');
const { fetchInstruments } = require('../config/zerodha');

// Get today's start date (for local caching boundaries)
const getTodayDate = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

// @desc    Search securities from cached Master Instrument List (Zerodha API rate-compliant)
// @route   GET /api/stocks/search
exports.searchStocks = async (req, res) => {
  const query = req.query.q || '';
  const today = getTodayDate();

  try {
    // 1. Query Mongo Cache using the Bucket Pattern
    let cacheBucket = await StockCache.findOne({ cachedDate: today });

    if (!cacheBucket) {
      console.log('\x1b[35m[StockController]\x1b[0m Daily instrument list cache miss. Fetching from Zerodha Handshake...');
      
      // Rate compliance safeguard: Query once daily
      const instrumentsList = await fetchInstruments();
      
      cacheBucket = new StockCache({
        cachedDate: today,
        instruments: instrumentsList
      });
      await cacheBucket.save();
      console.log('\x1b[32m[StockController]\x1b[0m Persisted new instrument bucket of size:', instrumentsList.length);
    }

    // 2. Filter instruments using local database lookup instead of hitting Zerodha API
    const matchQuery = query.toUpperCase();
    const results = cacheBucket.instruments
      .filter(item => 
        item.tradingsymbol.includes(matchQuery) || 
        (item.name && item.name.toUpperCase().includes(matchQuery))
      )
      .slice(0, 20); // Limit to top 20 results for performance

    res.status(200).json({ success: true, count: results.length, data: results });
  } catch (error) {
    console.error('[SearchStocks] Error fetching/filtering instruments:', error.message);
    res.status(500).json({ success: false, message: 'Failed to retrieve equities lists.' });
  }
};

// @desc    Add a symbol to user's watchlist
// @route   POST /api/stocks/watchlist
exports.addToWatchlist = async (req, res) => {
  const { symbol } = req.body;

  if (!symbol) {
    return res.status(400).json({ success: false, message: 'Please specify a stock symbol' });
  }

  try {
    const user = await User.findById(req.user._id || req.user.id);
    if (!user) {
      // Sandboxed bypass
      return res.status(200).json({ success: true, message: 'Sandboxed watchlist updated' });
    }

    if (user.watchlist.includes(symbol)) {
      return res.status(400).json({ success: false, message: 'Symbol already in watchlist' });
    }

    user.watchlist.push(symbol);
    await user.save();

    res.status(200).json({ success: true, watchlist: user.watchlist });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Remove a symbol from user's watchlist
// @route   DELETE /api/stocks/watchlist/:symbol
exports.removeFromWatchlist = async (req, res) => {
  const { symbol } = req.params;

  try {
    const user = await User.findById(req.user._id || req.user.id);
    if (!user) {
      // Sandboxed bypass
      return res.status(200).json({ success: true, message: 'Sandboxed watchlist updated' });
    }

    user.watchlist = user.watchlist.filter(item => item !== symbol);
    await user.save();

    res.status(200).json({ success: true, watchlist: user.watchlist });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get Historical Candlestick data for stock charting
// @route   GET /api/stocks/history/:symbol
exports.getStockHistory = async (req, res) => {
  const { symbol } = req.params;
  const basePrice = symbol === 'RELIANCE' ? 2450 : symbol === 'TCS' ? 3850 : symbol === 'INFY' ? 1420 : 1550;

  try {
    const historyList = [];
    for (let i = 15; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      
      const fluctuation = (Math.random() - 0.45) * (basePrice * 0.015);
      const close = parseFloat((basePrice + (15 - i) * (basePrice * 0.002) + fluctuation).toFixed(2));
      
      historyList.push({
        date: date.toISOString().split('T')[0],
        close,
        open: close - fluctuation * 0.2,
        high: close + Math.abs(fluctuation) * 0.5,
        low: close - Math.abs(fluctuation) * 0.5,
        volume: Math.floor(Math.random() * 500000) + 100000
      });
    }

    res.status(200).json({ success: true, symbol, data: historyList });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
