const mongoose = require('mongoose');

require('dotenv').config({path:'variables.env'});

//mongoose.connect(process.env.DATABASE);
mongoose.connect(process.env.DATABASE, { useUnifiedTopology: true, useNewUrlParser: true });


mongoose.Promise = global.Promise;

mongoose.connection.on('error', (error) =>{
    console.error("ERROR "+ error.message);
});

//Carfregar os MOdels:
require('./models/Cidade');
const app = require('./app');

app.set('port', process.env.PORT || 3003);

const server = app.listen(app.get('port'), ()=>{
    console.log("Servidor rodando na porta: " +server.address().port);
}); 