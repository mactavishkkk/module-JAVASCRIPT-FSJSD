let spaceship = { //Em um nível mais baixo de objetos temos
    name: "Apollo", //Propriedades que guardam valores sendo chamadas de ATRIBUTOS, que segundo o paradigma, se assemelha as características deste objeto
    type: "Extraction",
    maxCrew: 20,
    turnOn: function(){ //E aqui, podemos chamar isto de MÉTODOS, que se assemelhas as ações que este objetos pode vir a executar
        console.log("Preparando propulsão");
        console.log("Ligando computador de bordo")
    }
}

spaceship.velocity = 0;

spaceship.speedUpp = function(spaceshipToSpeedUp, acceleration) {
    spaceshipToSpeedUp.velocity += acceleration;
}

console.log(spaceship);
spaceship.speedUpp(spaceship, 10);
console.log("---\n");
console.log(spaceship);

//Isto é uma espécie de gambiarra', pois estamos passando o objeto, como um parametro de um metodo dele mesmo, o que gera uma redundancia desnecessária

/*
SOLUÇÃO (THIS) - Usando para referênciar o próprio objeto

spaceship.speedUpp = function(acceleration) {
    this.velocity += acceleration;
}

console.log(spaceship);
spaceship.speedUpp(10);
console.log("---\n");
console.log(spaceship);
*/