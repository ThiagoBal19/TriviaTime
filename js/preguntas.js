import {Pregunta} from './Pregunta.js';
import {arrayPreguntas} from './arrayPreguntas.js';

// Map recorre cada arreglo y retorna un nuevo arreglo con sus valores
export const preguntas = arrayPreguntas.map(pregunta => new Pregunta(pregunta.categoria, pregunta.pregunta, pregunta.imagen, pregunta.opciones, pregunta.respuesta))