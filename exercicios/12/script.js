let spaceship = {
    velocity: 0,
    speedUp: function (acceleration) {
        this.velocity += acceleration;
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Digite um nome para sua espaço-nave:");
    spaceship.type = prompt("Digite o tipo da sua espaço-nave: \n 'attack' \n 'defense' \n 'extraction' ");
    spaceship.velocityMax = Number(prompt("Digite a velocidade máxima de sua nave:"));
    //Função 'Number()' espera receber uma string e converte-a em um número.
}

function acelerateSpaceship() {
    let newVelocity = Number(prompt("Quantos km/s de velocidade deseja adicionar? (km/s)"));
    spaceship.speedUp(newVelocity);
    if (spaceship.velocity > spaceship.velocityMax) {
        alert("Operação não realizada pois: \n Velocidade escolhida: " + newVelocity + " km/s"
            + " \n Velocidade máxima: " + spaceship.velocityMax + "km/s");
    }
}

function stopSpaceship() {
    alert("A nave será parada, relatório: \n Nome: " + spaceship.name
        + " \n Tipo: " + spaceship.type
        + " \n Velocidade atual: " + spaceship.velocity + " km/s"
        + " \n Velocidade máxima da nave: " + spaceship.velocityMax + " km/s");
    spaceship.velocity = 0;
}

function showMenu() {
    let newOpcaoMenu;
    do {
        newOpcaoMenu = prompt("Bem-vindo ao menu de controle: \n 1 - Acelerar \n 2 - Parar \n 3 - Sair");
        switch (newOpcaoMenu) {
            case "1":
                acelerateSpaceship();
                break;
            case "2":
                stopSpaceship();
                break;
            case "3":
                let status = confirm("Deseja mesmo sair?");
                if (status == true) {
                    alert("Adeus!")
                }
                break;
        }
    } while (newOpcaoMenu != "3");
}


registerSpaceship();
showMenu();
