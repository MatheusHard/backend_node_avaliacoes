const mongoose = require('mongoose');

require('dotenv').config({path:'.env'});

try{


//mongoose.connect(process.env.DATABASE, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connect("mongodb+srv://root:1q2w3e4r@cluster0-tdhq5.mongodb.net/avaliacoes?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true });
console.log("DATABASE"+process.env.DATABASE);

mongoose.Promise = global.Promise;

mongoose.connection.on('error', (error) =>{
    console.error("ERROR "+ error.message);
});

}catch(error){
    console.log("Erro ao conectar"+error);
  }

//Carregar os Models:
require('./models/Cidade');
require('./models/Uf');
require('./models/Funcionario');
require('./models/Avaliacao');

const app = require('./app');

app.set('port', process.env.PORT || 3003);

const server = app.listen(app.get('port'), ()=>{
    console.log("Servidor rodando na porta: " +server.address().port);
}); 