import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

import $ from 'jquery'

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

$(document).ready(function() {
  $(".accordion > .accordion__button").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".accordion__content")
        .slideUp(200);
    } else {
      $(".accordion > .accordion__button").removeClass("active");
      $(this).addClass("active");
      $(".accordion__content").slideUp(200);
      $(this)
        .siblings(".accordion__content")
        .slideDown(200);
    }
  });
});

$(document).ready(function(){
	$('.content_toggle').click(function(){
		$('.content_block').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
        $('.content_toggle').removeClass('active');
				$('.content_toggle span').html('Читать далее');
			} else {
        $('.content_toggle').addClass('active');
				$('.content_toggle span').html('Скрыть текст');
			}							
		});
		return false;
	});
});