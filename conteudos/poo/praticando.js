class person {
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
    birthday() {
        console.log("Parabéns, você completeu mais um ano de vida, " + this.name);
        this.age++;
    }
}

class division {
    constructor(number, lieutenant, captain) {
        this.number = number,
            this.lieutenant = lieutenant,
            this.captain = captain
    }
}

class shinigami extends person {
    constructor(name, age, zanpakuto, divisionNumber, divisionlieutenant, divisionCaptain) {
        super(name, age);
        this.zanpakuto = zanpakuto;
        this.yourDivision = new division(divisionNumber, divisionlieutenant, divisionCaptain);
    }
    set hollow(hollow) {
        if (hollow == true) {
            console.log("This is a hollow, Exorcise now");
        } else {
            console.log("This is a inocent soul, Transmute");
        }
    }

    get transformation() {
        return this.hollow = true;
    }

    static worldHuman(days) {
        if (days <= 10) {
            console.log("Punição: 15 dias preso");
        } else if (days > 10 || days <= 20) {
            console.log("Punição: 30 dias preso e remoção de zanpakuto")
        } else if (days > 20) {
            console.log("Punição: Execução");
        }
        return days;
    }

    die() {
        console.log(this.name + " Morreu com honra");
    }
}

let isaias = new person("Isaías", 20);
let gabi = new person("Gabriela", 18);
let ichigo = new shinigami("Ichigo", 17, "Bankai", 11, "Ikakku", "Kenpachi Zaraki");
let rukia = new shinigami("Rukia", 18, "Hakka", 6, "Renji Abarai", "Byakuya Kuchiki");

console.log(isaias);
console.log("---\n");

console.log(gabi);
console.log("---\n");

console.log(ichigo);
console.log("---\n");

console.log(rukia);
console.log("---\n");

isaias.birthday();
console.log(isaias);
console.log("---\n");

ichigo.die();
console.log("---\n");

rukia.birthday();
console.log(rukia);



console.log(ichigo.hollow = false, ichigo.transformation);
console.log("---\n");

let punicao = shinigami.worldHuman(25);
console.log(punicao);