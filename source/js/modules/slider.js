// https://swiperjs.com/get-started#installation
import Swiper from 'swiper/bundle';

const swiperHero = document.querySelector('[data-swiper="hero"]');
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

function initSlider(slierElement, sliderOptions) {
  return slierElement
    ? new Swiper(slierElement, sliderOptions)
    : undefined;
}

function initSliders() {
  initSlider(swiperHero, swiperHeroOptions);
}

export {initSliders};
