document.querySelector("select[name='select-option']").addEventListener("change", function (){
    /* 
    Aqui primeiro selecionamos o elemento que queremos manipular, em seguida, 
    o 'addEventListener' vai mapear algum evento daquele elemento para que nos possamos passar alguma ação ou função quando ele for identificado
    */
    alert(event.target.value);
});