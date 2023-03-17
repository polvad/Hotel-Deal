const burgerBtn = document.querySelector('.header__burger')
burgerBtn.addEventListener('click', showMenu);

function showMenu() {
    const menu = document.querySelector('.header__list');
    this.classList.toggle('open');
    menu.classList.toggle('show')
}
