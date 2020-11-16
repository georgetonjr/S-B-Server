const Voucher = require('./../Models/Voucher');

module.exports = {
  async store(req, res){
    const { parceiro, cliente, produto } = req.body;
    await Voucher.create({
      parceiro,
      produto,
      cliente,
      voucherNumber: Math.random(),
    })
    .then(e => console.log(e))
    .catch(err => console.error(err))
  },
}