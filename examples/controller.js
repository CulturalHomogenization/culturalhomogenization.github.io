//header scroll

window.addEventListener('scroll', function(){
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
})

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
const indicator = document.querySelector('.indicator');

function handleScroll() {
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;
  const fadeThreshold = viewportHeight / 2;

  const opacity = 1 - (scrollPosition / fadeThreshold);

  indicator.style.opacity = Math.max(opacity, 0);
}
window.addEventListener('scroll', handleScroll);

const dialog = document.querySelector("dialog")
const openModalButtons = document.querySelectorAll('open')
const closeModalButtons = document.querySelectorAll('closeModal')

function show(){
  dialog.show()
}
function closeModal(){
  dialog.close()
}