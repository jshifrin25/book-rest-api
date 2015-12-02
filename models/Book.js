var mongoose = require('mongoose');
var bookSchema = require('./BookSchema.js');
module.exports = mongoose.model('book', bookSchema);