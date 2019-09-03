function Character(sName, sProfession, sGender, sAge, lStrength, lHP) {
    this.name = sName,
        this.profession = sProfession,
        this.gender = sGender,
        this.age = parseInt(sAge),
        this.strength = parseInt(lStrength),
        this.hitPoints = parseInt(lHP),
        this.show = function () {
            console.log('I am ' + this.name + ',I work as ' + this.profession + ',I am a ' + this.gender + ',I am ' + this.age + ' y.o');
            console.log('Strength: ' + this.strength + '\nHit Points: ' + this.hitPoints);
        }
    this.isAlive = function () {
        // if (hitPoints > 0)
        //     console.log(name + ' is alive!');
        // else
        //     console.log(name + ' is dead!');
        return Boolean(this.hitPoints > 0)
    }
    this.attack = function (enemy) {
        enemy.hitPoints = enemy.hitPoints - this.strength;
    }
    this.levelUp = function () {
        this.age += 1;
        this.fuerza += 5,
        this.hp += 25
    }
};

var chewbacca = new Character('Chewbacca', 'Unemployed', 'N/A', '20', '400', '2000');
console.log(chewbacca.name + ' created');
chewbacca.show();

var anakin = new Character('Anakin', 'General', 'Man', '50', '500', '1500');
console.log(anakin.name + ' created');
anakin.show();

while (chewbacca.isAlive && anakin.isAlive) {
    console.log('Fight start!');
    chewbacca.attack(anakin);
    console.log(anakin.hitPoints);
    anakin.attack(chewbacca);
    console.log(chewbacca.hitPoints);
    if (anakin.hitPoints <= 0)
        anakin.isAlive = false;
    else if (chewbacca.hitPoints <= 0)
        chewbacca.isAlive = false;
    
    if (anakin.isAlive == false) {
        console.log('The winner is ' + chewbacca.name);
        chewbacca.levelUp();
        break;
        
    } else if (chewbacca.isAlive == false) {
        console.log('The winner is ' + anakin.name);
        anakin.levelUp();
        break;
    }
}