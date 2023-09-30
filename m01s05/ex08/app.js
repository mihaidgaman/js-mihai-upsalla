const button = document.getElementById('clicker');
const removeButton = document.getElementById('removeEvent');

function clickHandler() {
  alert('Ai apasat butonul!');
}

button.addEventListener('click', clickHandler);

removeButton.addEventListener('click', function () {
  button.removeEventListener('click', clickHandler);
});

const button2 = document.getElementById('query');
button2.addEventListener('click', function () {
  let age = prompt('Te rog introdu varsta ta:');
  console.log('Varsta ta este: ' + age + ' ani.');
});

const message = document.getElementById('message');
let age = prompt(`Te rog introdu varsta ta:`);
message.innerText = `Ai ${age} ani.`;
