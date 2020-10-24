const botonItems = Array.from(document.querySelectorAll('.btn-item'));

botonItems.forEach(item =>{
    item.addEventListener('click',desplegar);

    function desplegar(e){
        e.preventDefault();
        if(item.className == 'btn-item active'){
            removerClase()
        }
        else {
            removerClase()
            item.classList.add('active');
        }
    }

})

function removerClase(){
    botonItems.forEach(item =>{
        item.classList.remove('active');
    })
}