// var dogs={
//     raining:true;
//     noise: "woof!";
//     makeNoise:function() {
//         if(this.raining)
//         {
//             console.log(this.noise)
//         }
//     }
// }

// var cats={
//     raining:false;
//     noise: "miaw!";
//     makeNoise:function() {
//         if(this.raining)
//         {
//             console.log(this.noise)
//         }
//     }
// }

//------------------simplificado -------------------------------

function hacerRuido(animal)
{
    if (animal.raining)
    {
        console.log(animal.noise)

    }
}

var dogs={
    raining:true;
     noise: "woof!";
     makeNoise:function(){
         restun hacerRuido(this)
     }
}

var cats={
    raining:false;
     noise: "miaw!";
     makeNoise:function(){
         restun hacerRuido(this)
     }
}



dogs.makeNoise()
cats.raining=true;
cats.makeNoise()


//crear la funcion "desmadretotal" la cual tenga 2 argumentos: el objeto del perro y el objeto del gato
//la funcion revisa si la propiedad "roaining " es true y si ñp es imprime "Ya valio Barriga"
function desmadreTotal(perro,gatos)
{
    if(perro.raining&& gatos.raining)
    {
        console.log("Ya valio Bar..")
    }
}



desmadreTotal(dogs,cats);
