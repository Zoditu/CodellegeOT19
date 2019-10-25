//COMO INICIALIZAR EXPRESS??
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const options = {
    useNewUrlParser : true  
} 
mongoose.connect('mongodb://localhost/test', options)

//COMO LEER PETICIONES POST Y PUT
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const userRoutes = require('./routes/users')
//
app.use('/users', userRoutes)


//COMO SE LEVANTA EL SERVIDOR
app.listen(3000, ()=> {
    console.log('SERVER UP');
})





