function sayMyFirstName(element){
    alert("Meu nome é: " + element.value);
}

function sayMyLastName(){
    alert("Meu sobrenome é: " + event.target.value);
    //'event' é uma variável global, ela armazena o último evento que foi gerano no nosso browser em forma de objeto.
    //E eele serve para qualquer um dos vários eventos que um elemento possa receber.
}