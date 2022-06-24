function show(){
    let element = document.getElementById("name");
    //Aqui retornamos o elemento inteiro com base no seu ID
    console.log(element);

    let element1 = document.getElementsByName("phone");
    //Aqui retornamos todos os elementos que possuem phone como name
    console.log(element1);

    let element2 = document.querySelectorAll("div#phones input [name='phone']");
    console.log(element2);
    
    let element3 = document.getElementsByTagName("input");
    //Aqui retornamos todas as tags input'
    console.log(element3);
}