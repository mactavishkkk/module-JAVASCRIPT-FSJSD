class spaceship {
    constructor(name){
        this.name = name
        this.velocity = 0
    }

    speedUp(acceleration){
        this.velocity += acceleration;
    }
}

let arthemis = new spaceship("Artemis");
console.log(arthemis);

arthemis.speedUp(10);
arthemis.speedUp(15);
console.log(arthemis);