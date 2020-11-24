const azure = require('azure-storage');
const guid = require('guid');
const Produto = require('../Models/Produto');
const config = require('../config/config');

module.exports = {
  //Product create
  async store(req, res){
    const blobSvc = azure.createBlobService(config.containerConnectionString);
    
    let filename = guid.raw().toString() + '.jpg';
    let rawdata = req.body.image;
    let matches = rawdata.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    let type = matches[1];
    let buffer = new Buffer(matches[2], 'base64');

    //save image to azure storage
    blobSvc.createBlockBlobFromText('productsbb', filename, buffer, {
      contentSettings: { contentType: type }
    }, (error, result, response) => {
      if (error) {
        console.log(error);
        filename = 'default.png';
      }
    });
    console.log('https://productsb.blob.core.windows.net/productsbb/' + filename)
    
    const
    {
      codigo, 
      valor,
      tipo, 
      fabricante, 
      quantestoque, 
      parceiro,
      mercado,
    } = req.body;

    Produto.create({
      img: 'https://productsb.blob.core.windows.net/productsbb/' + filename, 
      codigo, 
      valor,
      tipo, 
      fabricante, 
      quantestoque, 
      parceiro,
      mercado,
    })
    .then(() => res.status(200).json('Product successfully registered'))
    .catch(e => console.log(e));
    //.catch(() => res.status(400).json({error: 'Registration failed!!'}));
  },

  async show(req, res){
    try{

      const produtos = await Produto.find();
      res.json(produtos);

    }
    catch{
      res.status(400).send({error: 'Falha ao buscar produtos'})
    }
  },
  //Get products for the partner
  async showForPartners(req, res){
    try {
      const { id } = req.headers;
      const produtos = await Produto.find({parceiro: id})

      return res.json(produtos).status(200)
    } catch (error) {
      console.error(error);
    }
  },

  async update(req, res){
    try{
      const produto = await Produto.findByIdAndUpdate(req.params.id, req.params.options);
      res.send(produto)
    }catch{

    }
  },

  async getProdutoPromo(req, res){
    try {
      const { _id } = req.headers;
      const produtos = await Produto.findOne({_id})

      return res.json(produtos).status(200)
    } catch (error) {
      console.error(error);
    }
  },

  async search(req, res) {
    console.log(req.headers)
    try {
      const { fabricante } = req.headers;
      const produtos = await Produto.find({fabricante: {$regex: ".*" + fabricante + ".*"}});
      console.log(produtos)
      res.status(200).json(produtos);
      
    } catch (error) {
      console.error(error);
      res.status(404).json(error)
    }
  },

}
