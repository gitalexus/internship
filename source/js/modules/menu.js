function initMenu() {
  const menuBtn = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');
  const menuList = document.querySelector('[data-menu-list]');

  setTimeout(() => {
    menuList.classList.remove('visually-hidden');
  }, 500);

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('is-active');
  });
}

export { initMenu };
