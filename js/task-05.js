// Завдання 5

// Напиши скрипт, який під час набору тексту в інпуті 
// input#name-input (подія input), підставляє його 
// поточне значення в span#name-output. 
// Якщо інпут порожній, у спані повинен 
// відображатися рядок "Anonymous".

const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.nameLabel.textContent = refs.input.textContent = event.currentTarget.value.trim() ? 
    event.currentTarget.value.trim() : 'Anonymous';
}