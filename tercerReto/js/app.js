const modal = document.getElementById('modal');
const abrir = document.querySelector('.open-modal');
const cerrar = document.getElementById('close');
const guardar = document.querySelector('.save');

abrir.addEventListener('click',abrirModal);
function abrirModal(e){
    e.preventDefault();
    modal.style.display = 'block';
}


cerrar.addEventListener('click',cerrarModal);
function cerrarModal(e){
    e.preventDefault();
    modal.style.display = 'none';
}

guardar.addEventListener('click',mensaje);

function mensaje(e){
    e.preventDefault();
    alert ('Se ha guardado');
    modal.style.display = 'none';
}