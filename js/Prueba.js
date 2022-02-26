import {Pregunta} from './Pregunta.js';

export class Prueba {

    /**
     * 
     * @param {Pregunta[]} preguntas 
     */
    
    // opciones de respuesta
    constructor(preguntas){
        this.preguntas = preguntas;
    }


    preguntaIndex = 0;
    puntos = 0;

    /**
     * 
     * @returns {Pregunta} pregunta encontrada
     */

    // Mostrar por cuál pregunta va el usuario
    preguntasIndex() {
        return this.preguntas[this.preguntaIndex];
    }

    // Finaliza la cantidad de preguntas
    finalizado() {
        return this.preguntas.length === this.preguntaIndex;
    }

    /**
     * 
     * @param {string} respuesta la respuesta
     */

    // Si el usuario adivina, aumenta de puntos y pasa a la otra pregunta
    adivinar(respuesta) {
        let fondo = document.getElementById("quiz")

        if (this.preguntasIndex().correcta(respuesta)) {
            this.puntos++
            fondo.style = "background-color: lightgreen"
            console.log("Correcto")
        } else {
            fondo.style = "background-color: lightcoral"
            console.log("Incorrecto")
        }
        this.preguntaIndex++
    }
}