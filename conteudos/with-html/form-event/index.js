function save(){
    event.preventDefault();//Esta função, altera o comportamento padrão de um elemento, por exemplo
    //O submit' tem como padrão atualizar a página, com esta função ele deixará de fazer isto.
    let name = document.querySelector("input[name='name']").value;
    let programmingLang = document.querySelector("select[name='programming-lang']").value;
    alert("Olá " + name + ", Legal saber que você programa em " + programmingLang)
}