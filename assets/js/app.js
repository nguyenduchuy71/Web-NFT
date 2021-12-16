const menuBtn = document.getElementById('menu')
const sidebarbrand = document.querySelector('.sidebar__brand')
const sidebarmenu = document.querySelector('.sidebar__menu')
menuBtn.addEventListener('click', () => {
  if (menuBtn.classList.contains('fa-bars')) {
    menuBtn.className = 'fas fa-times menu'
    sidebarbrand.style.display = 'block'
    sidebarmenu.style.display = 'block'
  } else {
    menuBtn.className = 'fas fa-bars menu'
    sidebarbrand.style.display = 'none'
    sidebarmenu.style.display = 'none'
  }
})
