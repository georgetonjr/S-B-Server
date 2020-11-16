const mongoose = require('mongoose')

const VoucherSchema = new mongoose.Schema({
  produto: {
    type: Array
  },
  
  voucherNumber: {
    type: Number,
    required: true,
  },

  cliente:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente'
  },
  parceiro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Parceiro'
  },

  active:{
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('Voucher', VoucherSchema);