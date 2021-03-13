import * as UI from './interfaz.js';
import API from './api.js';

UI.formulario.addEventListener('submit', BuscarCancion);

function BuscarCancion(e) {
    e.preventDefault();
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if (artista === '' || cancion === '') {
        UI.divMensaje.textContent = 'todos los campos son obligatorios';
        UI.divMensaje.classList.add('error');
        setTimeout(() => {
            UI.divMensaje.textContent = '';
            UI.divMensaje.classList.remove('error');
        }, 3000);
    }

    //consultar api

    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI();



}