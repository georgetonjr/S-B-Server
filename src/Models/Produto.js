const mongoose = require('mongoose')

const ProdutoSchema = new mongoose.Schema({
  img:{
    type: String 
  },

  codigo: {
    type: String,
    required: true,
  },

  valor: {
    type: String,
    required: true,
  },

  fabricante: {
    type: String,
    required:true,
  },  

  quantestoque: {
    type: String,
    required: true,
  },
  parceiro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Parceiro'
  },
});

module.exports = mongoose.model('Produto', ProdutoSchema);