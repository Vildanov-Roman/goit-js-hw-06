const input = document.querySelector('#controls>input');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.getElementById('boxes')

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }

const createBoxes = amount => {
    const collection = []
    for (let i = 0; i < amount; i += 1) {
        const div = document.createElement('div');
        
        div.style.width = `${30 + 10 * i}px`
        div.style.height = `${30 + 10 * i}px`
        div.style.background = getRandomHexColor();
        div.style.marginBottom = '5px'
        collection.push(div)
    }
    return collection;
}

create.addEventListener('click', () => {
    let plusBox = createBoxes(input.value )
    boxes.append(...plusBox)
})

const remuveBoxes = () => {
    boxes.innerHTML = ''
}

destroy.addEventListener('click', () => {
    remuveBoxes.call()
})