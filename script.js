const menuButton = document.querySelector('#showMobileMenuBtn');
const mobileMenu = document.querySelector('#mobileMenu');
const closeButton = document.querySelector('#closeButton');
const navLinksMobile = document.querySelectorAll('.nav-link-mobile');

const navLinksDesktop = document.querySelectorAll('.nav-link');
// work (portfolio), about, contact

const header = document.querySelector('header');
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

const intersectionObserver = new IntersectionObserver((entries, observer) => {
  const sections = ['work-section', 'about-section', 'contact-section'];
  entries.forEach((entry) => {
    const navItem = navLinksDesktop[sections.indexOf(entry.target.id)];
    if (entry.isIntersecting) {
      navLinksDesktop.forEach((item) => item.classList.remove('active'));
      navItem.classList.add('active');
    } else {
      navItem.classList.remove('active');
    }
  });
}, {
  rootMargin: '-100px',
});

intersectionObserver.observe(workSection);
intersectionObserver.observe(aboutSection);
intersectionObserver.observe(contactSection);
