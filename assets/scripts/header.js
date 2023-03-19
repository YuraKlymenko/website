const hamburgerBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('#mobileMenu');
const body = document.querySelector('body');

window.addEventListener('scroll', () => {
  const header = document.getElementsByTagName('header')[0];

  if (window.scrollY > 20) {
    header.classList.add('is-sticky');
  } else {
    header.classList.remove('is-sticky');
  }
});

hamburgerBtn.addEventListener('click', () => {
  body.classList.toggle('lock');
  mobileMenu.classList.toggle('d-none');
  mobileMenu.classList.toggle('mobile-nav');
  hamburgerBtn.classList.toggle('open');

  if (!mobileMenu.classList.contains('d-none')) {
    const hamburgerLinks = document.getElementById('mobile-nav');

    hamburgerLinks.addEventListener('click', () => {
      body.classList.remove('lock');
      mobileMenu.classList.add('d-none');
      mobileMenu.classList.remove('mobile-nav');
      hamburgerBtn.classList.remove('open');
    });
  }
});