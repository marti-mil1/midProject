let burgerMenu = document.querySelector('.burger-menu');
let burgerIcon = document.querySelector('.burger-img');
let closeIcon = document.querySelector('.close-img')
let navbarMobile = document.querySelector('.navbar-mobile');
let body = document.querySelector('body');

burgerMenu.addEventListener('click', () => {
    if (navbarMobile.style.display === 'block') {
        /* HIDDEN CLOSED MENU */
        navbarMobile.style.display = 'none';
        body.style.overflowY = 'visible';
        burgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        /* VISIBLE MENU */
        navbarMobile.style.display = 'block';
        body.style.overflowY = 'hidden';
        burgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
});

