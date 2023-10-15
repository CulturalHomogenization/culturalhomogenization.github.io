//header scroll

window.addEventListener('scroll', function(){
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
})
const indicator = document.querySelector('.indicator');

function handleScroll() {
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;
  const fadeThreshold = viewportHeight / 2;

  const opacity = 1 - (scrollPosition / fadeThreshold);

  indicator.style.opacity = Math.max(opacity, 0);
}
window.addEventListener('scroll', handleScroll);
//modals

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

//Menu controller
function toggleMenu(){
  const menuToggle = document.querySelector('.menuToggle');
  const navigation = document.querySelector('.nav-links');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}
