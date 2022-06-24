class spacialStation {
    constructor(name, plataformMax) { //O 'constructor', se assemelha a uma funcao por exemplo, onde passamos parâmetros 
        //que receberao futuramente valores do usuário
        this.name = name;
        this.plataformMax = plataformMax;
    }
}

let observatory = new spacialStation("Observatório", 40);
console.log(observatory);
console.log("---\n");

class spaceship {
    constructor(name, type = "Descobetar"){
        this.name = name
        this.type = type
    }
}

let darwin = new spaceship("Darwin");
let helmet = new spaceship("Helmet", "Batalhar");

console.log(darwin);
console.log(helmet);