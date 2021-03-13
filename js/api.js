import * as UI from './interfaz.js';

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }
    consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`
        fetch(url)
            .then(respuesta => {
                return respuesta.json();
            })
            .then(datos => {
                if (datos.lyrics) {
                    const lyrics = datos;
                    UI.divResultado.textContent = lyrics.lyrics;
                    UI.headingResultado.textContent = `Letra de la cancion ${this.cancion} de ${this.artista}`;

                } else {
                    UI.divMensaje.textContent = 'la cancion no fue encontrada';
                    UI.divMensaje.classList.add('error');
                    setTimeout(() => {
                        UI.divMensaje.textContent = '';
                        UI.divMensaje.classList.remove('error');
                    }, 3000);
                }
            })
    }
}

export default API;