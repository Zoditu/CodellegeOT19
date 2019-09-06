//Other
// var Personaje = {
//     nombre: '',
//     profesion: '',
//     genero: '',
//     edad: 0,
//     fuerza: 0,
//     HP: 0,
//     mostrarStatus: function(){

//     }
// };

function Personaje (nombre, profesion, genero, edad, fuerza, vida){
    this.nombre = nombre,
    this.profesion = profesion,
    this.genero = genero,
    this.edad = edad,
    this.fuerza = fuerza,
    this.vida = vida,
    this.mostrarStatus = function () {
        console.log('Nombre:' + this.nombre + ' ' + 'Profesion:' + this.profesion + ' ' + 'Genero:' + this.genero + ' ' + 'Edad' + this.edad + ' ' + 'Fuerza:' +  this.fuerza + ' ' + 'Vida:' + this.vida )
    }
    this.estaVivo = function(){
        return Boolean(this.vida > 0)
    }
    this.atacar = function(enemigo){
        enemigo.vida = enemigo.vida - this.fuerza;
        return enemigo.vida
    }
    this.subirNivel = function (){
        this.edad += 1
        this.fuerza += 5 
        this.vida += 25
    }
};

//Instrucciones
/*
1. Crea 2 personajes
2. Imprime la informacion de ambos
3. Haz que persona1 ataque a personaje2
4. Imprime la informacion del personaje atacado y valida que cambien su vida
5. Utilia el metodo "estaVivo" para validad si lo mataste
6. Utiliza el metodo "subirNivel" e imprime la informacion para validar sus stats
*/

//Imprimir cada personaje
var CholoDeLaIndepe = new Personaje ('Brayan', 'Especialista en cuchillos', 'Masculino', 17, 9999, 100)
var CholoDelCentro = new Personaje ('Kevin', 'Especialista en navajazos', 'Masculino', 21, 10500, 80)

//Metodos
/*CholoDeLaIndepe.mostrarStatus();
CholoDelCentro.mostrarStatus();
console.log('El CholoDeLaIndepe esta vivo?', CholoDeLaIndepe.estaVivo());
CholoDelCentro.atacar(CholoDeLaIndepe);
console.log('El CholoDeLaIndepe esta vivo?', CholoDeLaIndepe.estaVivo());
CholoDelCentro.subirNivel();
CholoDelCentro.mostrarStatus();
CholoDeLaIndepe.mostrarStatus();
*/

//Tarea 
/*Crear un loop con el keyword while 
hacer que un personaje ataque al otro hasta que muera*/
while(CholoDelCentro.vida > 0){
    console.log('El CholoDelCentro esta vivo?', CholoDelCentro.estaVivo());
    CholoDeLaIndepe.atacar(CholoDelCentro);
    console.log('El CholoDeLaIndepe acuchilló al CholoDelCentro');
    // CholoDelCentro.mostrarStatus();
    console.log('El CholoDelaCentro esta vivo?', CholoDelCentro.estaVivo());
}