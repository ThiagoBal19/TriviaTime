import {Pregunta} from './Question.js';

export class Quiz {

    /**
     * 
     * @param {Pregunta[]} questions 
     */
    
    // opciones de respuesta
    constructor(questions){
        this.questions = questions;
    }


    preguntaIndex = 0;
    puntos = 0;

    /**
     * 
     * @returns {Pregunta} pregunta encontrada
     */

    // Mostrar por cuál pregunta va el usuario
    getPreguntasIndex() {
        return this.questions[this.preguntaIndex]
    }

    // Finaliza la cantidad de preguntas
    isFinished() {
        return this.questions.length === this.preguntaIndex;
    }

    /**
     * 
     * @param {string} answer la respuesta
     */

    // Si el usuario adivina, aumenta de puntos y pasa a la otra pregunta
    guess(answer) {
        let fondo = document.getElementById("quiz")

        if (this.getPreguntasIndex().correct(answer)) {
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