let spaceship = "Helmet";
let newSpaceship = "";

/* No for podemos fazer mais na área de expressao, aqui declaramos uma variavel para percorrer uma string, e toda vez que o bloco terminar de ser executado ele será iterado 
com mais um, usando outra abreviação" 'i++' que é a mesma coisa que 'i += 1' que também é a mesma coisa que 'i = i + 1' */

for(let i = 0; i < spaceship.length; i++){ 
    if(spaceship[i] == "e"){
        newSpaceship += "i"
    }else {
        newSpaceship += spaceship[i];
    }
}

console.log(spaceship);
console.log(newSpaceship);