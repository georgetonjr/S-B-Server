const express = require('express');

const routes = express.Router();

//Import controllers
const authController = require('./Controller/authController');
const produtoController = require('./Controller/produtoController');
const ClienteController = require('./Controller/ClienteController');
const ParceiroController = require('./Controller/ParceiroController');
const VoucherController = require('./Controller/VoucherController');

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
routes.post('/cadprod', produtoController.store);
routes.get('/getprod', produtoController.show);
routes.get('/getprodpartner', produtoController.showForPartners);
//---------------------------------------------------------------
//Voucher Routes
routes.post('/voucher/create', VoucherController.store);
routes.post('/voucher/get', VoucherController.getVoucher);
routes.get('/voucher/getcustomer', VoucherController.getVoucherCustomer);
routes.get('/voucher/getpartner', VoucherController.getVoucherPartner);
//---------------------------------------------------------------
//Dev Routes
routes.delete('/del', authController.deluser);
routes.get('/user', authController.show);
routes.get('/client/show', authController.show);
routes.get('/partner/show', authController.showP);


module.exports = routes;