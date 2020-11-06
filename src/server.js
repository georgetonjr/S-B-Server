//Importando bibliotecas
const express = require('express')
const cors = require('cors');
const http = require('http');
const bodyParser = require('body-parser');
const DB = require('./DataBase');

//Importando outros arquivos
const config = require('./config/config.json');
const routes = require('./routes');

const port = process.env.PORT || config.server.port;

const app = express();
const server = http.Server(app);

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

DB.connect()

app.use(cors());
app.use(express.json());

app.use(routes);

server.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
}); 