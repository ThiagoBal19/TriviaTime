export class Pregunta {

    // JSDoc, comentario múltiple
    /**
     * 
     * @param {string} categoria esto es la categoria
     * @param {string} pregunta esto es la pregunta
     * @param {string[]} opciones estas son las opciones
     * @param {string} respuesta esta es la respuesta
     */

    // Usamos un constructor para repetir una estructura
    constructor(categorie, question, opciones, respuesta){
        this.categorie = categorie;
        this.question = question;
        this.opciones = opciones;
        this.respuesta = respuesta;
    }

    /**
     * 
     * @param {string} choice opciones para adivinar
     * @returns {boolean} retorna true si la respuesta es correcta
     */

    // Función de mostrar la correcta
    correct(choice) {
        return choice === this.respuesta;
    }
}