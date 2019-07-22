const express = require('express');

const router = express.Router();

const controller = require('../controllers/sanarflix-controller');

router.get('/sanarflix/criarCliente', controller.criarClienteMundipagg);

router.get('/sanarflix/obter', controller.obterClienteMundipagg);

router.get('/sanarflix/listarClientes', controller.listarClientesMundipagg);

router.get('/sanarflix/criarCartaoCliente', controller.criarCartaocliente);

module.exports = router;