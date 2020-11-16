const Voucher = require('./../Models/Voucher');

module.exports = {
  async store(req, res){
    const { parceiro, cliente, produto } = req.body;
    await Voucher.create({
      parceiro,
      produto,
      cliente,
    })
    .then(response => {res.status(200).json({response.id})})
    .catch(error => {return res.status(400).json({ error })})
  },
}