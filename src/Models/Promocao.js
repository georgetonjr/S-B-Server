const mongoose = require('mongoose')

const PromocaoSchema = new mongoose.Schema({
  active: {
    type: Boolean,
    default: true,
  },
  produto_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produto'
  },

  valor: {
    type: Number,
  },
  
  estoque: {
    type: Number,
  },

  maxpcliente: {
    type: Number,
  },

  parceiro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Parceiro'
  },

  active:{
    type: Boolean,
    default: true,
  },
  
  validade: {
    type: Date,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Promocao', PromocaoSchema);