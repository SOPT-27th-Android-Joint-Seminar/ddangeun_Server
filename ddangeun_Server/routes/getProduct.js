const express = require('express');
const getProductController = require('../controllers/getProductController')
const router = express.Router();


router.get('/', getProductController.getProductDetail);

module.exports = router;