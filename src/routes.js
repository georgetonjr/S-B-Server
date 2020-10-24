const express = require('express');

const routes = express.Router();

//Import controllers
const authController = require('./Controller/authController');
const produtoController = require('./Controller/produtoController');
const ClienteController = require('./Controller/ClienteController');
const ParceiroController = require('./Controller/ParceiroController');

//---------------------------------------------------------------
//Authentication Routes
routes.post('/authenticatecustomer', authController.loginC);
routes.post('/authenticatepartner', authController.loginP);

//---------------------------------------------------------------
//Customer routes
routes.post('/registercustomer', ClienteController.store);

//---------------------------------------------------------------
//Partner routes
routes.post('/registerpartner', ParceiroController.store);

///-------------------------------------------------------------
//products routes
routes.post('/cadprod', produtoController.store)
routes.get('/getprod', produtoController.show)
//---------------------------------------------------------------
//Dev Routes
routes.delete('/del', authController.deluser);
routes.get('/user', authController.show);
routes.get('/client/show', authController.show);
routes.get('/partner/show', authController.showP);


module.exports = routes;