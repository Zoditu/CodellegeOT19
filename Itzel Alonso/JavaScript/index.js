//ARREGLOS CON OBJETOS
var Alumnos= [
    //OBJETOS CON PROPIEDADES
{//Itzel
    nombre: 'Itzel',
    ApellidoP:' Alonso',
    ApellidoM:' Garcia',
    edad:22,
    estatura: '1.72m',
    sexo:'M',
    nacionalidad:'Mexicana',
    nombreComp: function()
    {
       return this.nombre + "" + this.ApellidoP + "" + this.ApellidoM;
    }
},

{//Liliana
    nombre: 'Liliana',
    ApellidoP:' Hernandez',
    ApellidoM:'Gonzalez',
    edad:19,
    estatura: '1.70m',
    sexo:'M',
    nacionalidad:'Mexicana',
    nombreComp: function()
    {
       return this.nombre + "" + this.ApellidoP + "" + this.ApellidoM;
    }
},
{//Aldo
    nombre: 'Aldo',
    ApellidoP:' Matias',
    ApellidoM:' Galindo',
    edad:23,
    estatura: '1.77m',
    sexo:'H',
    nacionalidad:'Mexicana',
    nombreComp: function()
    {
       return this.nombre + "" + this.ApellidoP + "" + this.ApellidoM;
    }
},
{ //Aron
    nombre: 'Aron',
    ApellidoP:' Arredondo',
    ApellidoM: 'Saraguz',
    edad: 20,
    estatura: '1.74m',
    sexo:'H',
    nacionalidad:'Mexicana',
    nombreComp: function()
    {
       return this.nombre + "" + this.ApellidoP + "" + this.ApellidoM;
    }
},
{ //karla
    nombre: 'Karla',
    ApellidoP:' Gonzalez',
    ApellidoM:'Hernandez',
    edad:20,
    estatura: '1.48m',
    sexo:'M',
    nacionalidad:'Mexicana',
    nombreComp: function()
    {
       return this.nombre + "" + this.ApellidoP + "" + this.ApellidoM;
    }
},

{ //Natalia
    nombre: 'Natalia',
    ApellidoP:' Rodriguez',
    ApellidoM:'Capitan',
    edad:22,
    estatura: '1.56m',
    sexo:'M',
    nacionalidad:'Mexicana',
    nombreComp: function()
    {
       return this.nombre + "" + this.ApellidoP + "" + this.ApellidoM;
    }
    
},

{ //Andy
    nombre: 'Andy',
    ApellidoP:' Ramos',
    ApellidoM:' Rodriguez',
    edad:19,
    estatura: '1.60m',
    sexo:'H',
    nacionalidad:'Colombiana',
    nombreComp: function()
    {
       return this.nombre + "" + this.ApellidoP + "" + this.ApellidoM;
    }
},
{ //Richard
    nombre: 'Richard',
    ApellidoP:' Teneyuque',
    ApellidoM:' Puerta',
    edad:20,
    estatura: '1.70m',
    sexo:'H',
    nacionalidad:'Mexicana',
    nombreComp: function()
    {
       return this.nombre + "" + this.ApellidoP + "" + this.ApellidoM;
    }
},

{ //X-aver
    nombre: 'X-aver',
    ApellidoP:' Anguiano',
    ApellidoM:' de Lara',
    edad:21,
    estatura: '1.77m',
    sexo:'H',
    nacionalidad:'Mexicana',
    nombreComp: function()
    {
       return this.nombre + "" + this.ApellidoP + "" + this.ApellidoM;
    }
},

{ //Charles
    nombre: 'Charles',
    ApellidoP:' Mendoza',
    ApellidoM:' Andrade',
    edad:22,
    estatura: '1.77m',
    sexo:'H',
    nacionalidad:'Mexicana',
    nombreComp: function()
    {
       return this.nombre + "" + this.ApellidoP + "" + this.ApellidoM;
    }
},

{ //Andres
    nombre: 'Andres',
    ApellidoP:' Coronado',
    ApellidoM:' Lazaro',
    edad:22,
    estatura: '1.75m',
    sexo:'H',
    nacionalidad:'Mexicana',
    nombreComp: function()
    {
       return this.nombre + "" + this.ApellidoP + "" + this.ApellidoM;
    }
},

{ //Miriam
    nombre: 'Miriam',
    ApellidoP:' Herrera',
    ApellidoM:' Reina',
    edad:21,
    estatura: '1.60m',
    sexo:'M',
    nacionalidad:'Mexicana',
    nombreComp: function()
    {
       return this.nombre + "" + this.ApellidoP + "" + this.ApellidoM;
    }
},

{ //Celestino
    nombre: 'Celestino',
    ApellidoP:' Gonzalez',
    ApellidoM:' Marquez',
    edad:23,
    estatura: '1.60m',
    sexo:'H',
    nacionalidad:'Mexicana',
    nombreComp: function()
    {
       return this.nombre + "" + this.ApellidoP + "" + this.ApellidoM;
    }
}

];


window.onload= function()
{
    var main= document.getElementById("main");
    var ol=document.getElementById("lista");
    for(var i=0; i< Alumnos.length; i++)
    lista.innerHTML+= '<li>'+ Alumnos[i].nombreComp() + '</li>';
        
};