let nome = prompt("Qual o nome desta nave?");
let dobras = 0;

let opcao = confirm("Deseja entrar em uma dobra espacial?");

while (opcao == true) {
    dobras += 1
    opcao = confirm("Deseja entrar em mais uma dobra espacial?");
}

alert("A nave " + nome + " entrou em " + dobras + " dobras!");