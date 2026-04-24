const express = require('express');
const router = express.Router();
const { getProfile, getHistory } = require('../controllers/leetcode.controller');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

router.get('/profile', getProfile);
router.get('/history', getHistory);

module.exports = router;