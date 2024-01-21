function initMenu() {
  const menuBtn = document.querySelector('[data-menu-button]');
  const menuList = document.querySelector('[data-menu-list]');
  const menuOverlay = document.querySelector('[data-menu="overlay"]');

  setTimeout(() => {
    menuList.classList.remove('visually-hidden');
  }, 500);

  menuBtn.addEventListener('click', changeMenuState);
  menuOverlay.addEventListener('click', changeMenuState);
  document.addEventListener('scroll', onScrollMenuActions);
}

function onEscPress(evt) {
  if (evt.key === 'Escape') {
    changeMenuState();
  }
}

function changeMenuState() {
  const menu = document.querySelector('[data-menu]');

  menu.classList.toggle('is-active');
  if (menu.classList.contains('is-active')) {
    window.focusLock.lock('.menu__container');
    // window.scrollLock.disableScrolling();
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onEscPress);
  } else {
    window.focusLock.unlock('.menu__container');
    // window.scrollLock.enableScrolling();
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onEscPress);
  }
}

const menuBlock = document.querySelector('[data-header="sticky-menu"]');
const MENU_TOP_OFFSET = 31;
const MENU_HIDDEN_OFFSET = -55; //+ 31;
let menuPos = MENU_TOP_OFFSET;
let scrollY = 0;

function onScrollMenuActions() {
  const newScrollY = window.scrollY;
  const delta = newScrollY - scrollY;
  scrollY = newScrollY;
  menuPos = (delta > 0)
    ? MENU_HIDDEN_OFFSET
    : MENU_TOP_OFFSET;

  menuBlock.style.top = `${menuPos}px`;
}

export { initMenu };
