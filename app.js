const express = require('express');
const router = require('./routes/index');
const errorHandler = require('./handlers/errorHandler');
const apiRouter = require('./routes/api');
const cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
  }


//Configs
const app = express();

/*var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors()) //Essa linha aquiCOPIAR CÓDIGO
Crie uma a variável com as rotas permitidas:

var corsOptions = {
  origin: 'http://localhost:3000'',
  optionsSuccessStatus: 200
}COPIAR CÓDIGO
Por último passe como parâmetro para a função cors

app.use(cors(corsOptions)) */

app.use(express.json());
app.use((req, res, next) =>{
res.header( "Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
res.header('Access-Control-Allow-Origin', '*');
//res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS');
//res.header('Content-Type','application/json');



app.use(cors());
//app.use(cors(corsOptions));

next();
});

app.use(express.urlencoded({extended:true}));

app.use('/api', apiRouter);
app.use('/', router);
app.use(errorHandler.notFound);



module.exports = app;

