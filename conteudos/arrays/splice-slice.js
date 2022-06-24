let spaceshipsNames = ["elementar", "darwin", "artemis", "apollo"];

console.log(spaceshipsNames);
let removedSpaceships = spaceshipsNames.splice(1, 2, "Demeter", "Puller", "Golias");
// Sintaxe: arrayName.splice(pontoDePartida, numeroDeItemsAPartirDestePonto, itemOne, itemTwo, iTemThree);
console.log(spaceshipsNames);
console.log("---\n");

console.log(spaceshipsNames);
let removedSpaceshipsTwo = spaceshipsNames.splice(1, 2);
// O único parâmetro 'obrigatório' é o primeiro.
console.log(spaceshipsNames);
console.log("---\n");

let extractedNames = spaceshipsNames.slice(1, 3);
//Funciona da mesma maneira que o splice, porem ele não mexe no array
//E seu segundo parâmetro não significa items, mas, um ponto final, logo, ele não trará o item desde índice
console.log(extractedNames);
console.log(spaceshipsNames);