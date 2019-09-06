function Personaje(nombre,profesion,genero,edad,fuerza,HP)
{
    this.nombre=nombre,
    this.profesion=profesion,
    this.genero=genero,
    this.edad=edad,
    this.fuerza=fuerza,
    this.HP=HP,
    this.mostrarStatus=function()
    {
        console.log("Soy"+ this.nombre+ "y mi porfesion" + this.profesion + "soy el genero" + " " +"tengo "+this.edad + "con una fuerza de " + "y una vida de " + this.HP );

    }
    this.estaVivo=function()
    {
        return Boolean(this.HP>0)
    }
    this.atacar=function(enemigo)
    {
        enemigo.hp=enemigo.HP - this.fuerza
        return enemigo.HP
    }

    this.subirNivel=function()
    {
        this.edad+=1;
        this.fuerza+=5;
        this.HP+=25;
    }
    
}


var Personaje1 = new Personaje("Brayan", "Especialista de cuchillos", "indefinido",17,9999,100)
var Personaje2 = new Personaje("mono","Machetes","onvre",19,5666,100)

Personaje1.atacar(Personaje2);
Personaje1.mostrarStatus();

console.log("El peronsaje sigue vivo?", Personaje1.estaVivo);


//intrucciones  

/*
1. CREA 2 PERSONAJES
2. IMPRIME LA FUNCION DE AMBOS
3. HAZ QUE PERSONAJE1 ATAQUE A PERSONAJE2
4. IMPRIME LA INFORMACION DEL PERSONAJE ATACADO Y VALIDA QUE CAMBIA SU 
5 UTILIZA EL METODO "ESTA VIVO" PARA VALIDAR SI LO MATASTE
6. UTILIZA EL METODO/FUNCION "subirNivel"  E IMPRIME LA INFOMACION PARA CALIDAR SUS ESTATUS 



tarea bonus

crear un loop con el keyword "while"
  -hacer que un personaje ataque al otro hasta que muera 
*/

while(this.estaVivo==true)
{
   this.atacar(Personaje1) 
   if(this.estaVivo==false) 
   {
       console.log("El personaje esta muerto")
   }

}