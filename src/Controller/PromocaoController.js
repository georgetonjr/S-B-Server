const Promocao = require('./../Models/Promocao');

module.exports = {
  async store(req, res){
    const { parceiro,
            produto_id,
            valor,
            maxpcliente,
            date,
            estoque
     } = req.body;

    await Promocao.create({
      parceiro,
      produto_id,
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

  async getPromo(req, res) {
    try {
      const promocao = await Promocao.find({active: true});
      return res.json(promocao).status(200)
    } catch (error) {
      console.error(error);
    }
  },

  async getPromoPartner(req, res) {
    const {_id} = req.headers;
    try {
      const promocao = await Promocao.find({parceiro: id});
      return res.json(promocao).status(200)
    } catch (error) {
      console.error(error);
    }
  },
}