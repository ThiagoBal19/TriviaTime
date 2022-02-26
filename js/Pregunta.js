export class Pregunta {

    // JSDoc, comentario múltiple
    /**
     * 
     * @param {string} categoria esto es la categoria
     * @param {string} pregunta esto es la pregunta
     * @param {string} imagen esto es la imagen
     * @param {string[]} opciones estas son las opciones
     * @param {string} respuesta esta es la respuesta
     */

    // Usamos un constructor para repetir una estructura
    constructor(categoria, pregunta, imagen, opciones, respuesta){
        this.categoria = categoria;
        this.pregunta = pregunta;
        this.imagen = imagen;
        this.opciones = opciones;
        this.respuesta = respuesta;
    }

    /**
     * 
     * @param {string} eleccion opciones para adivinar
     * @returns {boolean} retorna true si la respuesta es correcta
     */

    // Función de mostrar la correcta
    correcta(eleccion) {
        return eleccion === this.respuesta;
    }
}