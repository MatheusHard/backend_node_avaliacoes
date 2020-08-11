const mongoose  = require('mongoose');
mongoose.Promise = global.Promise;

const ufSchema = new mongoose.Schema({


descricao_setor: {
        type: String,
        trim: true,
        required: 'Descrição Setor é um campo obrigatório'
    }
    
});

module.exports = mongoose.model('Setor', ufSchema, 'setor');