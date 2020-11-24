const mongoose = require('mongoose')

const ParceiroSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },

  cnpj: {
    type: String,
    required: true,
    unique: true,
  },

  telefone: {
    type: String,
    required:true,
    unique: true,
  }, 

  celular: {
    type: String,
    required:true,
    unique: true,
  },  

  Razao: {
    type: String,
    required:true,
    unique: true,
  },  
  
  celular: {
    type: String,
    required:true,
    unique: true,
  },

  cep: {
    type: String,
    required:true,
  }, 

  complemento: {
    type: String,
  },  

  endereco: {
    type: String,
    required: true
  },  

  numero: {
    type: String,
    required: true
  }, 

  cidade: {
    type: String,
    required:true,
  },  

  estado: {
    type: String,
    required:true,
  },  

  bairro: {
    type: String,
    required:true,
  }, 

  email: {
    type: String,
    required: true,
    loadClass: true,
    unique: true,
  },

  senha: {
    type: String,
    required: true,
    select: false,
  },

  plano:{
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model('Parceiro', ParceiroSchema);