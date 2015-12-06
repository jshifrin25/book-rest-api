var express = require('express');

var app = express();

var router = require('./routes/BookRouter');

var bodyParser = require('body-parser');

var mongoose = require('./utils/db.js');

var Book = require('./books/Book');

app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json());

app.use(express.static('views'));
app.use('/js', express.static('node_modules/angular'));
app.use('/css', express.static('node_modules/bootstrap/dist/css'));

app.use('/', router);

module.exports = app;