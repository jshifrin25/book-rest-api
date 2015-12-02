var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var mongoose = require('./utils/db.js');
var bookSchema = require('./models/BookSchema.js');
var Book = require('./books/Book');
var adapter = require('./utils/mongoAdapter');

app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/book', function (req, res, next) {
    
    res.json(req.body);
});

app.get('/book', function (req, res) {
    var query = Book.find();
    query.exec().then(function (books) {
        res.json(books);
    });
});

module.exports = app;