var mongoose = require('mongoose'),
    bookSchema = require('../models/BookSchema');
module.exports = function () {
    //CRUD functions
    var Book = mongoose.model('book', bookSchema);
    var Adapter = {
        createBook: function (bookObj) {
            var book = new Book(bookObj);
            book.save();
        },
        queryAll: function () {
            var query = Book.find();
            return query
                .sort({
                    title: 'asc'
                })
                .exec()
                .then(function (books) {
                    return books;
                });
        },
        findBook: function (id) {
            return Book.findById(id)
                .exec();
        },
        removeBook: function (id) {
            return Book.findByIdAndRemove(id);
        },
        updateBook: function (id, update) {
            return Book.findByIdAndUpdate(id, update);
        }
    };

    return Adapter;
};