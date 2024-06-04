const form = document.getElementById(registration-form);


form.addEventListener("submit", function(event){
    event.preventDefault();
    const nameInput = document.getElementById("name")
    const emailInput = document.getElementById("email")
    if (!nameInput.checkvalidity() ||
        !emailInput.checkvalidity()
    ){
        return;
    }
    if (!(/^[Az]+$/.test(nameInput))){
        alert("ingrese su nombre")
    }
});