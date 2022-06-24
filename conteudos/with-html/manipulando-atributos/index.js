function verifyenablement(){
    let element = document.querySelector("select").value;
    if (element == "disabled"){
        document.querySelector('input[name="some-text"]').disabled = true;
        let pElement = document.getElementById("message");
        pElement.innerText = "Desabilitado";
        pElement.style.color = "white";
        pElement.style.backgroundColor = "red";
        pElement.style.borderRadius = "2px";
    } else {
        document.querySelector('input[name="some-text"]').disabled = false;
        let pElement = document.getElementById("message");
        pElement.innerText = "";
        pElement.style.color = "Black";
        pElement.style.backgroundColor = "transparent";
    }

}