 let dataPartidaUsuario = prompt("Digite a data de partida (DD/MM/YYYY)");

let dataPartida = moment(dataPartidaUsuario, "DD/MM/YYYY");
let hoje = moment();

let dataDifierenca = hoje - dataPartida;

let opcao = prompt("Escolha o formato do tempo a ser exibido\n 1 - Segundos \n 2 - Minutos \n 3 - Horas \n 4 - Dias")

if(opcao == "1"){
    let seconds = Math.round(dataDifierenca / 1000);
    alert("Tempo de vôo: " + seconds + " segundos");
} else if (opcao == "2"){
    let minutes = Math.round(dataDifierenca / 1000 / 60);
    alert("Tempo de vôo: " + minutes + " minutos");
} else if (opcao == "3"){
    let hours = Math.round(dataDifierenca / 1000/ 3600);
    alert("Tempo de vôo: " + hours + " horas");
} else if (opcao == "4"){
    let days = Math.round(dataDifierenca / 1000 / 3600 / 24);
    alert("Tempo de vôo: " + days + " dias");
} else {
    alert("Opção inválida!");
}

