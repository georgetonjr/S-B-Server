const express = require('express');
const multer = require("multer");

const routes = express.Router();

let upload = multer();

//Import controllers
const authController = require('./Controller/authController');
const produtoController = require('./Controller/produtoController');
const ClienteController = require('./Controller/ClienteController');
const ParceiroController = require('./Controller/ParceiroController');

//---------------------------------------------------------------
//Authentication Routes
routes.post('/authenticatecustomer', authController.CustomerLogin);
routes.post('/authenticatepartner', authController.PartnerLogin);

//---------------------------------------------------------------
//Customer routes
routes.post('/registercustomer', ClienteController.store);

//---------------------------------------------------------------
//Partner routes
routes.post('/registerpartner', ParceiroController.store);

///-------------------------------------------------------------
//products routes
routes.post('/cadprod',upload.single('fileimage'), produtoController.store);
routes.get('/getprod', produtoController.show);
//---------------------------------------------------------------
//Dev Routes
routes.delete('/del', authController.deluser);
routes.get('/user', authController.show);
routes.get('/client/show', authController.show);
routes.get('/partner/show', authController.showP);


module.exports = routes;