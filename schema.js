var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// mongoose book schema
var bookSchema = new Schema({
    id: Number,
    title: String,
    author: String,
    pages: Number,
    cover: String,
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
},
{collection: 'library'});

// constrcuct the book schema
var Book = mongoose.model('Book', bookSchema);

module.exports = Book
