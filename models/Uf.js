const mongoose  = require('mongoose');
mongoose.Promise = global.Promise;

const ufSchema = new mongoose.Schema({


descricao_uf: {
        type: String,
        trim: true,
        required: 'Descrição Uf é um campo obrigatório'
    },
    sigla: {
        type: String,
        required: 'Sigla é um campo obrigatório'
    }

});

module.exports = mongoose.model('Uf', ufSchema, 'uf');