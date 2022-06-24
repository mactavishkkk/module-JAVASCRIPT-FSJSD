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
    speedUp(){
        console.log("Naves como esta, de transporte, só aceleram em 1 km/s");
        this.currentVelocity += 1;
    }
    //Talvez, em casos específicos, queremos herdar um método do pai para nosso filho
    //Mas talvez, nosso filho precise do método um pouco diferente do que o do pai, é ai que sobrescrevemos o método desta forma:
}

let arthemis = new transportSpaceship("Arthemix", 4, 100);
console.log(arthemis);
console.log("---\n");
arthemis.speedUp();
console.log("---\n");
