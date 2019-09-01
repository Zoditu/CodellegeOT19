/*
var _console = {
    log: function(algo){
        //to do
    }
}
_console.log('algo');
*/

var Alumnos = [
    {//celestino
        nombre:'celestino',
        apellidos:'gonzalez',
        edad:66,
        sexo:'h',
        altura:160,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//itzel
        nombre:'itzel',
        apellidos:'alonso',
        edad: 22,
        sexo: 'm',
        altura: 170,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//lili
        nombre:'liliana',
        apellidos:'hernandez',
        edad: 19,
        sexo: 'm',
        altura: 170,
        nacionalidad: 'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//luis
        nombre:'luis',
        apellidos:'gonzalez',
        edad: 27,
        sexo: 'h',
        altura: 182,
        nacionalidad: 'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        } 
    },
    {//aldo
        nombre:'aldo',
        apellidos:'matias',
        edad: 23 ,
        sexo: 'h',
        altura: 177,
        nacionalidad: 'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//aaron
        nombre:'aaron',
        apellidos:'arredondo',
        edad: 20,
        sexo: 'h',
        altura: 174,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//karla
        nombre:'karla',
        apellidos:'gonzalez',
        edad: 20,
        sexo: 'm',
        altura: 148,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//natalia
        nombre:'natalia',
        apellidos:'rodriguez',
        edad: 22,
        sexo: 'm',
        altura: 156,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//andy
        nombre:'andy',
        apellidos:'escobar',
        edad: 19,
        sexo: 'h',
        altura: 160,
        nacionalidad:'colombiana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//richard
        nombre:'richard',
        apellidos:'webber',
        edad: 20,
        sexo: 'h',
        altura: 170,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        }
    },
    {//javo
        nombre:'javo',
        apellidos:'anguiano',
        edad: 21,
        sexo: 'h',
        altura: 177,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        } 
    },
    {//charles
        nombre:'charles',
        apellidos:'mendoza',
        edad: 22,
        sexo: 'h',
        altura: 178,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        } 
    },
    {//andrew
        nombre:'andrew',
        apellidos:'coronado',
        edad: 22,
        sexo: 'h',
        altura: 175,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        } 
    },
    {//miriam
        nombre:'miriam',
        apellidos:'herrera',
        edad: 21,
        sexo: 'm',
        altura: 165,
        nacionalidad:'mexicana',
        mostrar: function(){
            console.log(this.nombre + ' '+ this.apellidos);//acceso a propiedades del objeto
            console.log('edad:'+ this.edad);
        } 
    }
];




window.onload = function(){                     //todo se ejecuta despues de haber cargado la pagina
    var main = document.getElementById('main'); //me traigo el elemento
    for( var i=0; i<Alumnos.length; i++){
       main.innerHTML += '<h4>' + Alumnos[i].nombre + ' ' + Alumnos[i].apellidos + '</h4>'
    }
}
        

