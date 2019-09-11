function hacerRuido(animal){
    if(animal.raining){
        console.log(animal.noise);
    }
}

var dogs={
    raining: true,
    noise: "wolf",
    makeNoise: function () {
       return hacerRuido(this)
    }
}

var cats={
    raining: false,
    noise: "miau",
    makeNoise: function () {
        return hacerRuido(this)
    }
}

// como hacer ladrar el perro
dogs.makeNoise();

// hacer que el gato 
cats.raining= true;
cats.makeNoise();

// crear una funcion "desmadretotal" la cual tenga 2 argumentos: el objeto dle perro y el objeto  del gato 
// La funcion revisa si la propiedad "raining es true y si lo es imprime "ya valio barriga"

function desmatretotal( dogs, cats){
  if(dogs.raining&& cats.raining){
    console.log("Ya valio barriga");
  }
}
desmatretotal(dogs, cats);