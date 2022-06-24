let spaceships = ["Colossus", "Elemental", "Helmet"];
console.log(spaceships);
console.log("---\n");

spaceships.push("Apollo");// Push, do ingles 'empurrar' ele irá adicionar o item passado como parametro ao fim do array
console.log(spaceships);
console.log("---\n");

let removeSpaceship = spaceships.pop();// Pop, do ingles 'estourar' ele irá remover o último item do array
console.log("Item 'estourado' " + removeSpaceship);// Caso eu retorne isto para uma variável, a variável receberá o item do array que foi removido
console.log(spaceships);
console.log("---\n");

spaceships.unshift("Supernova");// unshift é similar ao push, porem ele irá adicionar o item ao primeiro lugar do array
console.log(spaceships);
console.log("---\n");

let removeSpaceshipThree = spaceships.shift();// Shift é similar ao pop, porem ele irá remover o primeiro item do array
console.log("Item removido " + removeSpaceshipThree);// Caso eu retorne isto para uma variável, assim como o pop, ele irá atribuir o item removido a uma variável
console.log(spaceships);
console.log("---\n");

console.log("O tamando do seu array é de " + spaceships.length + " posições");// A funcao length retorna o tamanho em posições do array

let elementalPos = spaceships.indexOf("Elemental");//Uma função que procurará a posição do item passado como parâmetro
console.log("Este item econtra-se na posição " + elementalPos);
console.log("---\n");

let elementalPosTwo = spaceships.indexOf("Golias");// Caso não o encontre- retornará '-1', que simboliza a falha em encontra-lo
console.log("Este item não foi encontrado (" + elementalPosTwo + ")");
console.log("---\n");