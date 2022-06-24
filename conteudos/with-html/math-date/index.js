console.log("Módulos Math e Date");
console.log("---\n");

console.log(Math.pow(5, 3)); //Usado para ser calculado funções mais complexas de aritimetica
console.log("---\n");

console.log(Math.PI);
console.log("---\n");

console.log(Math.sqrt(9));
console.log("---\n");

let myBirthday = new Date(2019, 03, 29); //A classe date, tem como static o primeiro mes como '00', assim como índice de arrays, por exemplo
console.log(myBirthday);
console.log("---\n");

let today = Date.now(); //INTERESSANTE, ele retorna a data de hoje em milissegundos, mas não só isso, este número é a quantidade de milisegundo que se passaram desde a data base do ECMA até o momento atual
console.log(today); // Data base = 01 de janeiro de 1970;
console.log("---\n");