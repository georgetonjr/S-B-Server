const Cliente = require('./../Models/Cliente');
const md5 = require('md5');

module.exports = {
  //Customer Register
  async store(req, res){
    try{
      const { nome, cpf, email, senha, telefone } = req.body

      if (await Cliente.findOne({ email })){
        return res.status(400).send({error: 'user already exists'});
      }

      if (await Cliente.findOne({ cpf })){
        return res.status(400).send({error: 'user already exists'});
      }

      const cliente = await Cliente.create({
        nome,
        cpf,
        email,
        senha: md5(senha),
        telefone
      });

      cliente.senha = undefined;

      return res.send({cliente}).status(200);
    }
    catch{
      return res.status(400).send({error: 'Registration failed!!'})
    }
  },
  //Updating user informations
  async update(req, res){
    try{
      const cliente = await Cliente.findOneAndUpdate(req.body);
      
      cliente.senha = undefined;
      
      return res.status(200).json(cliente);
    }catch{
      return res.status(400).send({error: 'Update failed!!'});
    }
  }
}