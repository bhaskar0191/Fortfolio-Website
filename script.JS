let hamb = document.querySelector('.header .nav-bar .nav-list .hamb');
let mobil_manu = document.querySelector('.header.nav-bar .nav-list .hamb');
let header = document.querySelector('.header .container')


hamb.addEventListener('click', () => {
    hamb.classList.toggle('active')
    mobil_manu.classList.toggle('active')
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});