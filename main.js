window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  navOnScroll()
  backToTopOnScroll()
  activateMenuSection(home)
  activateMenuSection(services)
  activateMenuSection(about)
  activateMenuSection(contact)
}

function activateMenuSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sessaoTop = section.offsetTop
  const sessaoBottom = section.offsetHeight + sessaoTop

  const dentroDaSessao = targetLine >= sessaoTop && targetLine <= sessaoBottom

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (dentroDaSessao) {
    menuElement.classList.add('active')
  }
}

function navOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function backToTopOnScroll() {
  if (scrollY > 700) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(
  '#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header,#about .content'
)
