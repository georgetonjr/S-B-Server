const Parceiro = require('./../Models/Parceiro');
const md5 = require('md5');

module.exports = {
  async store(req, res){
    try{
      const { 
        Razao,
        nome,
        cnpj,
        email,
        telefone,
        celular,
        cep,
        endereco,
        complemento,
        numero,
        bairro,
        cidade,
        estado,
        senha,        
      } = req.body

      if (await Parceiro.findOne({ email })){
        return res.status(400).send({error: 'user already exists'});
      }

      if (await Parceiro.findOne({ cnpj })){
        return res.status(400).send({error: 'user already exists'});
      }

      const parceiro = await Parceiro.create({
        Razao,
        nome,
        cnpj,
        email,
        telefone,
        celular,
        cep,
        endereco,
        complemento,
        numero,
        bairro,
        cidade,
        estado,
        senha: md5(senha)
      });

      parceiro.senha = undefined;

      return res.send({ parceiro }).status(200);
    }
    catch{
      return res.status(400).send({error: 'Registration failed!!'})
    }
  },
}