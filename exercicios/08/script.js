let nome = prompt("Qual o nome da nave que deseja inverter?");
let newNome = "";

//Antes eu precisar percorrer do primeiro caracter 0(S) até o último 9(a), assim, imprimidando nesta ordem
//Então, para inverter, basta fazer o contrário, ir do caracter 9(a) até o caracter 0(S)

// S u p e r n o v a
// 0 1 2 3 4 5 6 7 8

for (let i = nome.length -1; i >= 0; i--){
    if(nome[i] == "n"){
        break;
    } else {
        newNome += nome[i];
    }
}

alert("O nome original de sua nave era " + "'" + nome + "'" + ", agora, invertido, passou a ser " + "'" + newNome + "'");