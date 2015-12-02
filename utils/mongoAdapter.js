var mongoose = require('mongoose');
module.exports = function (book, schema) {
    //CRUD functions
    var Model = mongoose.model('book', schema);
    var Adapter = {
        createBook: function () {
            var Book = new Model(book.toBookObj());
            book.save();
        }
    };

    return Adapter;
};