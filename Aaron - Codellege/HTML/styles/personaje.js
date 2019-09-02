
// DECLARACIÓN DE OBJETO

// var Personaje = {
//     nombre: "",
//     profesion: "",
//     genero: "",
//     edad: 0,
//     fuerza: 0,
//     HP: 0,
//     mostrarStatus: function () {
//     }
// }


//DECLARACIÓN DE CONSTRUCTOR 
function Personaje (nombre, profesion, genero, edad, fuerza, HP) {
    this.nombre = nombre;
    this.profesion = profesion;
    this.genero = genero;
    this.edad = edad;
    this.fuerza = fuerza;
    this.HP = HP;
    this.mostrarStatus = function () {
        console.log('Soy: ' + this.nombre + ' Y mi profesión es: ' + this.profesion + ' soy del género: ' + this.genero + ', tengo: ' + this.edad + ' años' + ', con una fuerza de: ' + this.fuerza + ' y una vida de: ' + this.HP)
    }
    this.estaVivo = function () {
        return Boolean(this.HP > 0);
    }
    this.atacar = function (enemigo) {
        enemigo.HP = enemigo.HP - this.fuerza
        //enemigo.HP -= this.fuerza
    }
    this.subirNivel = function () {
        this.edad += 1
        this.fuerza += 5
        this.HP += 25
    }
}

var aaron = new Personaje ('Aaron', 'Estudiante', 'Hombre', 20, 20, 200);
var cholo = new Personaje ('Brayan', 'Especialista en cuchillos', 'indefinido', 17, 9999, 100);

aaron.mostrarStatus();
cholo.mostrarStatus();

while (cholo.estaVivo() == true) {
    aaron.atacar(cholo);
}

cholo.estaVivo();




//Instrucciones
/*
1. Crea 2 personajes
2. Imprime información de ambos
3. Haz que personaje1 ataque a personaje2
4. Imprime la informacion del personaje atacado y valida que cambia su hp
5. utiliza el metodo "estaVivo" para validar si lo mataste
6. Utiliza el metodo "subirNivel" e imprime la información para validar sus datos

TAREA BONUS
- Crear un loop con el keyword "while" 
    - Hacer que un personaje ataque al otro hasta que muera
*/

