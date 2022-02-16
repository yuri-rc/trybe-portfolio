const pixelBoard = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('#color-palette');
let selectedColor;

function createPallet() {
  for (let i = 0; i < 4; i += 1) {
    const createPixel = document.createElement('div');
    createPixel.className = 'color';
    createPixel.style.display = 'inline-block';
    createPixel.style.border = '1px solid black';
    colorPalette.appendChild(createPixel);
  }
}

function setPalletColor() {
  document.querySelectorAll('.color')[0].style.backgroundColor = 'black';
  document.querySelectorAll('.color')[1].style.backgroundColor = 'red';
  document.querySelectorAll('.color')[2].style.backgroundColor = 'green';
  document.querySelectorAll('.color')[3].style.backgroundColor = 'blue';
}

function setColor(element) {
  let selected;
  if (element === 'undefined') {
    selected = document.querySelector('.color');
    selected.classList.add('selected');
    selectedColor = selected.style.backgroundColor;
  } else if (element.target.classList.contains('color')) {
    // https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
    selected.classList.remove('selected');
    element.target.classList.add('selected');
    selected = element.target;
    selectedColor = selected.style.backgroundColor;
  }
}
document.addEventListener('click', setColor);

for (let i = 0; i < 25; i += 1) {
  const createPixel = document.createElement('div');
  createPixel.className = 'pixel';
  pixelBoard.appendChild(createPixel);
}

function paint(element) {
  const targetElement = element.target;
  if (element.target.classList.contains('pixel')) {
    targetElement.style.backgroundColor = selectedColor;
  }
}
document.addEventListener('click', paint);

window.onload = function load() {
  createPallet();
  setPalletColor();
  setColor('undefined');
};
