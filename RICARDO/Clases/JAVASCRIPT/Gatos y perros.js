function hacerRuido (animal){
    if(animal.raining) {
        console.log(animal.noise)
    }
}

var dogs = {
    raining: true,
    noise: 'woof',
    makeNoise: function(){
        return hacerRuido(this)
    }
}

var cats = {
    raining: false,
    noise: 'miau!',
    makeNoise: function(){
        return hacerRuido(this)
    }
}

// como hacer que el perro ladre
dogs.makeNoise()

// como hacer que el gato haga miau
cats.raining = true
cats.makeNoise()

// crear la función "desmadreTotal" la cual tenga 2 argumentos: el objeto del perro y el objeto del gato
// la función revisa si la propiedad "raining" es true y si lo es imprime "YA VALIO BARRIGA"

function desmadreTotal(perros, gatos){
    if(dogs.raining && cats.raining){
        console.log("YA VALIO BARRIGA")
    }
}


desmadreTotal(dogs, cats);
// YA VALIO BARRIGA