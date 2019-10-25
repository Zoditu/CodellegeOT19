const mongoose = require('mongoose')

const schema = {
    tipoDeCarro: String,
    modelo: String,
    marca: String,
    kilometraje: Number,
    year: Number,
    transmision: String
}

const Model = mongoose.model('Car', schema);

module.exports =  Model;