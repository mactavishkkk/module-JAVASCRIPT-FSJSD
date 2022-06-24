let nome = prompt("Qual seu nome piloto?");
let velocidadeNave = 0;
velocidadeDesejada = prompt("Gostaria de partir com a nave em qual velocidade? (KM)")
let confirmacao = confirm("Deseja mesmo partir com a velocidade em " + velocidadeDesejada + " km ?");

if(confirmacao == true){
    velocidadeNave = velocidadeDesejada;
}

if(velocidadeNave <= 0){
    alert("A nave está parada, considere partir e aumentar a velocidade");
} else if (velocidadeNave < 40){
    alert("Você está um pouco devagar, podes aumentar mais.")
}else if(velocidadeNave >= 40 && velocidadeNave < 80){
    alert("Parece uma boa velocidade para se manter");
} else if (velocidadeNave >= 80 && velocidadeNave < 100){
    alert("Velocidade alta. Considere diminuir")
} else if(velocidadeNave >= 100){
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert("Certo piloto " + nome + " sua velocidade atual é de " + velocidadeNave + " KM/h !");