const menuButton = document.querySelector('#showMobileMenuBtn');
const mobileMenu = document.querySelector('#mobileMenu');
const closeButton = document.querySelector('#closeButton');
const navLinksMobile = document.querySelectorAll('.nav-link-mobile');

const navLinksDesktop = document.querySelectorAll('.nav-link');
// work (portfolio), about, contact

const header = document.querySelector('header');
const introSection = document.querySelector('#intro-section');
const workSection = document.querySelector('#work-section');
const aboutSection = document.querySelector('#about-section');
const contactSection = document.querySelector('#contact-section');

menuButton.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

navLinksMobile.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});

const intersectionObserver = new IntersectionObserver((entries) => {
  const sections = ['work-section', 'about-section', 'contact-section'];
  entries.forEach((entry) => {
    const navItem = navLinksDesktop[sections.indexOf(entry.target.id)];
    if (entry.isIntersecting) {
      if (entry.target.id === 'intro-section') {
        header.style.height = '100px';
      } else {
        navLinksDesktop.forEach((item) => item.classList.remove('active'));
        navItem.classList.add('active');
        header.style.height = '80px';
      }
    }
  });
}, {
  // rootMargin: '-150px',
  threshold: 0.2,
});

intersectionObserver.observe(introSection);
intersectionObserver.observe(workSection);
intersectionObserver.observe(aboutSection);
intersectionObserver.observe(contactSection);
