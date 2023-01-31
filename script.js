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


const portfolioItems = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: '',
    technologies: ['html', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
    category: 'CANOPY',
    stack: 'Back End Dev',
    year: '2015',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    featuredImage: '',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
    category: 'FACEBOOK',
    stack: 'Full Stack Dev',
    year: '2015',
  },
  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    featuredImage: '',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
    category: 'FACEBOOK',
    stack: 'Full Stack Dev',
    year: '2015',
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featuredImage: '',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
    category: 'Uber',
    stack: 'Lead Developer',
    year: '2018',
  },
];
