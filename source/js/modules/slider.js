// https://swiperjs.com/get-started#installation
import Swiper from 'swiper/bundle';

const swiperHero = document.querySelector('[data-swiper="hero"]');
const swiperPrograms = document.querySelector('[data-swiper="programs"]');

const swiperHeroOptions = {
  uniqueNavElements: false,
  pagination: {
    el: '[data-swiper-pagination="hero"]',
    type: 'bullets',
    clickable: true,
    bulletClass: 'hero__bullet',
    bulletActiveClass: 'hero__bullet--active',
  },
  // autoplay: {
  //   delay: 5000,
  // },
  loop: true,
};

const swiperProgramsOptions = {
  speed: 750,
  grabCursor: true,
  navigation: {
    nextEl: '[data-swiper-button="programs-next"]',
    prevEl: '[data-swiper-button="programs-prev"]',
  },
  scrollbar: {
    el: '[data-swiper-scrollbar="programs"]',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    420: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    720: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1330: {
      slidesPerView: 3,
      spaceBetween: 32,
      allowTouchMove: false,
      grabCursor: false,
    },
  },
};

function initSlider(slierElement, sliderOptions) {
  return slierElement
    ? new Swiper(slierElement, sliderOptions)
    : undefined;
}

function initSliders() {
  initSlider(swiperHero, swiperHeroOptions);
  initSlider(swiperPrograms, swiperProgramsOptions);
}

export {initSliders};
