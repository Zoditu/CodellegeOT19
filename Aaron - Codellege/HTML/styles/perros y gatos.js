function hacerRuido (animal) {
    if (animal.raining) {
        console.log(animal.noise)
    }
}

var dogs = {
    raining: true,
    noise: 'woof',
    makeNoise: function () {
        return hacerRuido (this);
        }
    }


var cats = {
    raining: false,
    noise: 'meow',
    makeNoise: function () {
        return hacerRuido (this);
    }
}

//mandar a llamar funciones
dogs.makeNoise();

cats.raining = true;
cats.makeNoise();

//Crear la funcion "desmadre total" la cual tenga 2 argumentos: el objeto del perro y el objeto del gato
//la funcion revisa si la propiedad "raining" es true y si lo es imprime "ya valio barriga"

function desmadreTotal (dogs, cats) {
    if (dogs.raining && cats.raining) {
        console.log("Ya valió barriga");
    }
}

desmadreTotal(dogs, cats);