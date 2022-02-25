import {questions} from './js/questions.js';
import {Quiz} from './js/Quiz.js';
import {Interaction} from './js/Interaction.js';


/**
 * 
 * @param {Quiz} quiz el principal objeto
 * @param {Interaction} interaction objeto interactivo 
 */

const renderPage = (quiz, interaction) => {
    if (quiz.isFinished()) {
        interaction.showPuntos(quiz.puntos);
    } else {
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