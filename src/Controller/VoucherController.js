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
  async getVoucherCustomer(req, res) {
    const {_id} = req.headers;
    try {
      const voucher = await Voucher.find({cliente: _id});
      return res.status(200).json(voucher)
    } catch (error) {
      console.error(error)
    }
  },
  
  async getVoucherPartner(req, res) {
    const {_id} = req.headers;
    try {
      const voucher = await Voucher.find({parceiro: _id});
      return res.status(200).json(voucher)
    } catch (error) {
      console.error(error)
    }
  },

  async getVoucher(req, res) {
    const {_id} = req.headers;
    try {
      const voucher = await Voucher.findOne({ _id});
      return res.status(200).json(voucher)
    } catch (error) {
      console.error(error)
    }
  },

  async validarVoucher (req, res){
    const {_id} = req.headers;
    try {
      const voucher = await Voucher.findByIdAndUpdate(_id,{$set:{active: false}});
      console.log(voucher);
      return res.status(200).json(voucher)
    } catch (error) {
      console.error(error);
    }
  },
}