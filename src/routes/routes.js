const express = require('express');
const ProdutoController = require('../controllers/produtoController');
const router = express.Router();

router.post('/produto', ProdutoController.Insert);
router.get('/produto', ProdutoController.SelectAll);
// router.put('/produto', ProdutoController.Update);

module.exports = router;