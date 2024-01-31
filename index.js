const nav = document.querySelector(".navbar-main-container")
const mobilenav = document.querySelector(".mobile-nav")
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const menuContainer = document.querySelector(".mobile-menu-container")
const overlay = document.querySelector(".overlay");

window.addEventListener('scroll', () => {
    if(window.scrollY > 60 ) {
        nav.classList.add('scrolled');
        mobilenav.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled");
        mobilenav.classList.remove("scrolled");
    }
})


let currentIndex = 0;
const slides = document.querySelectorAll('.slider-card');
const totalSlides = slides.length;
const sliderWrapper = document.querySelector('.slider-wrapper');
const cardWidth = slides[0].offsetWidth;

function changeSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  const transformValue = -currentIndex * cardWidth;
  sliderWrapper.style.transform = `translateX(${transformValue}px)`;
}
  
// var swiper = new Swiper(".build-steps-section", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });