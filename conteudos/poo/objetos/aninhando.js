let spaceship = {
    name: "apollo",
    type: "battle",
    crew: ["Cap. Silva", "Ana Júlia", "Thiago"]
}

console.log(spaceship);
spaceship.crew.push("Ten. Fernanda");//Em objetos de arrays, podemos ter: objeto.arrayName.function();
console.log(spaceship);
console.log("---\n");

let spaceshipS = [
    { name: "Elemental", crewLimit: 10},
    { name: "Apollo", crewLimit: 15},
    { name: "Supernova", crewLimit: 20},
]

console.log(spaceshipS);
console.log("\n");
console.log(spaceshipS[1].name);//Em arrays de objetos podemos ter: array[indiceObjeto].propriedade
console.log(spaceshipS[1].crewLimit);
console.log("\n");

spaceshipS.forEach(spaceship => {
    console.log(spaceship.name + " possui um limite de " + spaceship.crewLimit + " tripulantes");
});
console.log("\n");

let spaceshipSS ={
    name: "golias",
    crewLimit: 20,
    captain: {
        name: "Jack Sparry",
        age: 37
    }
}

console.log(spaceshipSS.captain.name);//Em objetos de objetos, podemos ter: objeto.objeto.propriedade