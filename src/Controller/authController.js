const Cliente = require('./../Models/Cliente');
const Parceiro = require('../Models/Parceiro');
const md5 = require('md5');

module.exports = {
  async CustomerLogin(req, res){

    const { cpf, senha } = req.body;
    console.log(req.body)

    const user = await Cliente.findOne({ cpf }).select('+senha');
    console.log(user)

    if (!user)
      return res.status(400).json({ error: 'User not found'});

    if(md5(senha) !== user.senha)
      return res.status(401).json({error: 'Invalid Password'});
    
    res.json(user);
    
  },

  async PartnerLogin(req, res){
    const { cnpj, senha } = req.body;
    console.log(req.body)
    console.log(md5('12345678'))

    const user = await Parceiro.findOne({ cnpj }).select('+senha');
    console.log(user)
    if (!user)
      return res.status(400).json({ error: 'User not found'});

    if(md5(senha) !== user.senha)
      return res.status(401).json({error: 'Invalid Password'});
    
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