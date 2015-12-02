var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: String,
    author: String,
    published: Date,
    pages: Number,
    summary: String,
    category: String
});

module.exports = bookSchema;