const express = require('express');
const malaController = require('../controllers/malaController')
const router = express.Router();

router.post('/malaStamp', malaController.createPost);
router.get('/', malaController.getMala);


module.exports = router;