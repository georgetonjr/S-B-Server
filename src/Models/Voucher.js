const mongoose = require('mongoose')

const VoucherSchema = new mongoose.Schema({
  produto: {
    type: Object
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

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Voucher', VoucherSchema);