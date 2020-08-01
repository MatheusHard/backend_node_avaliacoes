const express = require('express');
const router = require('./routes/index');
const errorHandler = require('./handlers/errorHandler');

//Configs
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', router);
app.use(errorHandler.notFound);



module.exports = app;

