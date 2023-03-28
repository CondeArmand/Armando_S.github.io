let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('open');
}




window.onload = function (){
    document.cookie = "SameSite=None; Secure";
}













// Path: Armando_S.github.io/js/script.js







