const mongoose = require('mongoose');

require('dotenv').config({path:'.env'});

try{


mongoose.connect(process.env.DATABASE, { useUnifiedTopology: true, useNewUrlParser: true });

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