const input = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

input.addEventListener('input', handleInput);

function handleInput() {
    if (input.value === '') {
        nameOutput.innerHTML = 'Anonymous';
    } else{
        nameOutput.innerHTML = input.value;
    }
}
