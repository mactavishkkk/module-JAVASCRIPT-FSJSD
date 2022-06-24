let velocity = 110;
let acceleration = 5;

do {
    console.log("Acelerando, Estamos a " + velocity + " km/s");
    velocity += acceleration;
} while (velocity <= 100);
/* A diferença aqui é que o do while só avalia a condição para o bloco de código ser executado no fim da leitura,
ou seja, ele executará independentemente da expressão pelomenos 1x o bloco */