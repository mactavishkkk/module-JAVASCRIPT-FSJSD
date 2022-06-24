function addNewPhone() {
    const phoneForm = document.querySelector("form#phones");
    const newPhone = phoneForm.children[0].cloneNode(true);
    /*
    Aqui estamos declarando uma variavel que irá clonar a de cima
    Inicial indicamos quem será clonado com a variável 'phoneForm' que está armazenando um filho depois chamamos seus filhos que serao clonados 'children[index]'
    Depois usamos o método 'cloneNode' que pode receber (true) para clonar os filhos dos filhos e etc, ou 'false' para apenas o primeiro filho
    variavelComElemento.children[indexChildren].cloneNode(true or false);
    */
   const phonePosition = phoneForm.children.length + 1
   //Aqui declaramos uma variavel para armazenar a posicao do filho x

   newPhone.querySelector("label").innerText = "Telefone" + phonePosition + ":"
   // E aqui usamos a variavel criada para ajustar o label clonado

   phoneForm.appendChild(newPhone);
   console.log(phoneForm.children);
}

function printPhones() {
    let message = "";
    const phones = document.querySelectorAll("input[name='phone']");
    phones.forEach((phone, index) => {
        message += "Telefone " + (index + 1) + ": " + phone.value + "\n"
    })
    alert(message);
}