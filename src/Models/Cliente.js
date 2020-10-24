const mongoose = require('mongoose')

const ClienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },

  cpf: {
    type: String,
    required: true,
    unique: true,
  },

  telefone: {
    type: String,
    required:true,
    unique: true,
  },  

  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
    select: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

});


module.exports = mongoose.model('Cliente', ClienteSchema);