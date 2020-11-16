const Voucher = require('./../Models/Voucher');

module.exports = {
  async store(req, res){
    const { parceiro, cliente, produto } = req.body;
    await Voucher.create({
      parceiro,
      produto,
      cliente,
    })
    .then(voucher => {res.status(200).json(voucher)})
    .catch(error => {return res.status(400).json({ error })})
  },
}