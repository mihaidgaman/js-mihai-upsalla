const controls = document.querySelector('.controls');
const box = document.querySelector('.box');
const colorInput = controls.querySelector('.color-input');
const resetButton = controls.querySelector('.reset-button');

// event delegation
controls.addEventListener('click', function (event) {
  // event.target = elementul de pe care a plecat clickul
  const target = event.target;

  if (
    target.nodeName !== 'BUTTON' ||
    !target.dataset.color ||
    target.dataset.color.trim().length <= 0
  ) {
    return;
  }

  const button = target;
  const color = button.dataset.color;
  box.style.backgroundColor = color;
});

colorInput.addEventListener('change', function (event) {
  // dom traversal
  const input = event.currentTarget;
  const button = input.previousElementSibling;
  const value = input.value;

  button.dataset.color = value;
  button.style.backgroundColor = value;
});

resetButton.addEventListener('click', function () {
  box.removeAttribute('style');
});

document.addEventListener('DOMContentLoaded', function () {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  const boxes = document.querySelectorAll('.box');

  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener('change', function () {
      const selectedColor = this.value;
      const box = document.getElementById(`${selectedColor}-box`);

      if (box) {
        boxes.forEach(function (box) {
          box.style.backgroundColor = '';
        });
        box.style.backgroundColor = selectedColor;
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const colorInput = document.getElementById('color-input');
  const colorBox = document.getElementById('color-box');
  const colorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

  const enteredColor = this.value;

  if (colorRegex.test(enteredColor)) {
    colorBox.style.backgroundColor = enteredColor;
  } else {
    colorBox.style.backgroundColor = '';
  }
});
