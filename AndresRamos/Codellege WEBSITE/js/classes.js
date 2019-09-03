function Animal(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function () {
        if (this.raining) {
            console.log(this.noise);
        }
    }
}

// var dogs = {
//     raining: true,
//     noise: 'woof',
//     makeNoise: function () {
//         return hacerRuido (this);
//     }
// };
// var cats = {
//     raining: false,
//     noise: 'meow',
//     makeNoise: function () {
//         return hacerRuido(this);
//     }
// };

// dogs.makeNoise();

// cats.raining = true;
// cats.makeNoise();

function desmadreTotal(perros, gatos) {
    if (perros.raining == true && gatos.raining == true) {
        console.log('YA VALIO BARRIGA!!');
        console.log('Hasta la vista baby. ');
    }
}

var cat = new Animal(true, 'Meow!');
var dog = new Animal(false, 'Woof!');

if (dog.raining == false)
    dog.raining = true;

cat.makeNoise();
dog.makeNoise();
desmadreTotal(dog, cat);

function Character (sName, sProfession, sGender, sAge, lStrength, lHP) {
    name = sName,
    profession = sProfession,
    gender = sGender,
    age = parseInt(sAge),
    strength = parseInt(lStrength),
    hitPoints = parseInt(lHP),
    show = function () {
        console.log('I am ' + name + ',I work as ' + profession + ',I am a ' + gender + 'I am ' + age + ' y.o' );
        console.log('Strength: ' + strength + '\n Hit Points ' + hitPoints);
    }
    isAlive = function (){
        // if (hitPoints > 0)
        //     console.log(name + ' is alive!');
        // else
        //     console.log(name + ' is dead!');
        return Boolean (this.hitPoints > 0)
    }
    attack = function (enemy){
        enemy.hp = enemy.hp - strength;
    }
    levelUp = function(){
        age += 1; 
        fuerza += 5, 
        hp += 25
    }
};
