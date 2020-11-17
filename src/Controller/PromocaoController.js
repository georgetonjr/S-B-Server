const Promocao = require('./../Models/Voucher');

module.exports = {
  async store(req, res){
    const { parceiro,
            produtoid,
            valor,
            maxpcliente,
            date,
            estoque
     } = req.body;

    await Promocao.create({
      parceiro,
      produtoid,
      valor,
      maxpcliente,
      date,
      estoque
    })
    .then(promocao => {res.status(200).json(promocao)})
    .catch(error => {return res.status(400).json({ error })})
  },
  async statusPromocao (req, res){
    const {_id} = req.headers;
    try {
      const promocao = await Promocao.findOneAndUpdate(_id,{ active: false });
      console.log(promocao); 
      return res.status(200).json(promocao)
    } catch (error) {
      console.error(error);
    }
  },
}