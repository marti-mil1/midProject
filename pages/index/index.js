let burgerMenu = document.querySelector('.burger-menu');
let burgerIcon = document.querySelector('.burger-img');
let closeIcon = document.querySelector('.close-img')
let navbar = document.querySelector('.navbar');

burgerMenu.addEventListener('click', () => {
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
        burgerIcon.style.display = 'block';
        closeIcon.style.display ='none';
    } else {
        navbar.style.display = 'block';
        burgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
});
