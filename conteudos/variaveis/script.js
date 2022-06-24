// LET

let spaceship = "FE supernova"; //O atributo 'Let' so é usado na hora do 'nascimento' da variavel
console.log(spaceship);

spaceship = "FE Helmet";
console.log(spaceship);
console.log("-----------");

//CONST

const squad = "Estelar";
console.log(squad);

console.log("squad = 'Espacial';");
// Isto não é possível, pois sua criação foi feita com o atributo 'const' de 'constante', logo este valor não pode ser mudado
console.log("TypeError: Assignment to constant variable.");
console.log("-----------");

//VAR

var velocity = 80;
console.log(velocity);

velocity = 25;
console.log(velocity); //Parecido com o LET
console.log("-----------");

let noValue;
console.log(noValue);
//Também é possível criar variáveis sem valor préviamente definido, podendo atribuí-los posteriormente
console.log("-----------");