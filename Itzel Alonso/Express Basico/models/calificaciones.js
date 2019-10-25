const mongoose = require ('mongoose');


const schema = 
{
 Alumno: String,
 Materia: String,
 calificacion: Number,
 fecha:{
     dia: Number,
     mes: String,
     year: Number
 }
}
    
const califi = mongoose.model('Calificaciones',schema);