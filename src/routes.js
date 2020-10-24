const express = require('express');

const routes = express.Router();

//Import controllers
const authController = require('./Controller/authController');
const produtoController = require('./Controller/produtoController');

//---------------------------------------------------------------
//Customer and Partner authentication and registration routes
routes.post('/registercustomer', authController.store);
routes.post('/authenticatecustomer', authController.loginC);
//----
routes.get('/user', authController.show);
routes.get('/client/show', authController.show);
routes.get('/partner/show', authController.showP);

routes.post('/registerpartner', authController.storeP);
routes.post('/authenticatepartner', authController.loginP);
routes.delete('/del', authController.deluser);
///-------------------------------------------------------------
//products routes
routes.post('/cadprod', produtoController.store)
routes.get('/getprod', produtoController.show)
//---------------------------------------------------------------
//Customer routes

//---------------------------------------------------------------
//Partner routes
routes.post('cadproduct');


module.exports = routes;