const mongoose = require('mongoose')

const VoucherSchema = new mongoose.Schema({
  produto: {
    produto: String,
    preco: String,
  },
  Cliente:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente'
  },
  parceiro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Parceiro'
  },
});

module.exports = mongoose.model('Voucher', VoucherSchema);