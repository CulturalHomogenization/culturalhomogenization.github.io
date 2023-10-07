//header scroll

window.addEventListener('scroll', function(){
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
})

//modals

// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')
//
// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openModal(modal)
//   })
// })
//
// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal.active')
//   modals.forEach(modal => {
//     closeModal(modal)
//   })
// })
//
// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal')
//     closeModal(modal)
//   })
// })
//
// function openModal(modal) {
//   if (modal == null) return
//   modal.classList.add('active')
//   overlay.classList.add('active')
// }
//
// function closeModal(modal) {
//   if (modal == null) return
//   modal.classList.remove('active')
//   overlay.classList.remove('active')
// }

//Menu controller
function toggleMenu(){
  const menuToggle = document.querySelector('.menuToggle');
  const navigation = document.querySelector('.nav-links');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}
//scroll behaviour
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } //else{
      //entry.target.classList.remove('show');
    //}
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
