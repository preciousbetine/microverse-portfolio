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
  threshold: 0.2,
});

intersectionObserver.observe(introSection);
intersectionObserver.observe(workSection);
intersectionObserver.observe(aboutSection);
intersectionObserver.observe(contactSection);

// DYNAMICALLY POPULATE PORTFOLIO SECTION

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
portfolioItems.forEach((item, index) => {
  let technologies = '';
  item.technologies.forEach((tech) => {
    technologies += `<li class="stackbar-item">${tech}</li>`;
  });
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
        <button id="portfolio-button-${index}" class="see-project-button button-style-1">See Project</button>
      </div>
    </div>`;
  portfolioSection += portfolioItem;
});

workSection.innerHTML += portfolioSection;

// POPUP MENU
const seeProjectButtons = document.querySelectorAll('.see-project-button');
const popupMenuContainer = document.querySelector('#popup-menu-container');

const renderPortfolioMenu = (e, curIndex) => {
  let currentIndex = curIndex || Number(e.target.id.split('-')[2]);
  const portfolioItem = portfolioItems[currentIndex];
  let technologies = '';
  portfolioItem.technologies.forEach((tech) => {
    technologies += `<li class="stackbar-item">${tech}</li>`;
  });

  popupMenuContainer.innerHTML = `
  <div id="popup-menu">
    <div>
      <div id="popup-menu-header">
        <h2>${portfolioItem.name}</h2>
        <span class="material-symbols-outlined" id="close-popup-menu" title="Close popup">
          close
        </span>
      </div>
      <ul>
        <li><strong>${portfolioItem.category}</strong></li>
        <li>${portfolioItem.stack}</li>
        <li>${portfolioItem.year}</li>
      </ul>
    </div>
    <img src="${portfolioItem.featuredImage}">
    <div id="popup-menu-footer">
      <p>${portfolioItem.description}</p>
      <div id="popup-menu-footer-right">
        <ul class="stackbar">
          ${technologies}
        </ul>
        <hr>
        <div id="popup-buttons">
          <button class="button-style-1">
            See Live
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
          <button class="button-style-1">
            See Source
            <i class="fa-brands fa-github"></i>
          </button>
        </div>
      </div>
    </div>
    <div id="navigateProject">
      <button id="previousProjectBtn">
        <i class="fa fa-arrow-left"></i>
        Previous project
      </button>
      <button id="nextProjectBtn">
        Next project
        <i class="fa fa-arrow-right"></i>
      </button>
    </div>
  </div>`;

  popupMenuContainer.style.display = 'flex';
  document.querySelector('#close-popup-menu').addEventListener('click', () => {
    popupMenuContainer.style.display = 'none';
  });

  const nextProjectBtn = document.querySelector('#nextProjectBtn');
  const previousProjectBtn = document.querySelector('#previousProjectBtn');

  if (currentIndex === portfolioItems.length - 1) {
    nextProjectBtn.disabled = true;
  }
  if (currentIndex === 0) {
    previousProjectBtn.disabled = true;
  }

  nextProjectBtn.addEventListener('click', () => {
    currentIndex += 1;
    renderPortfolioMenu(e, currentIndex);
  });

  previousProjectBtn.addEventListener('click', () => {
    currentIndex -= 1;
    renderPortfolioMenu(e, currentIndex);
  });
};

seeProjectButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    renderPortfolioMenu(e);
  });
});

const contactForm = document.forms['contact-form'];
const errorMessage = document.querySelector('.error-message');

contactForm.addEventListener('submit', (e) => {
  const email = contactForm.email.value;
  if (email !== email.toLowerCase()) {
    errorMessage.style.display = 'block';
    contactForm.email.focus();
    e.preventDefault();
    e.stopPropagation();
  } else {
    errorMessage.style.display = 'none';
  }
});