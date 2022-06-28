const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    ISBN: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Integer,
        required: true
    },
    yop: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },

});

const book = mongoose.model('book', bookSchema);

module.exports = book;