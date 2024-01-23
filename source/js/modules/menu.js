const isMobile = window.matchMedia('(max-width: 720px)');
const menuBlock = document.querySelector('[data-header="sticky-menu"]');
const MENU_TOP_OFFSET = 31;
const MENU_TOP_OFFSET_MOBILE = 21;
const MENU_HIDDEN_OFFSET = -55;
let menuPos = MENU_TOP_OFFSET;
let scrollY = 0;

function initMenu() {
  const menuBtn = document.querySelector('[data-menu-button]');
  const menuOverlay = document.querySelector('[data-menu="overlay"]');

  menuBtn.addEventListener('click', changeMenuState);
  menuOverlay.addEventListener('click', changeMenuState);
  document.addEventListener('scroll', onScrollMenuActions);

  initAccordionButtons();
}

function onEscPress(evt) {
  if (evt.key === 'Escape') {
    changeMenuState();
  }
}

/* управление возможностью фокусировки на элементах аккордеона (чтобы tab не вызвал проваливание фокуса в закрытый аккордеон) */
function initAccordionButtons() {
  const accordionButtons = document.querySelectorAll('[data-accordion="button"]');

  accordionButtons.forEach((button) => {
    changeTabIndexes(button);
    button.addEventListener('click', onClickAccordionButton);
    const links = button.parentNode.querySelectorAll('.menu__sublink');
    links.forEach((link) => {
      link.tabIndex = -1;
    });
  });
}

function changeTabIndexes(button) {
  const isActive = !button.parentNode.classList.contains('is-active');
  const links = button.parentNode.querySelectorAll('.menu__sublink');
  links.forEach((link) => {
    link.tabIndex = isActive ? 0 : -1;
  });
}

function onClickAccordionButton(event) {
  changeTabIndexes(event.currentTarget);
}

function changeMenuState() {
  const menu = document.querySelector('[data-menu]');

  menu.classList.toggle('is-active');
  if (menu.classList.contains('is-active')) {
    window.focusLock.lock('.menu__container');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onEscPress);
  } else {
    window.focusLock.unlock('.menu__container');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onEscPress);
  }
}

function onScrollMenuActions() {
  const newScrollY = window.scrollY;
  const delta = newScrollY - scrollY;
  scrollY = newScrollY;
  const topOffset = isMobile.matches ? MENU_TOP_OFFSET_MOBILE : MENU_TOP_OFFSET;
  menuPos = (delta > 0)
    ? MENU_HIDDEN_OFFSET
    : topOffset;

  menuBlock.style.top = `${menuPos}px`;
}

window.addEventListener('resize', () => {

  if (scrollY !== window.scrollY) {
    scrollY = window.scrollY;
  }

  if (parseInt(menuBlock.style.top, 10) > 0) {
    menuPos = isMobile.matches ? MENU_TOP_OFFSET_MOBILE : MENU_TOP_OFFSET;
    menuBlock.style.top = `${menuPos}px`;
  }
});

export { initMenu };
