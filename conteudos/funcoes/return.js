function speedUp(velocity, acceleration){
    let newVelocity = velocity + acceleration;
    console.log("Nova velocidade: " + newVelocity);
    return newVelocity;
}

speedUp(100, 20);