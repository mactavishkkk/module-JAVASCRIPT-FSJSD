let velocity = 150;

//SE (IF)

if (velocity < 100) {
    console.log("Estamos em uma velocidade ACEITÁVEL");
}
console.log("---------------------\n")

//SE NAO (else)

if (velocity > 100) {
    console.log("Estamos em uma velocidade ACEITÁVEL");
} else {
    console.log("Entrando em uma velocidade de RISCO!")
}
console.log("---------------------\n")

//SE SE NAO (else if)

if (velocity < 40) {
    console.log("Velocidade baixa");
} else if (velocity <= 100) {
    console.log("Entrando em uma velocidade de RISCO!");
} else {
    console.log("Velocidade de RISCO!");
}
console.log("---------------------\n")

//BONUS
(velocity > 100) ? console.log("Velocidade MAIOR que 100") : console.log("Velocidade MENOR que 100");