const showMessage = function (message) {
  const messageContainer = document.createElement('p');
  messageContainer.innerText = message;

  document.body.prepend(messageContainer);
};

// measure window at load time
let oldWidth = window.innerWidth;

const debouncedResizeHandler = debounce(function () {
  const currentWidth = window.innerWidth;
  showMessage(currentWidth);

  if (oldWidth !== currentWidth) {
    showMessage('Fereastra si-a schimbat dimensiunea orizontala');
  }

  oldWidth = currentWidth;
}, 200);

window.addEventListener('resize', debouncedResizeHandler);
