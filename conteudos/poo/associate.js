class captain {
    constructor(name, age, flyHours){
        this.name = name;
        this.age = age;
        this.flyHours = flyHours;
    }
}

class spaceship {
    constructor(name, crewMax, captainName, captainAge, captainFlyHours){
        this.name = name;
        this.crewMax = crewMax;
        this.captain = new captain(captainName, captainAge, captainFlyHours);
    }
}

let newSpaceship = new spaceship("Apollo", 100, "Jack Sparry", 50, 15000);
console.log(newSpaceship);