let spaceshipName = "Supernova";
//Variável de escopo GLOBAL (declarada fora de qualquer estrutura);
//Variáveis GLOBAIS podem ser acessadas de qualquer lugar do código

function changeSpaceshipName() {
    spaceshipName = "Elemental";
}

console.log(spaceshipName);

changeSpaceshipName();

console.log(spaceshipName);
console.log("---\n");

function startSpaceshipeVelocity() {
    let spaceshipVelocity = 0;
    //Variável de escopo LOCAL (declarada dentro de uma estrutura);
    //Variáveis LOCAIS só podem ser acessadas dentro da sua própria estrutura
}

startSpaceshipeVelocity();

console.log("spaceshipVelocity is not defined");
console.log("---\n");

function setSpaceshipDetails() {
    let velocity = 50;

    if (velocity == 50) {
        velocity = 60;
        
        var spaceshipName = "Elemental";
        // Declarando com 'var' podemos ter um 'atalho' para declarar a variavel para um escopo exterior ao seu
        let spaceshipType = "Discovery";
    }
    console.log(velocity);
    console.log(spaceshipName);
    console.log("spaceshipType is not defined");
}

setSpaceshipDetails();
console.log("---\n");

function setSpaceshipDetails() {
    console.log(spaceshipName);
    console.log("spaceshipType is not defined");

    var spaceshipName = "Elemental";
    let spaceshipType = "Discovery";

    console.log(spaceshipName);
    console.log("spaceshipType is not defined");
}

setSpaceshipDetails();
console.log("---\n");