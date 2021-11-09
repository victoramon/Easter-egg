let header = document.querySelector('header');
const $btnNavBar = document.querySelector('.navbar-toggler');

window.addEventListener('scroll', function () {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})

$btnNavBar.addEventListener('click', () => {
    if(window.scrollY == 0){
        header.classList.toggle('scrolling-active');;
    }
})
