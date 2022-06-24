let nome = prompt("Qual o nome da nave que deseja criptografar?");
let caracter = prompt("Qual caracter de " + "'" + nome + "'" + " deseja extrair?");

let newCaracter = prompt("Qual caracter deseja adicionar?");
let newNome = "";

for(i = 0; i < nome.length; i++){
    if(nome[i] == caracter){
        newNome += newCaracter;
    } else {
        newNome += nome[i];
    }
}

alert("Agora sua nave se chama " + "'" + newNome + "'");