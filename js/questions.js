import {Pregunta} from './Question.js';
import {arrayPreguntas} from './arrayQuestions.js';

// Map recorre cada arreglo y retorna un nuevo arreglo con sus valores
export const questions = arrayPreguntas.map(pregunta => new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta))