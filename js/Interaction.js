export class Interaction {

    /**
     * 
     * @param {string} question esta es la pregunta
     */

    // Mostramos la pregunta
    showPregunta(question) {
        const preguntaTitulo = document.getElementById("pregunta")
        preguntaTitulo.innerHTML = question;
    }

    /**
     * 
     * @param {string[]} choices estas son las opciones
     */

    // Mostramos las opciones
    showOpciones(choices, callback) {
        const opcionesQuiz = document.getElementById("opciones");
        // Limpiamos para que no se supen a las opciones anteriores
        opcionesQuiz.innerHTML = "";

        // Usamos for para recorrer el arreglo de strings, también podemos usar map
        for (let i = 0; i < choices.length; i++) {
            // Creamos el botón
            const button = document.createElement("button");
            button.innerHTML = choices[i];
            button.className = "buttons";
            button.addEventListener("click", () => callback(choices[i]));

            opcionesQuiz.append(button);
        }
    }

    /**
     * 
     * @param {number} puntos total de puntos
     */

    showPuntos(puntos) {
        let fondo = document.getElementById("quiz")
        let finQuiz;

        if (puntos >= 12) {
            fondo.style = "background-color: white"
            finQuiz = `<h1>¡Bien Hecho 😎!</h1>
                       <h2>${puntos} puntos</h2>
                       <button class='reintentarBtn' onclick='location.reload()'>Reintentar</button>
                       `;
        } else {
            fondo.style = "background-color: white"
            finQuiz = `<h1>¡Inténtalo Otra Vez 😜!</h1>
                       <h2>${puntos} puntos</h2>
                       <button class='reintentarBtn' onclick='location.reload()'>Reintentar</button>
                       `;
        }

        const elemento = document.getElementById("quiz")
        elemento.innerHTML = finQuiz;
    }

    /**
     * 
     * @param {number} currentChoice actual numero de pregunta
     * @param {number} total preguntas en total
     */

    showProgreso(currentChoice, total) {
        const progress = document.getElementById("progreso");
        progress.innerHTML = `Pregunta ${currentChoice} de ${total}`;
    }
}