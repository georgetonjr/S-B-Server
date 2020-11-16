const Voucher = require('./../Models/Voucher');

module.exports = {
  async store(req, res){
    console.log(req.body)
    const {} = req.body;
    Voucher.create({

    })
    .then(e => console.log(e))
    .catch(err => console.error(err))
  },
}