// https://swiperjs.com/get-started#installation
import Swiper from 'swiper/bundle';

const swiperHero = document.querySelector('[data-swiper="hero"]');
const swiperPrograms = document.querySelector('[data-swiper="programs"]');
const swiperNewsTabs = document.querySelector('[data-swiper="news-tabs"]');
const swiperNewsContent = document.querySelector('[data-swiper="news-content"]');

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
  pagination: {
    el: '[data-pagination="news"]',
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

const swiperNewsTabsOptions = {
  slidesPerView: 'auto',
  spaceBetween: 28,
};

const swiperNewsContentOptions = {
  slidesPerView: 'auto',
  spaceBetween: 32,
  navigation: {
    nextEl: '[data-swiper-button="news-content-next"]',
    prevEl: '[data-swiper-button="news-content-prev"]',
  },
  pagination: {
    el: '[data-pagination="news"]',
    clickable: true,
    renderBullet: function (index, className) {
      return `<button class="${ className }" type="button">${ index + 1 }</button>`;
    },
  },
  keyboard: {
    enabled: true,
  },
  slidesPerGroup: 3,
};

function initSlider(slierElement, sliderOptions) {
  return slierElement
    ? new Swiper(slierElement, sliderOptions)
    : undefined;
}

function initTabsButtons() {
  const tabs = document.querySelectorAll('.btn--tab');
  for (let tab of tabs) {
    tab.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('.btn--tab:disabled').disabled = false;
      event.target.disabled = true;
    });
    tab = null;
  }
}

function initSliders() {
  initSlider(swiperHero, swiperHeroOptions);
  initSlider(swiperPrograms, swiperProgramsOptions);
  initSlider(swiperNewsTabs, swiperNewsTabsOptions);
  initSlider(swiperNewsContent, swiperNewsContentOptions);

  initTabsButtons();
}


export {initSliders};
