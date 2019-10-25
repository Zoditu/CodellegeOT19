const mongoose = require('mongoose');

const schema = {
    name: String,
    password: String,
    apellido: String,
    email: String
};

const Model = mongoose.model('User', schema);

module.exports = Model;