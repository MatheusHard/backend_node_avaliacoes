const mongoose  = require('mongoose');
mongoose.Promise = global.Promise;

const funcionarioSchema = new mongoose.Schema({


nome: {
        type: String,
        trim: true,
        required: 'Nome é obrigatório!!!'
    },
    cpf: {
        type: String,
        trim: true,
        maxlength: 11,
        required: "Cpf é obrigatório!!!"
    },
    telefone:{
        type: String,
        trim: true
    },
    setor_id:{
        type: String,
        trim: true,
        required: true
    }
    
});

module.exports = mongoose.model('Funcionario', funcionarioSchema, 'funcionario');