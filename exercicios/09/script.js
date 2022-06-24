let velocidade = 0;
let aceleracao = 5;

let nomeNave = prompt("Digite o nome da sua Espaço-nave: ");
let newOpcaoMenu;

function menuControle() {
    let opcaoMenu;
    while (opcaoMenu != "1" && opcaoMenu != "2" && opcaoMenu != "3" && opcaoMenu != "4"){
        opcaoMenu = prompt("Menu de controle: \n 1 - Acelerar a nave em 5 km/s \n 2 - Desacelerar em 5 km/s \n 3 - Imprimir dados de bordo \n 4 - Sair do programa");
    }
    //Isto fara com que o menu seja exibido para entradas fora do escopo datado.
    
    return opcaoMenu;
}

function acelerar(velocidade) {
    let newVelocidade = velocidade + aceleracao;
    alert("Adicionando " + aceleracao + " km/s a velocidade atual.");
    return newVelocidade;
}

function desacelerar(velocidade) {
    let newVelocidade = velocidade - aceleracao;
    if(newVelocidade < 0){
        newVelocidade = 0;
    }
    alert("Removendo " + aceleracao + " km/s a velocidade atual.");
    return newVelocidade;
}

function imprimirDados(nomeNave, velocidade) {
    alert("Dados de bordo: \n Nome da espaço-nave: " + nomeNave + "\n Velocidade atual: " + velocidade + " km/s");
}

function sair(){
    alert("Até a próxima!");
}

do {
    newOpcaoMenu = menuControle();
    switch(newOpcaoMenu){
        case "1":
            velocidade = acelerar(velocidade);
            break;
        case "2":
            velocidade = desacelerar(velocidade);
            break;
        case "3":
            imprimirDados(nomeNave, velocidade);
            break;
        case "4":
            sair();
            break;
    }
} while(newOpcaoMenu != "4"); /* Isto fará com que ainda seja exibido para as outras entradas
//Já que a entrada '4' encerrará o programa.*/