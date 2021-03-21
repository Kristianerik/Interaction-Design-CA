const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const form = document.querySelector("#accountForm");

function validateForm(){
    event.preventDefault();

    if (validateEmail(email.value) === true){
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(password.value.trim().length > 5){
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
    }

    if(address.value.trim().length > 15){
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);


function validateEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}