const mongose = require('mongoose');

const schema = {
    author: String,
    country: String,
    language: String,
    pages: Number,
    title: String,
    year: Number,
    availability: Boolean
}

const Model = mongose.model('Book', schema);

module.exports = Model