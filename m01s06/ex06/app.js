function paragraphLog() {
  const logContainerClass = 'logs';
  let logContainer = document.querySelector('.' + logContainerClass);

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.classList.add(logContainerClass);
    document.body.append(logContainer);
  }

  let message = '';
  let punctuation = ' ';

  for (let i = 0; i < arguments.length; i++) {
    message += arguments[i] + punctuation;
  }

  const messageParagraph = document.createElement('p');
  messageParagraph.innerText = message;

  logContainer.append(messageParagraph);
}

paragraphLog('Numele', 'prenumele', 'este', 'varsta', 'ani');

const targetNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');

let attempts = 0;

// Ascultă evenimentul de click pe buton
guessButton.addEventListener('click', function () {
  const userGuess = parseInt(guessInput.value);
  attempts++;

  if (userGuess === targetNumber) {
    message.textContent = `Felicitări! Ai ghicit numărul ${targetNumber} în ${attempts} încercări.`;
    guessInput.disabled = true;
    guessButton.disabled = true;
  } else if (userGuess > targetNumber) {
    message.textContent = 'Numarul este prea mare. Incearca din nou.';
  } else {
    message.textContent = 'Numarul este prea mic. Incearca din nou.';
  }
});
