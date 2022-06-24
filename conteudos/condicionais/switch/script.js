//CASO (SWITCH)

let velocity = 110;

switch(velocity * 2){
    case 100:
        console.log("Sua velocidade é 100km/s");
    break;
    case 160:
        console.log("Sua velocidade é 160km/s");
    break;
    case 200:
        console.log("Sua velocidade é 200km/s");
    break;
    default:
        console.log("Velocidade não identificada");
}

console.log("--------------\n")

switch(velocity){
    case 40:
    case 60:
    case 90:
        console.log("Velocidade aceitável")
    break;
    case 110:
    case 140:
    case 180:
        console.log("Velocidade alta, mas aceitável");
        // Depois do switch encontrar-se como o primeiro case, ele executará todos os outros ate que ache o primeiro break
    default:
        console.log("Velocidade não identificada.");
}
console.log("--------------\n")

 //STRINGS

let spaceship = "Elemental";

switch(spaceship){
    case "Golias":
        console.log("Resistência");
    break;
    case "Raptor":
        console.log("Velocidade");
    break;
    case "Enterprise":
        console.log("Frota estelar");
    break;
        default:
    console.log("Nave comum")
}
console.log("--------------\n")

switch(spaceship){
    case "Golias":
        console.log("Resistência");
    case "Elemental":
        console.log("Atack");
    case "Helmet":
        console.log("Defesa");
    case "Enterprise":
        console.log("Frota estelar");
    case "Frontier":
        console.log("Infantaria")
        default:
        console.log("Nave comum")
}