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


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".right-swiper-btn",
      prevEl: ".left-swiper-btn",
    },
  });
  
  var swiper = new Swiper(".build-steps-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
  });
  var swiper = new Swiper(".label-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-label-next",
        prevEl: ".swiper-label-prev",
    },
  });
  var swiper = new Swiper(".slider-cards-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev",
    },
  });
