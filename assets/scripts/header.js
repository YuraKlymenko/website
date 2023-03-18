const hamburgerBtn = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('#hamburgerMenu');
const body = document.querySelector('body');

window.addEventListener('scroll', () => {
  const header = document.getElementsByTagName('header')[0];

  if (window.scrollY > 20) {
    header.classList.add('is-sticky');
  } else {
    header.classList.remove('is-sticky');
  }
});

hamburgerBtn.addEventListener('click',  () => {
  body.classList.toggle('lock');
  hamburgerMenu.classList.toggle('d-none');
  hamburgerMenu.classList.toggle('mobile-nav');
  hamburgerBtn.classList.toggle('open');
});