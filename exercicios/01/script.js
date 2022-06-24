alert("Bem-vindo! A seguir pediremos que informe alguns dos seus dados.");

let nome = prompt("Qual seu nome?");
let idade = prompt("Qual sua idade?");
let confirmIdade = confirm("Você realmente tem" + idade + " anos ?");
alert("Dados enviados com sucesso! " + 
    "Nome: " + nome + " | " + 
    "Idade: " + idade + " | " + 
    "Confirmação de faixa etária: " + confirmIdade);
