const mongoose = require('mongoose');


const schema = {
    tipo: {
        carro: Boolean,
        camioneta: Boolean,
    },
    marca: String,
    modelo: Number,
    color: String,
    no_Cilindros: Number,
    year: Number,
    precio: Number
}

const automovil = mongoose.model('Automoviles', schema);

model.export(automovil);