console.log(speedUp(2, 4));
console.log(dobleSpeed(2)); // dobleSpeed is not defined


let dobleSpeed = function (velocity){
    return velocity * 2;
}

let newVelocity = dobleSpeed(40);
console.log(newVelocity);

console.log("---\n");

function speedUp(velocity, acceleration){ //Funções declaradas de forma tradicional, são lidas primeiramente do que as de forma anônima
    return velocity + acceleration;
}