let distanceLY = prompt("Digite a distância em anos luz:");
let opcao = prompt("Escolha umas das unidade de conversão: \n 1 - Parsec(pc) \n 2 - Unidade astronômica(au) \n 3 - Quilômetros(km) \n ");
let opcaoDetalhada = "";

switch(opcao){
    case "1":
        let pc = distanceLY * 0.306601;
        opcaoDetalhada = "Parsec(pc)";
        alert("A distância em inicial era de " + distanceLY + " anos-luz. Logo, sua conversão para " + opcaoDetalhada + " é de " + pc);
    break;
    case "2":
        au = distanceLY * 63241.1;
        opcaoDetalhada = "Unidade Astronômica(au)";
        alert("A distância em inicial era de " + distanceLY + " anos-luz. Logo, sua conversão para " + opcaoDetalhada + " é de " + au);
    break;
    case "3":
        km = distanceLY * 9.5 * Math.pow(10, 12);
        opcaoDetalhada = "Quilômetros(km)";
        alert("A distância em inicial era de " + distanceLY + " anos-luz. Logo, sua conversão para " + opcaoDetalhada + " é de " + km);
    break;
    default:
        alert("A distância em inicial era de " + distanceLY + " anos-luz. Não conseguimos identificar uma unidade de conversão válida, logo ela não será possível");
}