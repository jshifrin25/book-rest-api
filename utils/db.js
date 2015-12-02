module.exports = function () {
    var mongoose = require('mongoose'),
        bookSchema = require('../models/BookSchema.js'),
        Book;
    mongoose.Promise = require('bluebird');
    mongoose.connect('mongodb://localhost/local', function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log('Successfull Connection');
        }
    });
    var db = mongoose.connection;
    return mongoose;
}();