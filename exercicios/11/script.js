const spaceshipsInfo = [
    ["Fênix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
    //A plataforma de engate da nave é seu índice +1
];


//let crew = console.log(spaceshipsInfo[0][1]);

let nineCrew = spaceshipsInfo.filter(item => {
    return item[1] > 9;
}).map(item => {
    return item[0];
});


let numberPlataform = spaceshipsInfo.findIndex(item => {
    return item[2] == false;
});


let namesUpCased = spaceshipsInfo.map(item => {
    return item[0].toUpperCase();
});

let message = "Eis as naves com capacidade superior a 9 tripulantes: " + nineCrew.join(", "); 
message += "\nTambém temos as naves com seus engates pendentes: " + (numberPlataform + 1); 
message += "\n E por fim, o nomes das naves BEM destacados: " + namesUpCased.join(", ");

alert(message);