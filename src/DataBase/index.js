const mongoose = require('mongoose');

const config = require('../config/config.json');

const connect = () => {
  mongoose
    .connect(`mongodb+srv://${config.database.username}:${config.database.password}@cluster0.84aem.mongodb.net/${config.database.name}?retryWrites=true&w=majority`, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true, 
    })
    .then(console.log('conectado com sucesso'))
    .catch(e => console.log(e))
};

exports.connect = connect;