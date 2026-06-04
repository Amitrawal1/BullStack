const { KiteConnect } = require('kiteconnect');

const apiKey = process.env.ZERODHA_API_KEY || 'mockApiKey';
const apiSecret = process.env.ZERODHA_API_SECRET || 'mockApiSecret';

let kiteInstance = null;

try {
  if (apiKey && apiKey !== 'mockApiKey') {
    kiteInstance = new KiteConnect({
      api_key: apiKey
    });
    console.log('\x1b[36m[Zerodha]\x1b[0m KiteConnect SDK initialized successfully.');
  } else {
    console.log('\x1b[33m[Zerodha] Using Zerodha Mock Handshake (Sandboxed mode)\x1b[0m');
  }
} catch (error) {
  console.error('\x1b[31m[Zerodha] Failed to initialize Zerodha Kite SDK:\x1b[0m', error.message);
}

// Emulate Zerodha Instrument List fetch for sandboxed testing
const fetchInstrumentsMock = async () => {
  return [
    { instrument_token: 256265, exchange_token: 1000, tradingsymbol: 'RELIANCE', name: 'RELIANCE INDUSTRIES', last_price: 2460.50, exchange: 'NSE' },
    { instrument_token: 345689, exchange_token: 1001, tradingsymbol: 'TCS', name: 'TATA CONSULTANCY SERVICES', last_price: 3855.20, exchange: 'NSE' },
    { instrument_token: 123456, exchange_token: 1002, tradingsymbol: 'INFY', name: 'INFOSYS LTD', last_price: 1412.10, exchange: 'NSE' },
    { instrument_token: 789012, exchange_token: 1003, tradingsymbol: 'HDFCBANK', name: 'HDFC BANK LTD', last_price: 1548.80, exchange: 'NSE' }
  ];
};

module.exports = {
  getKiteClient: () => {
    return kiteInstance;
  },
  fetchInstruments: async () => {
    if (kiteInstance && process.env.ZERODHA_ACCESS_TOKEN && process.env.ZERODHA_ACCESS_TOKEN !== 'mockAccessToken') {
      kiteInstance.setAccessToken(process.env.ZERODHA_ACCESS_TOKEN);
      return await kiteInstance.getInstruments(['NSE']);
    } else {
      // Fallback sandbox instruments list
      return await fetchInstrumentsMock();
    }
  }
};
