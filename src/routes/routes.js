const express = require('express');
const ProdutoController = require('../controllers/produtoController');
const router = express.Router();

router.post('/produto', ProdutoController.Insert);

module.exports = router;