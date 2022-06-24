let velocity = 50;
let acceleration = 5;

while(velocity <= 100){
    console.log("Acelerando, Estamos a " + velocity + " km/s");
    velocity += acceleration; //Mesma coisa que velocity = velocity + aceleration, "+=" é uma espécie de "abreviação"
}
//Enquando a variavel velocidade for menor ou igual a cem, o bloco continua a ser executado, até que esta afirmação seja falsa

console.log("------------\n");

let constellation = "Andromeda";
let pos = 0;
let constellationLength = constellation.length;

while (pos < constellationLength){
    if(constellation[pos] == "a" || constellation[pos] == "A"){
        console.log(pos);
    }
    pos += 1; //Temos Uma variavel com uma string, temos outra chamada 'pos' para percorrer esta string, e uma outra contendo o tamanho desta string
} //A ideia é simples, percorrer a string e imprimir as posições cujo o caracter específico seja a minusculo ou A maiúculo.