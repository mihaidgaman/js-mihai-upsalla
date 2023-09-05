var inputLength = document.getElementById('length');
var inputWidth = document.getElementById('width');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');
var inputHeight = document.getElementById('height');

form.addEventListener(
  'submit',
  function (event) {
    event.preventDefault();

    var height = inputHeight.value || 0;
    var length = inputLength.value || 0;
    var width = inputWidth.value || 0;
    var result = 0;

    result = length * width * height;

    elementResult.innerText = result;
  },
  false,
);
