const mongoose = require('mongoose');

const InstrumentSchema = new mongoose.Schema({
  instrument_token: Number,
  exchange_token: Number,
  tradingsymbol: {
    type: String,
    index: true
  },
  name: String,
  last_price: Number,
  exchange: String
});

const StockCacheSchema = new mongoose.Schema({
  cachedDate: {
    type: Date,
    required: true,
    unique: true,
    index: true
  },
  instruments: [InstrumentSchema],
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('StockCache', StockCacheSchema);
