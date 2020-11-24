const express = require('express');

const routes = express.Router();

//Import controllers
const authController = require('./Controller/authController');
const ProdutoController = require('./Controller/produtoController');
const ClienteController = require('./Controller/ClienteController');
const ParceiroController = require('./Controller/ParceiroController');
const VoucherController = require('./Controller/VoucherController');
const PromocaoController = require('./Controller/PromocaoController');

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
routes.post('/cadprod', ProdutoController.store);
routes.get('/getprod', ProdutoController.show);
routes.get('/getprodpartner', ProdutoController.showForPartners);
routes.get('/produto/getprodutopromo', ProdutoController.getProdutoPromo);
routes.get('/produto/search', ProdutoController.search);
//---------------------------------------------------------------
//Voucher Routes
routes.post('/voucher/create', VoucherController.store);
routes.get('/voucher/get', VoucherController.getVoucher);
routes.post('/voucher/validate', VoucherController.validarVoucher);
routes.get('/voucher/getcustomer', VoucherController.getVoucherCustomer);
routes.get('/voucher/getpartner', VoucherController.getVoucherPartner);
//---------------------------------------------------------------
//Sale Routes
routes.post('/promocao/create', PromocaoController.store);
routes.post('/promocao/status', PromocaoController.statusPromocao);
routes.get('/promocao/getpromo', PromocaoController.getPromo);
routes.get('/promocao/getpromopartner', PromocaoController.getPromoPartner);
//---------------------------------------------------------------
//Dev Routes
routes.delete('/del', authController.deluser);
routes.get('/user', authController.show);
routes.get('/client/show', authController.show);
routes.get('/partner/show', authController.showP);


module.exports = routes;