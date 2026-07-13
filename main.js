const aboutLinkElement = document.querySelector('.header__nav-link-about')
const projectLinkElement = document.querySelector('.header__nav-link-project')
const abilitiesLinkElement = document.querySelector('.header__nav-link-abilities')
const quotesLinkElement = document.querySelector('.header__nav-link-quotes')
const sportLinkElement = document.querySelector('.header__nav-link-sport')
const goalsLinkElement = document.querySelector('.header__nav-link-goals')
const contactLinkElement = document.querySelector('.header__nav-link-contact')

const aboutSectionElement = document.getElementById('about')
const projectSectionElement = document.getElementById('projects')
const abilitiesSectionElement = document.getElementById('abilities')
const quotesSectionElement = document.getElementById('quotes')
const sportSectionElement = document.getElementById('sport')
const contactSectionElement = document.getElementById('contact')

const btnUpElement = document.querySelector('.btn-up')

window.addEventListener('scroll', () => {
  if(window.scrollY > 400) {
    btnUpElement.style.display = 'block'
  } else {
    btnUpElement.style.display = 'none'
  }
})

btnUpElement.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

aboutLinkElement.addEventListener('click', () => {
  event.preventDefault()
  aboutSectionElement.scrollIntoView()
})

projectLinkElement.addEventListener('click', () => {
  event.preventDefault()
  projectSectionElement.scrollIntoView()
})

abilitiesLinkElement.addEventListener('click', () => {
  event.preventDefault()
  abilitiesSectionElement.scrollIntoView()
})

quotesLinkElement.addEventListener('click', () => {
  event.preventDefault()
  quotesSectionElement.scrollIntoView()
})

sportLinkElement.addEventListener('click', () => {
  event.preventDefault()
  sportSectionElement.scrollIntoView()
})

contactLinkElement.addEventListener('click', () => {
  event.preventDefault()
  contactSectionElement.scrollIntoView()
})



document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll(
    `
    .about__image,
    .about__title,
    .about__text p,
    .about__button,
    .projects__title,
    .projects-card,
    .abilities__title,
    .abilities__item,
    .quotes__title,
    .quotes__card,
    .quotes__image,
    .game__title,
    .game__card,
    .sport__image,
    .sport__title,
    .sport__desc-title,
    .sport__desc p,
    .sport__btn,
    .goals__title,
    .goals__item
  `
  );

  animatedElements.forEach((el) => {
    el.classList.add('animate-on-scroll');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedElements.forEach((el) => observer.observe(el));

  const staggerGroups = [
    '.projects-card',
    '.abilities__item',
    '.quotes__card',
    '.game__card',
    '.goals__item',
  ];

  staggerGroups.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.1}s`;
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header__nav-link');

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove('active'));
          const activeLink = document.querySelector(
            `.header__nav-link[href="#${entry.target.id}"]`
          );
          if (activeLink) activeLink.classList.add('active');
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((section) => navObserver.observe(section));

  document.querySelectorAll('.menu__item').forEach((item) => {
    item.addEventListener('click', () => {
      document.getElementById('menu__toggle').checked = false;
    });
  });
});
