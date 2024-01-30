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
 