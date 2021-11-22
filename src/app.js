'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')


const app = express();
const router = express.Router();

//Conecta ao banco
mongoose.connect('mongodb+srv://alex:feleo2630@cluster0.4qgok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

//Carrega as Rotas
const indexRoute = require('./routes/index-route'); 
const productRoute = require('./routes/product-route'); 



//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
  extended: false
}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;
