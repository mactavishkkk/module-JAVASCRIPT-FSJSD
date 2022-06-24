function slowDown(velocity, printer){
    let desacceleration = 20;

    while(velocity > 0){
        printer(velocity);
        velocity -= desacceleration;
    }

    console.log("A nave foi parada, as comportas podem ser abertas!");
}

let spaceshipVelocity = 150;

slowDown(spaceshipVelocity, function(velocity){
    console.log("Nave desacelerando, velocidade atual: " + velocity + " km/s")
});