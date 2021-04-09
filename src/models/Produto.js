const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../database/database.js');

const Cliente = sequelize.define("produto", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  nome: {
      allowNull: false,
      type: DataTypes.STRING(100),
      validate: {
          len: [3, 100]
      }
  },
  descricao: {
      allowNull: false,
      type: DataTypes.STRING(255),
      validate: {
          len: [1, 255]
      }
  },
  preco: {
      allowNull: false,
      type: DataTypes.FLOAT
  },
  qtd_estoque: {
      allowNull: false,
      type: DataTypes.INTEGER,
  }
});

module.exports = Cliente;