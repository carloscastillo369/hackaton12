
const menu = document.getElementById('menu');

menu.addEventListener('click',abrirMenu);

function abrirMenu(e){
    e.preventDefault();
    const dropDown = document.getElementById('dropdown');
    dropDown.classList.toggle('active');
}