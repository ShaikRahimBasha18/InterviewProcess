let registerbtn=document.getElementById("register-link")
let loginform=document.getElementById("login-form")
let registerfrom=document.getElementById("register-form")
let registerbtn2=document.getElementById("register-btn")
registerbtn.addEventListener('click',()=>{
  loginform.style.display="none"
  registerfrom.style.display='block'
})
registerbtn2.addEventListener('click',()=>{
  loginform.style.display="block"
  registerfrom.style.display='none'
})



// const imageContainer= document.querySelector('.image-container');
// const slides = document.querySelectorAll('.slide');
// const nextButton = document.getElementById('next-button');
// const backButton = document.getElementById('back-button');
// let currentSlide = 0;

// slides[currentSlide].classList.add('active');

// nextButton.addEventListener('click', () => {
//   slides[currentSlide].classList.remove('active');
//   currentSlide = (currentSlide + 1) % slides.length;
//   slides[currentSlide].classList.add('active');
// });

// backButton.addEventListener('click', () => {
//   slides[currentSlide].classList.remove('active');
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   slides[currentSlide].classList.add('active');
// });