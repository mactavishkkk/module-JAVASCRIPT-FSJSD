function setbluebackground(){
    let element = document.getElementById("style-text");
    element.style.backgroundColor = "blue";
    //Aqui, o javascript trabalha outras sintaxes com o came on case
    //backgroun[d-c]olo: blue; --> backgroun[dC]olor = blue;

}

function settransparentbackground(){
    document.getElementById("style-text").style.backgroundColor = "transparent";
    //Aqui temos a mesma ideia, porem, sem uma variável 
}

function setredcolor(){
    let element = document.getElementById("style-text");
    element.classList.add("red-color");
}

function removeredcolor(){
    document.getElementById("style-text").classList.remove("red-color");

}