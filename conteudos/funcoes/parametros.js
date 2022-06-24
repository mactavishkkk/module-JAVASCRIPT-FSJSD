function speedUp(velocity, acceleration){
    let newVelocity = velocity + acceleration;
    console.log("Velocidade atual: " + velocity);
    console.log("Nova velocidade: " + newVelocity);
}

speedUp(20, 5);
console.log("---\n");
speedUp(40, 25);
console.log("---\n");
speedUp(70.5, 50.5);