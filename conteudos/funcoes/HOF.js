function doubleVelocity (velocity, printer) {
    console.log("Entrei em doubleVelocity");
    let newVelocity = velocity * 2;
    
    printer(newVelocity);
    return newVelocity;
}

let printVelocity = doubleVelocity(50, velocity => { console.log("Nova velocidade: " + velocity + " km/s") })
