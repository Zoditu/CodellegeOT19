const mongoose = require ('mongoose');

const schema = {
    id_numer: Number,
    nombre:  String,
    precio: Number,
    cantidad:Number,
    disponibilidad: Boolean,
    marca: String,
    caducidad:{
        mes: String,
        year: Number
    }

}

const producto = mongoose.model('Tienda',schema);

model.export(producto);