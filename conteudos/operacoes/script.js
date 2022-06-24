// Adição 

console.log(5 + 5);
console.log(-5 + 5);
console.log(2.5 + 5);
console.log("----------------");

// Subtração 

console.log(5 - 5);
console.log(-5 - 5);
console.log(2.5 - 5);
console.log("----------------");

// Multiplicação 

console.log(5 * 5);
console.log(-5 * 5);
console.log(2.5 * 5);
console.log("----------------");

// Divisão 

console.log(5 / 5);
console.log(-5 / 5);
console.log(2.5 / 5);
console.log("----------------");

// Módulo  // Um pouco diferente de uma divisão, este operador retorna o RESTO de uma divisão 

console.log(5 % 5);
console.log(-5 % 5);
console.log(2.5 % 5);
console.log("----------------");

// Concatenação  // Como a soma, porem, se tratando de strings, o que realmente acontece é a união.

console.log("5" + "5");
console.log("-5" + "5");
console.log("2.5" + "5");
console.log("----------------");

// Extração de letras por índice 

console.log("Planeta terra");
console.log("Planeta terra" [2]); // Lembrando que se tratando de indices, o primeiro lugar recebe "0" e não "1" 
console.log("----------------");

// Extração do tamanho de uma string 

console.log("Planeta terra");
console.log("Planeta terra".length); // Lembrando que se tratando de indices, o primeiro lugar recebe "0" e não "1" 
console.log("----------------");

// OBS: Javascript, assim como a aritmética, o ECMA possui uma ordem hierárquica de execução, veja: 

console.log("Planeta terra"[3]);
console.log(("Planeta" +  "terra")[3]);
console.log("Planeta " +  "terra"[3]);
console.log(5 * 5 + 1);
console.log(5 * (5 + 1));
console.log("----------------");

// Exemplo da tipagem fraca do Javascript

console.log("Eu vivo no planeta terra há" + 30 + " anos."); // Eu consigo somar 'Eu vivo no...' do tipo 'string' ao valor inteiro '30' sem nenhum erro.
console.log("----------------");

