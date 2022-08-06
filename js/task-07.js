const changeFont = document.getElementById("font-size-control");
const text = document.getElementById("text");

changeFont.addEventListener('change', changeSizeText)

function changeSizeText() {
    text.style.fontSize = changeFont.value + 'px'
}