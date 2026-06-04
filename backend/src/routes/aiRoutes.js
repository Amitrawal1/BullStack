const express = require('express');
const router = express.Router();
const { getAIForecast } = require('../controllers/aiController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/predict', protect, getAIForecast);

module.exports = router;
