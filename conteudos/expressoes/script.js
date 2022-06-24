// TABELA VERDADE
//E (AND)
console.log("TABELA E (AND)\n");

let spaceship = "Elemental";
let velocity = 20;

console.log(spaceship.length == 9 && velocity > 15);
console.log ("-------------");
// 1 and 1 = 1

console.log(velocity > 10 && velocity < 19);
console.log ("-------------");
// 1 and 0 = 0

console.log(velocity < 17 && spaceship == "Elemental");
console.log ("-------------");
// 0 and 1 = 0

console.log(spaceship == "Golias" && velocity > 50);
console.log ("-------------\n");
// 0 and 0 = 0

//OU (OR)
console.log("TABELA OU (OR)\n");

console.log(spaceship.length == 9 || velocity > 15);
console.log ("-------------");
// 1 or 1 = 1

console.log(velocity > 10 || velocity < 19);
console.log ("-------------");
// 1 or 0 = 1

console.log(velocity < 17 || spaceship == "Elemental");
console.log ("-------------");
// 0 or 1 = 1

console.log(spaceship == "Golias" || velocity > 50);
console.log ("-------------\n");
// 0 or 0 = 0

//NAO (NOT)
console.log("TABELA NAO (NOT)\n");

console.log(!(velocity > 15));
console.log ("-------------");
// 1 = 0

console.log(!(spaceship == "Elemental"));
console.log ("-------------");
// 1 = 0

console.log(!(velocity > 50));
console.log ("-------------");
// 0 = 1

console.log(!(spaceship == "Golias"));
console.log ("-------------\n");
// 0 = 1

//BONUS
console.log("BONUS\n");
console.log(!(velocity > 25 && spaceship == "Elemental") || (velocity - 3 == 17 && spaceship.length + 1 > 15));
// !0 and 1 = 0(1) ou 1 and 0 = 0
// 1 or 0 = 1