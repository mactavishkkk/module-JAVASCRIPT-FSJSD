class App {
    addImmobile() {
        event.preventDefault();
        let type = document.querySelector("select[name='select-type']").value;
        let area = document.querySelector("input[name='area']").value;
        let rented = document.querySelector("select[name='select-status']").value;
        let immobile = new Immobile(type, area, rented);
        this.addImmobileList(immobile);
        this.cleanForm();
    }

    addImmobileList(immobile) {
        let listElement = document.createElement("li");
        let immobileInfo = "Area: " + immobile.area + "m² | Type: " + immobile.type;
        if (immobile.rented == "rented") {
            let rentMark = this.createRentMarkRed();
            listElement.appendChild(rentMark);
        } else if (immobile.rented == "available") {
            let rentMark = this.createRentMarkGreen();
            listElement.appendChild(rentMark);
        }
        listElement.innerHTML += immobileInfo;
        let buttonToRemove = this.createRemoveButton();
        listElement.appendChild(buttonToRemove);
        document.getElementById("listImmobile").appendChild(listElement);
    }

    createRentMarkRed() {
        let rentMark = document.createElement("span");
        rentMark.style.backgroundColor = "red";
        rentMark.style.color = "white";
        rentMark.style.borderRadius = "2px";
        rentMark.innerText = " Rented ";
        return rentMark;
    }

    createRentMarkGreen() {
        let rentMark = document.createElement("span");
        rentMark.style.backgroundColor = "green";
        rentMark.style.color = "white";
        rentMark.style.borderRadius = "2px";
        rentMark.innerText = " Available ";
        return rentMark;
    }

    createRemoveButton() {
        let buttonToRemove = document.createElement("button");
        buttonToRemove.setAttribute("onclick", "app.remove()");
        buttonToRemove.innerText = "Remove";
        return buttonToRemove;
    }

    cleanForm() {
        document.querySelector("select[name='select-type']").value = "";
        document.querySelector("input[name='area']").value = "";
        document.querySelector("select[name='select-status']").value = "";
    }

    remove(){
        let liToRemove = event.target.parentNode;
        document.getElementById("listImmobile").removeChild(liToRemove);
    }
}