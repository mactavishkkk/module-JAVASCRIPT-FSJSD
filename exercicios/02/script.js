let nomeVelha = prompt("Qual o nome da pessoa mais velha?");
let idadeVelha = prompt("Qual a idade da pessoa mais velha?");
let nomeNova = prompt("Qual o nome da pessoa mais nova?");
let idadeNova = prompt("Qual a idade da pessoa mais nova?");

let diferenca = idadeVelha - idadeNova;

alert(
    "A pessoa mais velha atende por " + nomeVelha + " e possui " + idadeVelha + " anos.\n" +
    "A pessoa mais nova atende por " + nomeNova + " e possui " + idadeNova + " anos.\n\n" + 
    "E a diferença entre suas idades é de " + diferenca + " anos!"
);