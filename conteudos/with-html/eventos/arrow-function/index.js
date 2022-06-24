testingArrow = {
    name: "Escola de Javascript",
    normalFunction: function(){ //Uma função normal, consegue exibir o name' normalmente, pois ela funciona em seu contexto atual, onde la foi CRIADA, que é o objeto
        console.log(this.name);
    },
    arrowFunction: () => { //Ja a arrow function, retorna undefinide porque ela retorna de onda ela foi CHAMADA, ou seja, la fora... 
        console.log(this.name);
    }
}

testingArrow.normalFunction();
console.log("---\n")
testingArrow.arrowFunction();//e então funciona neste escopo, o escopo em que ela habita
