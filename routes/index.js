const express = require('express');
const avaliacaoController = require('../controllers/controllerAvaliacao');
const adminController = require('../controllers/controllerAdmin');
const cidadeController = require('../controllers/controllerCidade');
const ufController = require('../controllers/controllerUf');
const setorController = require('../controllers/setorController');

//Rotas
const router = express.Router();


/*****UF******/

router.post('/uf', ufController.index);


/*****CIDADE******/

router.post('/cidade', cidadeController.index);
router.post('/cidade/add', cidadeController.add);

/*****SETOR******/

router.post('/setor', setorController.index);

//router.get('/', avaliacaoController.index);


/*****ADMIN******/

router.get('/admin', adminController.index);



module.exports = router;