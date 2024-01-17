const parrafo1 = document.querySelector('#parrafo1');
const parrafo2 = document.querySelector('#parrafo2');
const parrafo3 = document.querySelector('#parrafo3');
const contenedorPadre = document.querySelector('.contenedorParrafos');

// Ahora, parrafosEnDiv contiene todos los elementos <p> directos dentro del div con id "contenedorParrafos"

//removeChild, elimina un hijo de un padre
contenedorPadre.removeChild(parrafo2);

// remove elimina directamente un nodo

parrafo3.remove();


const parrafosEnDiv = document.querySelectorAll('.contenedorParrafos > p');

contenedorPadre.addEventListener('click', (e) => {
    if(e.target.tagName === 'P' && contenedorPadre.contains(e.target)){ //estas condiciones son para asegurarnos qeu el elemento que eliminemos está dentro del div padre
        e.target.remove();
    }
    });

