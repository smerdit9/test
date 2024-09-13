// бургер
let burger = document.querySelector('.burger__menu');
let menu = document.querySelector('.header__nav');
let close = document.querySelector('.close')

burger.addEventListener('click',

  function () {

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop__scroll');

  })

close.addEventListener('click',

  function () {

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop__scroll');

  })
// бургер

// табы
let tabsBtn = document.querySelectorAll('.work-list__btn');
let tabsItem = document.querySelectorAll('.work__wrapper');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){btn.classList.remove('work-list__btn--active')});
    e.currentTarget.classList.add('work-list__btn--active');

    tabsItem.forEach(function(element){element.classList.remove('work__wrapper--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('work__wrapper--active');
  });
});
// табы

// поиск
let searchBtn = document.querySelector('.header__search-btn');
let search = document.querySelector('.header__search');
let searchClosed = document.querySelector('.closed-search');

searchBtn.addEventListener('click',

  function () {

    search.classList.toggle('header__search--active');

  })

searchClosed.addEventListener('click',

  function () {

    search.classList.remove('header__search--active');

  })
// поиск

// слайдер

const swiper = new Swiper('.swiper-container', {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

// слайдер


new Accordion('.accordion');