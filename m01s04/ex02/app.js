var userInput = prompt('Introdu un numar');
var number = Number(userInput);
var errorMessage = 'Nu s-a introdus un numar';
var paragraphElement = document.getElementById('message');

if (!isNaN(number)) {
  if (number < 20) {
    var message = `Numarul introdus ${number} este mai mic decat 20.`;
  } else if (number > 20) {
    console.log(message);
    paragraphElement.innerText = message;
    var message = `Numarul introdus ${number} este mai mare decat 20.`;
  } else {
    var message = `Numarul introdus ${number} este egal cu 20.`;
  }
} else {
  var message = `Valoarea introdusă nu este un număr valid.`;
}
console.log(message);
paragraphElement.innerText = message;
22;
21;
