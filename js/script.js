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

navigator.storage.persist().then(persistent => {
    if (persistent) {
        console.log('Armazenamento persistente habilitado');
    } else {
        console.log('Armazenamento persistente não habilitado');
    }
});














// Path: Armando_S.github.io/js/script.js







