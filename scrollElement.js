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