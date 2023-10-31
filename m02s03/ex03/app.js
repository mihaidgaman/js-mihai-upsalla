function createLog(message, color = 'black') {
  const messageContainer = document.createElement('p');
  messageContainer.innerText = message;
  messageContainer.style.color = color;

  return messageContainer;
}

const stage = document.querySelector('.stage');
const logsContainer = document.querySelector('.logs');
let counter = 0;
let sidesCounter = 0;
let thirdParagraf = null;

stage.addEventListener('mouseover', function (event) {
  const log = createLog('Mouseul este pe scena');
  counter++;

  if (event.target !== stage) {
    sidesCounter++;
  }

  const counterLog = createLog(`Mouseul a fost pe scena de ${counter} ori.`);
  logsContainer.append(log);
  logsContainer.append(counterLog);

  if (!thirdParagraf) {
    thirdParagraf = createLog(
      `Mouseul a trecut peste laturi de ${sidesCounter} ori.`,
      'blue',
    );
    logsContainer.append(thirdParagraf);
  } else {
    thirdParagraf.innerText = `Mouseul a trecut peste laturi de ${sidesCounter} ori.`;
  }
});

stage.addEventListener('mouseout', function () {
  const log = createLog('Mouseul NU este pe scena');
  logsContainer.append(log);
});
