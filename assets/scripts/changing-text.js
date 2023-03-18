const text = document.querySelector(".changed-text");

if (window.innerWidth >= 992) {
  changeText();
  setInterval(changeText, 12000);
}

function changeText () {
  setTimeout(() => {
    text.textContent = 'the ideal solution';
  }, 0);
  setTimeout(() => {
    text.textContent = 'the best approach';
  }, 4000);
  setTimeout(() => {
    text.textContent = 'the perfect response';
  }, 8000);
}