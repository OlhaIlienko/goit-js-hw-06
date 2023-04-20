function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const color = document.querySelector('.color');

button.addEventListener('click', onClickButton);

function onClickButton(event) {
  const randomColor = getRandomHexColor();
  color.textContent = randomColor;
  body.style.background = randomColor;
};