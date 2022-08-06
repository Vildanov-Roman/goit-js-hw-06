const validInput = document.getElementById("validation-input");

validInput.addEventListener('blur', changeBorderColor)

function changeBorderColor() {
    if (validInput.getAttribute('data-length') > validInput.value.length || validInput.getAttribute('data-length') < validInput.value.length) { 
        
        validInput.classList.add('invalid');
    } else {
        validInput.classList.remove('invalid');
        validInput.classList.add('valid');
    }
}


