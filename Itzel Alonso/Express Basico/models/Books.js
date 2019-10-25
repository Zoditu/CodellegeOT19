const mongoose =  require ('mongoose');

const mongoOptions = { 
    userNewUrlParser: true
}

mongoose.connect ('mongodb://localhost:666/books',mongoOptions);

const schema = {
    name : String,
    password: String,
    correo: String,
    telefono: Number,
    disponible: Boolean,
}

const Users = mongoose.model('Users',schema);

module.exports(Users);


// el primer parametro es el nombre de la collection
// el segundo son los atributos que tendra la collection.