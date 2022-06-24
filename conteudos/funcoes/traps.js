/* É preciso levar em conta sempre o contexto da função, esta por exemplo tem o intúito de comprimentar o piloto, 
logo, um valor padrão para o parâmetro 'name' não faz sentido */
function greetPilot(name, message = "Olá"){
    console.log(message + ", " + name);
}

greetPilot("Abraham Lincoln");
console.log("---\n");

function speedUp(velocity, acceleration, unit = "km/s",){
    let newVelocity = velocity + acceleration;
    console.log("Nova velocidade: " + newVelocity + unit);
}

speedUp(50, 50);