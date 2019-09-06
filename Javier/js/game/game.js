//funcion para reutizar el sonido del animal
function hacerRuido(animal){
    if(animal.raining){
        console.log(animal.noise)
    }
}

var dogs = {
    raining: true,
    noise: 'woof!',
    makeNoise: function() {
        return hacerRuido(this)
    }
};

var cats = {
    raining: false,
    noise: 'meow!',
    makeNoise: function() {
        return hacerRuido(this)
    }
};

//Perro ladre
dogs.makeNoise();
//Gato ladre
cats.raining = true;
cats.makeNoise();

//crear funcion desmadreTotal la cual tenga 2 argumentos: el objeto perro y el objeto gato
//la funcion revisa si la propiedad "raining" es true y si lo es imprime "ya valio barriga"
function desmadreTotal(perros, gatos){
    if(perros.raining && gatos.raining){
        console.log('YA VALIO BARRIGA')
    }
}

desmadreTotal(dogs, cats)