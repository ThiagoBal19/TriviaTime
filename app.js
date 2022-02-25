import {questions} from './js/questions.js';
import {Quiz} from './js/Quiz.js';
import {Interaction} from './js/Interaction.js';

function modal() {
    Swal.fire({
        position: "center",
        heightAuto: false,
        title: 'Reglas!',
        html: '<p>Debes responder correctamente 12 o más preguntas</p> <p>Fondo 🟢 = correcto</p> <p>Fondo 🔴 = incorrecto</p> <p class="text">Mucha suerte !</p>',
        icon: 'info',
        confirmButtonText: 'OK'
    })
}
modal();

/**
 * 
 * @param {Quiz} quiz el principal objeto
 * @param {Interaction} interaction objeto interactivo 
 */

const renderPage = (quiz, interaction) => {
    if (quiz.isFinished()) {
        interaction.showPuntos(quiz.puntos);
    } else {
        interaction.showCategoria(quiz.getPreguntasIndex().categorie);
        interaction.showPregunta(quiz.getPreguntasIndex().question);
        interaction.showOpciones(quiz.getPreguntasIndex().opciones, (currentChoice) => {
            quiz.guess(currentChoice);
            renderPage(quiz, interaction);
        });
        interaction.showProgreso(quiz.preguntaIndex, quiz.questions.length)
    }
}

function principal() {
    const quiz = new Quiz(questions)
    const interaction = new Interaction();

    renderPage(quiz, interaction)    
}

principal();