class spaceship{
    constructor(name, maxCrew, maxRecommandedVelocity) {
        this.name = name;
        this.maxCrew = maxCrew;
        this.maxRecommandedVelocity = maxRecommandedVelocity;
        this.currentVelocity = 0;        
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration;
        if(this.currentVelocity > this.maxRecommandedVelocity){
            console.log("Atenção nave: " + this.name + ", Velocidade máxima ultrapassada, reduza-a imediatamente!")
        }
    }
}

class battleSpaceship extends spaceship{
    stop(){
        this.currentVelocity = 0;
        console.log("Recolhendo armas e parando a nave de batalhas")
    }
}

class discoverySpaceship extends spaceship{
    stop(){
        this.currentVelocity = 0;
        console.log("Recolhendo equipamentos de pesquisa e parando a nave de descoberta");
    }
}

let apollo = new battleSpaceship("Apollo", 5, 100);
let darwin = new discoverySpaceship("Darwin", 15, 40);

console.log(apollo);
console.log(darwin);
console.log("---\n");

apollo.speedUp(150);//Quando passamos um método para uma classe filho, ele primeiro procura em sua prória classe o método chamado
darwin.speedUp(45);//Caso ele não o encontre, ele 'corre' para sua mãe procurar o tal método que foi-lhe passado
console.log("---\n");

apollo.stop();//Aqui ele o encontra normalmente em sua própria classe
darwin.stop();//Então ele o executa normalmente