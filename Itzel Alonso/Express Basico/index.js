// descargar el express en la carpeta donde lo vas a trabajar
//$npm init
//$npm i --save express


//como se inicializa expres JS?

const express = require('express');
const app = express();

// ESTE ES OTRO EJEMPLO!!!!!!!!--------------------------------------------------------------------------

//PRIMERO debes de importar la libreria
const mongoose = require('mongoose');

//SEGUNDO debes de conectarte a una base de datos
//como se a;aden los archivos estaticos. archivos que no interactuan con express directamente, imagenes, videos , css etc.
const mongoOptions = {
    useNewUrlParser: true,
}

mongoose.connect('mongodb://localhost/test', mongoOptions);
// como leer peticiones POST y PUT

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

const userRoutes = require('./routes/Users')
app.use('/users', userRoutes)
// app.use(express.static('public'))

app.listen(3000, () => {
    console.log('Server UP');
});
//como se a;ade una ruta tipo/metodo GET
// app.get('/saludar/:nombre', function (req,res){
//     res.json ( {message: "Hola" + req.params.nombre});

// });

//como se levanta un servidor de expressJS

// ESTE ES OTRO EJEMPLO!!!!!!!!--------------------------------------------------------------------------

//PRIMERO debes de importar la libreria
// const mongoose = require ('mongoose');

//SEGUNDO debes de conectarte a una base de datos
// const mongoOptions = {
//     userNewUrlParser: true
// }

// /