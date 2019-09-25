// var Personaje={
//     nombre: "",
//     profesion: "",
//     genero: "",
//     Edad: 0,
//     fuerza: 0,
//     HP: 0,
//     mostrarStatus: function(){

//     }
// }

  function Personaje(nombre,profesion,genero,Edad,fuerza,HP){
    this.nombre=nombre,
    this.profesion= profesion,
    this.genero= genero,
    this.Edad = Edad,
    this.fuerza=fuerza,
    this.HP=HP,
    this.mostrarStatus= function(){
    console.log("Soy:"+" "+ this.nombre +"y mi profesion es:"+" "+ this.profesion+ ", soy del genero"+" "+this.genero+", tengo "+this.Edad+ "años con una fuerza de "+ this.fuerza+"y una vide de"+ this.HP);
    }
    this.estaVivo= function(){
        return Boolean(this.HP>0);
    }

    this.atacar = function(enemigo){
        enemigo.HP -= this.fuerza;
        return enemigo.HP;
    }
    this.SubirNivel = function(){
        this.Edad += 1;
        this.fuerza += 5; 
        this.HP += 25; 
    }
}

// Instrucciones
/*
1. Crear 2 personajes 
2. imprimir la informacion de ambos
3. haz que los personajes pelen entre si 
4. imprime una funcion del personaje atacado y valida que su hp haya cambiado
5. utiliza el emtodo esta vivo para validar si lo mataste
6. utiliza el metodo/funcion  "subvir nivel" e imprimir la infomacion para validar */

var ElChapo = new Personaje("Joaquin Guzman", "Narcotraficante", "Hombre", 45, 50000, 100000);
var Municipales= new Personaje(" Melendez", "Comandante", "Hombre", 55, 40367,10000);
// Instruction 2
ElChapo.mostrarStatus();
Municipales.mostrarStatus();
// pelear entre si 
console.log(ElChapo.atacar(Municipales));
console.log(Municipales.estaVivo());
//Subir nivel
ElChapo.SubirNivel();
ElChapo.mostrarStatus();

