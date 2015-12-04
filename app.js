var express = require('express');

var app = express();

var router = express.Router();

var bodyParser = require('body-parser');

var mongoose = require('./utils/db.js');

var Book = require('./books/Book');
var Adapter = require('./utils/mongoAdapter');

var bookAdapter = new Adapter();

app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json());
router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

router.get('/', function (req, res) {
    res.send('Hello World!');
});
router.route('/book')
    .post(function (req, res, next) {
        bookAdapter.createBook(req.body);
        res.json(req.body);
        next();
    })
    .get(function (req, res) {
        var allBooks = bookAdapter.queryAll();
        allBooks
            .then(function (books) {
                res.json(books);
            });
    });

router.route('/book/:id')
    .get(function (req, res, next) {
        var id = req.params.id;
        var book = bookAdapter.findBook(id);
        book.then(function (book) {
                res.send(book);
            })
            .catch(function (err) {
                res.sendStatus(404);
            });
    })
    .put(function (req, res, next) {
        var id = req.params.id,
            update = req.body,
            book = bookAdapter.updateBook(id, update);
        console.log(update);
        book.then(function (book) {
            res.sendStatus(201);
        }).catch(function (err) {
            res.sendStatus(404);
            console.log(err);
        });
    })
    .delete(function (req, res, next) {
        var id = req.params.id,
            book = bookAdapter.removeBook(id);
        book.then(function (err, book) {
            res.sendStatus(204);
        }).catch(function (err) {
            res.sendStatus(404);
            console.error(err);
        });
    });

app.use('/', router);

module.exports = app;