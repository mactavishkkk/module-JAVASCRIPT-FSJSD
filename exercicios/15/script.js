function addHouse() {
    let number = document.querySelector("input[name='number']").value;
    let district = document.querySelector("input[name='district']").value;
    let city = document.querySelector("input[name='city']").value;
    let area = document.querySelector("input[name='area']").value;

    //Criando o filho
    //Primeiro capturamos os valores digitados pelo usuários

    let newListValue = document.createElement("li");
    //Criamos o filho que será inserido no seu pai, ("li", filho de "ul")
    newListValue.innerText = area + "m², número " + number + " (" + district + " - " + city + ")";
    //Criamos uma mensagem com o svalores.

    //Criando o botão
    //Criando o botao com createElement()
    let removeButton = document.createElement("button");
    //Alterando os atributos com variavel.atributo = valor;
    removeButton.type = "button";
    removeButton.innerText = "Remover";
    //Criando um atributo, ("atributo", "valor");
    removeButton.setAttribute("onclick", "removeHouse(this)");
    //Unindo os "filhos"
    newListValue.appendChild(removeButton);
    //Juntando ao seu pai!
    document.getElementById("house-list").appendChild(newListValue);
}

function removeHouse(button) {
    //Aqui, o button está sendo passado com o parâmetro dele mesmo, então, é simples exclui-lo
    let liToRemove = button.parentNode;
    document.getElementById("house-list").removeChild(liToRemove);
}