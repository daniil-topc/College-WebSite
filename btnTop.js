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