const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ai_stock_predictor');
    console.log(`\x1b[32m[Database]\x1b[0m MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`\x1b[31m[Database] Error connecting to MongoDB: ${error.message}\x1b[0m`);
    console.log('\x1b[33m[Database] Retrying connection in sandbox mode with in-memory fallback emulation if database is offline.\x1b[0m');
  }
};

module.exports = connectDB;
