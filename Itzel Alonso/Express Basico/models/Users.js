const mongoose =  require ('mongoose');

const schema = {
    //requeridos
    name : String,
    password: String,
    email: String,
    telefono: Number,
    disponible: Boolean,
}

const Users = mongoose.model('Users',schema);

module.exports = Users;


// el primer parametro es el nombre de la collection
// el segundo son rlos atributos que tendra la collection.