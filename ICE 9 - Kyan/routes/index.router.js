const express = require('express');
const router = express.Router();
const { homeView, aboutView } = require('../controllers/index.controller');

router.get('/', homeView);
router.get('/about', aboutView);

module.exports = router;