const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Standard Express Middlewares
app.use(cors());
app.use(express.json());

// Logger middleware for high-fidelity terminal inspection
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`\x1b[36m[Server]\x1b[0m ${req.method} ${req.originalUrl} - ${res.statusCode} (${duration}ms)`);
  });
  next();
});

// Mount Routing layers
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/stocks', require('./routes/stockRoutes'));
app.use('/api/ai', require('./routes/aiRoutes'));

// Root Ping/Health Check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    timestamp: new Date(),
    status: 'ACTIVE',
    services: {
      mongodb: 'CONNECTED',
      zerodha: 'ACTIVE',
      ai_engine: 'ONLINE'
    }
  });
});

// Standard Error Handler
app.use((err, req, res, next) => {
  console.error('\x1b[31m[Server Error]\x1b[0m', err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`\n\x1b[32m==================================================`);
  console.log(`📡 BullStack API Server running on port: ${PORT}`);
  console.log(`🛡️ Mode: Sandboxed Development`);
  console.log(`🚀 API endpoints live at: http://localhost:${PORT}/api`);
  console.log(`==================================================\x1b[0m\n`);
});

// Graceful shut down hook
process.on('unhandledRejection', (err, promise) => {
  console.error(`\x1b[31m[Unhandled Rejection]\x1b[0m Error: ${err.message}`);
  server.close(() => process.exit(1));
});
