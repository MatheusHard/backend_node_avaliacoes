const express = require('express');
const router = require('./routes/index');
const errorHandler = require('./handlers/errorHandler');
const apiRouter = require('./routes/api');
const cors = require('cors');


//Configs
const app = express();



app.use(express.json());
app.use((req, res, next) =>{
res.header('Access-Control-Allow-Origin', '*');
//res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS');


app.use(cors());
next();
});

app.use(express.urlencoded({extended:true}));

app.use('/api', apiRouter);
app.use('/', router);
app.use(errorHandler.notFound);



module.exports = app;

