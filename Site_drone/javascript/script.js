var burgerMenu = document.querySelector('.burger_menu');
var menu = document.querySelector(".menu");
var headerOverlay = document.querySelector('.menu_overlay');
var body = document.querySelector('body');


//Fonction à utiliser
function toggleBurgerMenu(burger, menu, overlay) {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('stop-scroll');
}

burgerMenu.onclick = function () {
    toggleBurgerMenu(burgerMenu, menu, headerOverlay);
}

headerOverlay.onclick = function () {
    toggleBurgerMenu(burgerMenu, menu, headerOverlay);
}