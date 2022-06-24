function doChange(){
    alert(event.target.value);
}

/*
Console: 

1 - Nos podemos ir no evento do elemento e atribuir uma função
let sampleText = document.querySelector("input[name='sample-text']");
sampleText.addEventListener("change", doChange);

2 - Ou por meio dos dispatdchEvent' que espera receber um objeto da classe event, podemos fazer isto de forma dinâmica

let changeEvent = new Event("change");
let sampleText = document.querySelector("input[name='sample-text']")
sampleText.dispatchEvent(changeEvent);


3 - Assim como podemos remover um evento de um elemento com o 'removeEventListener'
removeEventListener("change", doChange);

*/