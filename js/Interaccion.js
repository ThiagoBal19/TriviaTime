export class Interaccion {

    // Muestra la categoría
    mostrarCategoria(categoria) {
        const categoriaTitulo = document.getElementById("categoria")
        categoriaTitulo.innerHTML = categoria;
    }

    /**
     * 
     * @param {string} pregunta esta es la pregunta
     */

    // Mostramos la pregunta
    mostrarPregunta(pregunta) {
        const preguntaTitulo = document.getElementById("pregunta")
        preguntaTitulo.innerHTML = pregunta;
    }

    // Muestra la imágen
    mostrarImagen(imagen) {
        const imagenPregunta = document.getElementById("imagen2")
        let img;
        img = `<img src='./assets/${imagen}' alt='${imagen}'/>`;
        imagenPregunta.innerHTML = img;
    }

    /**
     * 
     * @param {string[]} elecciones estas son las opciones
     */

    // Mostramos las opciones
    mostrarOpciones(elecciones, callback) {
        const opcionesPrueba = document.getElementById("opciones");
        // Limpiamos para que no se supen a las opciones anteriores
        opcionesPrueba.innerHTML = "";

        // Usamos for para recorrer el arreglo de strings, también podemos usar map
        for (let i = 0; i < elecciones.length; i++) {
            // Creamos el botón
            const button = document.createElement("button");
            button.innerHTML = elecciones[i];
            button.className = "buttons";
            button.addEventListener("click", () => callback(elecciones[i]));

            opcionesPrueba.append(button);
        }
    }

    /**
     * 
     * @param {number} puntos total de puntos
     */

    mostrarPuntos(puntos) {
        let fondo = document.getElementById("quiz")
        let finPrueba;

        if (puntos >= 14) {
            fondo.style = "background-color: white"
            finPrueba = `
            <div class='finalJuego'>
                <p>¡Bien Hecho 😎!</p>
                <p>${puntos} puntos</p>
                <button class='reintentarBtn' onclick='location.reload()'>Reintentar</button>
                <audio autoplay>
                    <source src="./assets/ganaste.mp3" type="audio/mp3">
                    Tu navegador no soporta el audio
                </audio>
            </div>
            `;
        } else {
            fondo.style = "background-color: white"
            finPrueba = `
            <div class='finalJuego'>
                <p>¡Inténtalo Otra Vez 😜!</p>
                <p>${puntos} puntos</p>
                <button class='reintentarBtn' onclick='location.reload()'>Reintentar</button>
                <audio autoplay>
                    <source src="./assets/perdiste.mp3" type="audio/mp3">
                    Tu navegador no soporta el audio
                </audio>
            </div>
            `;
        }

        const elemento = document.getElementById("quiz")
        elemento.innerHTML = finPrueba;
    }

    /**
     * 
     * @param {number} actualEleccion actual numero de pregunta
     * @param {number} total preguntas en total
     */

    mostrarProgreso(actualEleccion, total) {
        const progreso = document.getElementById("progreso");
        progreso.innerHTML = `Pregunta ${actualEleccion} de ${total}`;
    }
}