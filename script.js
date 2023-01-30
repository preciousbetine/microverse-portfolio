
const menuButton = document.querySelector('#showMobileMenu');
const mobileMenu = document.querySelector('#mobileMenu');
const closeButton = document.querySelector('.xbtn');
const navLinksMobile = document.querySelectorAll('.nav-link-mobile');

menuButton.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
})

closeButton.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
})

navLinksMobile.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  })
})
