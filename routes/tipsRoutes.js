const express = require('express');
const router = express.Router();
const { getTips } = require('../controllers/tipsController');

router.route('/').get(getTips);

module.exports = router;
