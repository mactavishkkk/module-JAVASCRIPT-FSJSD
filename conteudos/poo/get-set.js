class transportSpaceship {
    constructor(name){
        this.name = name;
        this.currentVelocity = 0;
    }
    set velocity(newVelocity){// Com o set', eu posso criar validações dentro do próprio método da classe
        if(newVelocity > 120){
            this.currentVelocity = 120;
        } else {
            this.currentVelocity = newVelocity;
        }
    }
}

let apollo = new transportSpaceship("Apollo");

apollo.velocity = 130;
console.log(apollo);
console.log("---\n");

class resourceProcessStation{
    constructor(name, monthProcessLoad){
        this.name = name;
        this.monthProcessLoad = monthProcessLoad;
    }
    get weekProcessLoad(){ //Muito útil quando se há situações onde o valor da variável irá mudar
        return this.monthProcessLoad / 4; //Dependendo do seu método
    }
}

let darwin = new resourceProcessStation("Darwin", 100);
console.log(darwin, darwin.weekProcessLoad);
console.log("---\n");