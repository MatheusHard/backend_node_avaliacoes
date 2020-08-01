const express = require('express');
const avaliacaoController = require('../controllers/controllerAvaliacao');
const adminController = require('../controllers/controllerAdmin');
const cidadeController = require('../controllers/controllerCidade');



//Rotas
const router = express.Router();
router.get('/', avaliacaoController.index);
router.get('/cidade', cidadeController.index);
router.get('/admin', adminController.index);

router.post('/cidade/add', cidadeController.add);


module.exports = router;