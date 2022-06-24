class resourceProcessStation{
    constructor(name, monthProcessLoad){
        this.name = name;
        this.monthProcessLoad = monthProcessLoad;
    }
    static calculateProcessHours (monthProcessLoad, hours){//Metodos estáticos representam padrões, que muito improvável que mudem
        return monthProcessLoad / 720 * hours //Como este cálculo
    }
}

let totalProcess = resourceProcessStation.calculateProcessHours(500, 6);
console.log(totalProcess);
console.log("---\n");

let processor = new resourceProcessStation("Gaia", 2000);
//processor.calculateProcessHours(processor.monthProcessLoad, 10);
console.log("calculateProcessHours is a not function");
console.log("---\n");

//Alternativa
let totalProcessed = resourceProcessStation.calculateProcessHours(processor.monthProcessLoad, 10);
console.log(totalProcessed);
console.log("---\n");

class spaceship{
    static get desacceleration(){
        return 0.25;
    }

    constructor(name){
        this.name = name;
        this.currentVelocity = 0;
    }
    speedUp(acceleration){
        this.currentVelocity += (acceleration * (1 - spaceship.desacceleration));
    }
}

let apollo = new spaceship("Apollo");
apollo.speedUp(100);
console.log(apollo);