const body = document.querySelector('body');
const btn = document.querySelector('button')
const colorName = document.querySelector('span.color')

btn.addEventListener('click', handleChangeColor)

function handleChangeColor () {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorName.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
