class spaceship{
    constructor(name, maxCrew, maxRecommendedVelocity){
        this.name = name;
        this.maxCrew = maxCrew;
        this.maxRecommendedVelocity = maxRecommendedVelocity;
        this.currentVelocity = 0;
    }
    speedUp(acceleration){
        this.currentVelocity += acceleration;
        if(this.currentVelocity > this.maxRecommendedVelocity){
            console.log("Velocidade máxima ultrapassada, reduza imediatamente!")
        }
    }
}

class transportSpaceship extends spaceship{
    constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWeigth) {
        /*
        Para reaproveitar o constructor do pai, nó podemos inves de:
        this.name = name;
        this.maxCrew = maxCrew;
        this.maxRecommendedVelocity = maxRecommendedVelocity;
        Nós podemos então: 
        */
       super(name, maxCrew, maxRecommendedVelocity);
       this.maxLoadWeigth = maxLoadWeigth;
    }
    speedUp(acceleration){
        //Aqui podemos fazer a mesma coisa
        acceleration /= 2;
        console.log("Incrementando a velocidade em: " + acceleration + " km/s");
        super.speedUp(acceleration);
    }
}

let arthemis = new transportSpaceship("Arthemis", 15, 100, 150);
console.log(arthemis);
console.log("---\n");

arthemis.speedUp(210);