const Produto = require('../models/Produto');
const status = require('http-status');

exports.Insert = (req, res, next) => {
  const nome = req.body.nome;
  const descricao = req.body.descricao;
  const preco = req.body.preco;
  const qtd_estoque = req.body.qtd_estoque;

  Produto.create({
    nome: nome,
    descricao: descricao,
    preco: preco,
    qtd_estoque: qtd_estoque
  })
  .then(produto => {
    if(produto) {
      res.status(status.OK).send(produto);
    } else {
      res.status(status.NOT_FOUND).send();
    }
  })
  .catch(error => next(error));
};