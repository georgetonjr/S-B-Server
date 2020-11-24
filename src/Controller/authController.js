const Cliente = require('./../Models/Cliente');
const Parceiro = require('../Models/Parceiro');

module.exports = {
  async CustomerLogin(req, res){

    const { cpf, senha } = req.body;
    console.log(req.body)

    const user = await Cliente.findOne({ cpf }).select('+senha');
    console.log(user)

    if (!user)
      return res.status(400).send({ error: 'User not found'});

    if(senha !== user.senha)
      return res.status(401).send({error: 'Invalid Password'});
    
    res.json(user);
    
  },

  async PartnerLogin(req, res){
    const { cnpj, senha } = req.body;
    console.log(req.body)

    const user = await Parceiro.findOne({ cnpj }).select('+senha:');
    console.log(user)
    if (!user)
      return res.status(400).send({ error: 'User not found'});

    if(senha !== user.senha)
      return res.status(401).send({error: 'Invalid Password'});
    
    res.json(user);
    
  },

  async show(req, res){
    const cliente = await Cliente.find();
    return res.send(cliente);
  },

  async showP(req, res){
    const parceiro = await Parceiro.find();
    return res.send(parceiro);
  },
  async deluser( req, res ){
    const id = req.body.id
    await Parceiro.findOneAndDelete({ id });
    res.status(200).send({id});
  },

}