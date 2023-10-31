const image = document.querySelector('.image');

function showMessage(message) {
  const messageContainer = document.createElement('p');
  messageContainer.innerText = message;

  // side effect
  document.body.append(messageContainer);
}

image.addEventListener('load', function () {
  showMessage('Imaginea s-a incarcat');
});

document.addEventListener('DOMContentLoaded', function () {
  const loadingText = document.getElementById('loading-text');
  const image = document.getElementById('image');

  loadingText.innerText = 'Imaginea s-a incarcat.';
});

image.addEventListener('click', function () {
  alert(`Imaginea cu URL-ul: ${this.src} s-a incarcat.`);
});
