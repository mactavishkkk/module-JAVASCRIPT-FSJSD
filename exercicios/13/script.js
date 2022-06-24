let spaceshipsArray = new Array();

class spaceshipInfo {
    constructor(name, crewMax) {
        this.name = name;
        this.crewMax = crewMax;
        this.hitch = false;
        this.doors = false;
    }

    newHitch() {
        this.hitch = true;
        this.doors = true;
    }
}

function createSpaceship() {
    let name = prompt("Digite o nome da sua nave:");
    let crewMax = Number(prompt("Digite a quantidade máxima de tripulantes da sua nave:"));
    let spaceship = new spaceshipInfo(name, crewMax);
    return spaceship;
}

function printSpaceship(spaceships) {
    let spaceshipList;
    spaceships.forEach((spaceship, index) => {
        spaceshipList += (index + 1) + " - " + spaceship.name + " (" + spaceship.crewMax + " tripulantes)\n"
    });
    alert(spaceshipList);
}

function showMenu() {
    let newOpcaoMenu;
    do {
        newOpcaoMenu = prompt("Bem-vindo ao menu de controle: \n 1 - Realizar engate \n 2 - Imprimir naves \n 3 - Sair");
        switch (newOpcaoMenu) {
            case "1":
                let spaceshipToAdd = createSpaceship();
                spaceshipToAdd.newHitch();
                spaceshipsArray.push(spaceshipToAdd);
                break;
            case "2":
                printSpaceship(spaceshipsArray);
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

showMenu();