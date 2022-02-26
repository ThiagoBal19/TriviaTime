import {preguntas} from './js/preguntas.js';
import {Prueba} from './js/Prueba.js';
import {Interaccion} from './js/Interaccion.js';

function modal() {
    Swal.fire({
        position: "center",
        heightAuto: false,
        title: 'Reglas!',
        html: '<div class="modal"><p>Debes responder correctamente 14 o más preguntas</p> <p>Fondo 🟢 = correcto</p> <p>Fondo 🔴 = incorrecto</p> <p class="text">Mucha suerte !</p> </div>',
        icon: 'info',
        confirmButtonText: 'OK'
    })
}
modal();

/**
 * 
 * @param {Prueba} prueba el principal objeto
 * @param {Interaccion} interaccion objeto interactivo 
 */

const hacerPagina = (prueba, interaccion) => {
    if (prueba.finalizado()) {
        interaccion.mostrarPuntos(prueba.puntos);
    } else {
        interaccion.mostrarCategoria(prueba.preguntasIndex().categoria);
        interaccion.mostrarPregunta(prueba.preguntasIndex().pregunta);
        interaccion.mostrarImagen(prueba.preguntasIndex().imagen);
        interaccion.mostrarOpciones(prueba.preguntasIndex().opciones, (actualEleccion) => {
            prueba.adivinar(actualEleccion);
            hacerPagina(prueba, interaccion);
        });
        interaccion.mostrarProgreso(prueba.preguntaIndex, prueba.preguntas.length)
    }
}

function principal() {
    const prueba = new Prueba(preguntas)
    const interaccion = new Interaccion();

    hacerPagina(prueba, interaccion)    
}

principal();