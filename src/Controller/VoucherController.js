const Voucher = require('./../Models/Voucher');

module.exports = {
  async store(req, res){
    console.log(req.body)
    const { parceiro, cliente, produto } = req.body;
    Voucher.create({
      parceiro,
      produto,
      cliente,
      voucherNumber: Math.random(),
    })
    .then(e => console.log(e))
    .catch(err => console.error(err))
  },
}