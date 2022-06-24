let spaceship = {
    name: "Fênix",
    crewLimit: 7,
    type: "Battle"
}

//Diferentes formas de acessar um objeto:
console.log(spaceship); //Acessa o objeto inteiro
console.log(spaceship.name); //Acessa uma propriedade com a sintaxe objeto.propriedade
console.log(spaceship["name"]); //Também acessa uma propriedade usando o nome da mesma, e não seu índice
console.log("---\n");

//Inserindo propriedades e valores em um objeto
spaceship.engate = false; //objeto.newPropriedade = valor; é semelhante ao push
spaceship['shieldLevel'] = 100;
console.log(spaceship);
console.log("---\n");

let newSpaceship = {};
console.log(newSpaceship);
console.log(typeof(newSpaceship));
console.log("---\n");

let spacialStation = {
    //Padrão de variáveis, cameOnCase =)
    name: "Fox",
    plataformLimit : 10,
    //Casa da maãe joana, bagunça =(
    "new name": "Estelar",
    true: false,
    2: "Descoberta"
}

//console.log(spacialStation.2);
console.log("SyntaxError: missing ) after argument list");
console.log(spacialStation["2"]); //Solução para a gambiarra!