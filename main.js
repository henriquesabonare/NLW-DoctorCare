window.addEventListener('scroll', onScroll)
onScroll()
function onScroll(){
  ShowNavOnSCroll()
  ShowBackToTopButtonOnScroll()
  activemenu(inicio)
  activemenu(services)
  activemenu(about)
}
function activemenu(section) {
  const targetLine = scrollY + innerHeight / 2
  //verificar se a seção passou da linha
  //quais dados vou precisar? home = 0 to 872/ services = 872 to 1041 / about = 1041 to 1913 / contact = 1913 to 2652
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  //informações
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  //console.log("o topo da secão chegou ou passou da linha?", sectionTopReachOrPassedTargetLine)

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  //console.log("o fundo da seção passou da linha?", sectionEndPassedTargetLine)

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
  //console.log(sectionBoundaries)

  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if(sectionBoundaries) {
    menuElement.classList.add('active')
  }
  
}
function ShowNavOnSCroll(){
  if(scrollY > 0) {
    navigation.classList.add("scroll")
  } else {
    navigation.classList.remove("scroll")
  }
}
function ShowBackToTopButtonOnScroll() {
  if (scrollY > 1168){
    backToTopButton.classList.add("show")
  } else{
    backToTopButton.classList.remove("show")
  }
}
function openMenu() {
  document.body.classList.add("menu-expanded")
}
function closeMenu() {
  document.body.classList.remove("menu-expanded")
}
/*Identação prevalece*/ 
ScrollReveal({
  origin:'top',
  distance: '30px', 
  duration: 1000,
  reset: true
}).reveal(`
  #inicio,
  #inicio img,
  #inicio v.boxes,
  #services,
  #services .cards,
  #about,
  #about .content,
  #about .content img,
  #contact,
  #contact .content,
  #contact .content img`);
