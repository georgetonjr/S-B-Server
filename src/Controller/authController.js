const Cliente = require('./../Models/Cliente');
const Parceiro = require('../Models/Parceiro');

module.exports = {
  //cadastro de clientes
  async store(req, res){
    try{
      console.log(req.body);
      const { nome, cpf, email, senha, telefone } = req.body

      if (await Cliente.findOne({ email })){
        return res.status(400).send({error: 'user already exists'});
      }

      if (await Cliente.findOne({ cpf })){
        return res.status(400).send({error: 'user already exists'});
      }

      console.log(nome, '-', cpf, '-', email, '-', senha, '-', telefone)

      const cliente = await Cliente.create({
        nome,
        cpf,
        email,
        senha,
        telefone
      });

      cliente.senha = undefined;

      return res.send({cliente}).status(200);
    }
    catch{
      return res.status(400).send({error: 'Registration failed!!'})
    }
  },

  //Cadastro Parceiro
  async storeP(req, res){
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
        senha
      });

      parceiro.senha = undefined;

      return res.send({ parceiro }).status(200);
    }
    catch{
      return res.status(400).send({error: 'Registration failed!!'})
    }
  },

  async show(req, res){
      const cliente = await Cliente.find()
      return res.send(cliente)
  },

  async showP(req, res){
    const parceiro = await Parceiro.find()
    return res.send(parceiro)
},

  async loginC(req, res){

    const { cpf, senha } = req.body;

    const user = await Cliente.findOne({ cpf }).select('+senha');

    if (!user)
      return res.status(400).send({ error: 'User not found'});

    if(senha !== user.senha)
      return res.status(400).send({error: 'Invalid Password'});
    
    res.json(user);
    
  },

  async loginP(req, res){
    const { cnpj, senha } = req.body;

    const user = await Parceiro.findOne({ cnpj }).select('+senha:');

    if (!user)
      return res.status(400).send({ error: 'User not found'});

    if(senha == user.senha)
      return res.status(400).send({error: 'Invalid Password'});
    
    res.send({user});
    
  },



  async deluser( req, res ){
    const id = req.body.id
    await Parceiro.findOneAndDelete({ id })
    res.status(200).send({id})
  },
  

}
