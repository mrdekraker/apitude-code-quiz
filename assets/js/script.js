// !DOM ELEMENTS
const landing = document.querySelector(`.landing`);
const quiz = document.querySelector(`.quiz`);
const startBtn = document.querySelector(`.startBtn`);
// !QUESTION DISPLAYS
const questionDisplay = document.querySelector(`.question-display`);
const answers = Array.from(document.getElementsByClassName(`answer-items`));
const answerList = document.querySelector(`.answer-list`);
let currentQuestion = {};
const acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
// !TIMER VARIABLES
const timer = document.querySelector(`.timer`);
const time = availableQuestions.length * 15;

// !GAME MECHANICS
const BONUS = 10;
const MAX_QUESTIONS = 5;

// GET NEW QUESTIONS
function getNewQuestion() {
    questionCounter += 1;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questionDisplay.textContent = currentQuestion.question;

    answers.forEach((answer, i) => {
        // const number = answer.dataset.numbers;
        const answerDisplay = answers[i].textContent;
        answer.textContent = currentQuestion.answers[i];
    });
}

function timerCountdown() {
    let timeLeft = time;

    const timeInterval = setInterval(() => {
        if (timeLeft > 1) {
            timer.textContent = `Time: ${timeLeft}s`;
            timeLeft -= 1;
        } else if (timeLeft === 1) {
            timer.textContent = `Time: ${timeLeft}s`;
            timeLeft -= 1;
        } else {
            timer.textContent = `Time is up!`;
            clearInterval(timeInterval);
        }
    }, 1000);
}

function startGame() {
    startBtn.addEventListener(`click`, () => {
        landing.classList.add(`hide`);
        quiz.classList.remove(`hide`);
        timerCountdown();
    });
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

startGame();
