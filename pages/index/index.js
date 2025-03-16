let burgerMenu = document.querySelector('.burger-menu');
let burgerIcon = document.querySelector('.burger-img');
let closeIcon = document.querySelector('.close-img')
let navbarMobile = document.querySelector('.navbar-mobile');

burgerMenu.addEventListener('click', () => {
    if (navbarMobile.style.display === 'block') {
        /* HIDDEN CLOSED MENU */
        navbarMobile.style.display = 'none';
        burgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        /* VISIBLE MENU */
        navbarMobile.style.display = 'block';
        burgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
});