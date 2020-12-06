const express = require('express');
const getProductController = require('../controllers/getProductController')
const router = express.Router();


router.get('/', getProductController.getProductDetail);
router.get('/image', getProductController.getProductImage);

module.exports = router;