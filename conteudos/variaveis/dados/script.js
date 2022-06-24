//Comparação de dados
// IGUAL ('==')

let spaceship = "Golias";
let velocity = 80;

console.log(velocity == 90);
/*Atribuir mais um sinal de igual '==' + '=' = '===' é uma espécie de sinônimo para "idêntico". 
Logo aqui ele também leva em consideração o tipo de dado da variável */
console.log(velocity === "80"); 
console.log(spaceship == "Golias");
console.log("----------------");

// DIFERENTE ('!==')
console.log(velocity !== 90);
console.log(velocity === "80");
console.log(spaceship !== "Golias");
console.log("----------------");

// MAIOR QUE ('>')
console.log(velocity > 90);
console.log(velocity > "80");
// Em strings, o ECMA procura identificar se a palavra comparada tem seu tamanho em caracteres, maior que a da palavra comparada
console.log(spaceship > "Apolo-31");
console.log("----------------");

// MAIOR OU IGUAL QUE ('>=')
console.log(velocity >= 90);
console.log(velocity >= "80");
console.log(spaceship >= "Apolo-31");
console.log("----------------");

// MENOR QUE ('<')
console.log(velocity < 90);
console.log(velocity < "80");
console.log(spaceship < "Apolo-31");
console.log("----------------");

// MENOR OU IGUAL QUE ('<=')
console.log(velocity <= 90);
console.log(velocity <= "80");
console.log(spaceship <= "Apolo-31");
console.log("----------------");