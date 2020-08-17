const express = require('express');
const avaliacaoController = require('../controllers/controllerAvaliacao');
const cidadeController = require('../controllers/controllerCidade');
const ufController = require('../controllers/controllerUf');

//Rotas
const apiRouter = express.Router();

/*****UF******/

apiRouter.post('/uf', ufController.index);

/*****CIDADE******/

apiRouter.post('/cidade', cidadeController.index);

/*****AVALIACAO******/

apiRouter.post('/avaliacao/add', avaliacaoController.add);


module.exports = apiRouter;