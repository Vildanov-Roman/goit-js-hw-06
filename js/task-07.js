
const result = {
    input: document.querySelector("#font-size-control"),
    span: document.querySelector("#text"),
}

result.input.addEventListener('input',(evt) => result.span.style.fontSize = `${evt.currentTarget.value}px`)
result.span.style.fontSize = `${result.input.value}px`;
