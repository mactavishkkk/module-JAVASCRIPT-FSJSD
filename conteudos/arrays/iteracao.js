let spaceships = ["demeter", "darwin", "supernova", "fênix", "puller"];

let upCaseSpaceships = spaceships.map( function(itSpaceship, index){
    //O map, e como o forEach, mas, ele tem o poder de mexer nos itens do array
    let upCased = itSpaceship.toUpperCase();
    return upCased;
});

console.log(upCaseSpaceships);
console.log("---\n");

spaceships.forEach(function(itSpaceship, index){
    //ForEach, como o nome sugere, é uma espécie de for, so que mais inteligente
    console.log("Nave: " + itSpaceship + "\nÍndice: " + index);
});

console.log("---\n");

let sevenChars = spaceships.filter( element => { return element.length >= 7});
/*O filter é uma espécie de slice, porém, como o nome sugere, 
podemos passar instrucoes, e se forem atendidas, vao para o array*/
console.log(sevenChars);
console.log("---\n");

let sevenCharsTwo = spaceships.find( element => { return element.length >= 7});
/*O filter é similar ao filter, porem ele retorna o primeiro
item do array que atende as instruções, e não um array fictício como os outros*/
console.log(sevenCharsTwo);
console.log("---\n");

