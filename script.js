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
    featuredImage: 'images/work-image-5.png',
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
    featuredImage: 'images/work-image-4.png',
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
    featuredImage: 'images/work-image-1.png',
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
    featuredImage: 'images/work-image-6.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: '',
    sourceLink: '',
    category: 'Uber',
    stack: 'Lead Developer',
    year: '2018',
  },
];

let portfolioSection = '';
portfolioItems.forEach((item) => {
  let technologies = '';
  item.technologies.forEach((tech) => {
    technologies += `<li class="stackbar-item">${tech}</li>`;
  })
  const portfolioItem = `
    <div class="card">
      <img src="${item.featuredImage}" alt="Tonic" />
      <div class="card-description">
        <h2>${item.name}</h2>
        <div class="work-item-bar">
          <span>${item.category}</span>
          <ul>
            <li>${item.stack}</li>
            <li>${item.year}</li>
          </ul>
        </div>
        <p class="color-dark">${item.description}</p>
        <ul class="stackbar">
          ${technologies}
        </ul>
        <button class="button-style-1">See Project</button>
      </div>
    </div>`;
  portfolioSection += portfolioItem;
});

workSection.innerHTML += portfolioSection;