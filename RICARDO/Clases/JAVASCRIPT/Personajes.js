// function Personaje (nombre, profesion, genero, edad, fuerza, hp) {
//     this.nombre = nombre,
//     this.profesion = profesion,
//     this.genero = genero,
//     this.edad = edad,
//     this.fuerza = fuerza,
//     this.HP = hp,
//     this.mostrarStatus = function (){
//         console.log('Soy ' + this.nombre + ' y mi profesión es ' + this.profesion + ' ,soy del genero ' + this.genero + ' ,tengo ' + this.edad + ' años con una fuerza ' + this.fuerza + ' y una vida de ' + this.HP)
//     }
//     this.estaVivo = function (){
//         return Boolean(this.hp > 0)
//     }
//     this.atacar = function (enemigo) {
//         enemigo.HP = enemigo.HP - this.fuerza
//         return enemigo.HP
//     }
//     this.subirNivel = function() {
//         this.edad += 1
//         this.fuerza += 5
//         this.hp += 25
//     }
// }


// var choloDeLaIndepe = new Personaje('brayan', 'Especialista en cuchillos', 'indefinido', 17, 9999, 100)
// var choloDelCentro = new Personaje('kevin', 'Especialista en armas', 'indefinido', 19, 9999, 100)

// choloDeLaIndepe.atacar(choloDelCentro)
// choloDeLaIndepe.mostrarStatus()
// console.log('el cholo sigue vivo?', choloDeLaIndepe.estaVivo())


function Personaje (nombre, profesion, genero, edad, fuerza, hp) {
    this.nombre = nombre,
    this.profesion = profesion,
    this.genero = genero,
    this.edad = edad,
    this.fuerza = fuerza,
    this.HP = hp,
    this.mostrarStatus = function (){
        console.log('Soy ' + this.nombre + ' y mi profesión es ' + this.profesion + ' ,soy del genero ' + this.genero + ' ,tengo ' + this.edad + ' años con una fuerza ' + this.fuerza + ' y una vida de ' + this.HP)
    }
    this.estaVivo = function (){
        return Boolean(this.hp > 0)
    }
    this.atacar = function (enemigo) {
        enemigo.HP = enemigo.HP - this.fuerza
        return enemigo.HP
    }
    this.subirNivel = function() {
        this.edad += 1
        this.fuerza += 5
        this.HP += 25
    }
}


var choloDeLaIndepe = new Personaje('brayan', 'Especialista en cuchillos', 'indefinido', 17, 9999, 100)
var choloDelCentro = new Personaje('kevin', 'Especialista en armas', 'indefinido', 19, 9999, 100)


choloDeLaIndepe.mostrarStatus()
choloDelCentro.mostrarStatus()
choloDeLaIndepe.atacar(choloDelCentro)
console.log('El hp del choloDelCentro es: ', choloDelCentro.HP)
console.log('Ese cholo sigue vivo?', choloDelCentro.estaVivo())
choloDeLaIndepe.subirNivel()
choloDeLaIndepe.mostrarStatus()
while(choloDelCentro.HP > 0)
{
    choloDeLaIndepe.atacar(choloDelCentro)
    if(choloDelCentro.HP<=0)
    {
        console.log('El cholo ya está muerto')
    }
}

// INSTRUCCIONES 
/*
1. CREA 2 PERSONAJES
2. IMPRIME LA INFORMACION DE AMBOS
3. HAZ QUE PERSONAJE1 ATAQUE A PERSONAJE 2
4. IMPRIME LA INFORMACION DEL PERSONAJE ATACADO Y VALIDA QUE CAMBIA SU HP
5. UTILIZA EL METODO "estaVivo" PARA VALIDAR SI LO MATASTE
6. UTILIZA EL METODO/FUNCION "subirNivel" E IMPRIME LA INFORMACION PARA VALIDAR SUS STATS

TAREA DE BONUS:
-CREAR UN LOOP CON EL KEYWORD "while"
-HACER UN PERSONAJE QUE ATAQUE AL OTRO HASTA QUE MUERA
*/
