import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const headerButton = document.querySelector(".header__left");
const headerTxt = document.querySelector('.header__left p');
const headerMenu = document.querySelector(".header__list");
let menuOpened = false;
const menuToggle = () => {
    menuOpened = !menuOpened;
    headerButton.classList.toggle("open");
    headerMenu.classList.toggle("open");
    menuOpened ? headerTxt.innerHTML = "Закрыть" : headerTxt.innerHTML = "Меню"
};

headerButton.onclick = menuToggle;

window.onclick = (e) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

const katalogButton = document.querySelector(".nav__katalog-btn");
const katalogMenu = document.querySelector(".nav__katalog-content");
let katalogOpened = false;
const katalogToggle = () => {
  katalogOpened = !katalogOpened;
  katalogButton.classList.toggle("open");
  katalogMenu.classList.toggle("open");
};

katalogButton.onclick = katalogToggle;

window.onclick = (e) => {
  if (
    katalogOpened &&
    !e.composedPath().includes(katalogButton) &&
    !e.composedPath().includes(katalogMenu)
  )
    katalogToggle();
};