// !DOM ELEMENTS
const landing = document.querySelector(`.landing`);
const quiz = document.querySelector(`.quiz`);
const startBtn = document.querySelector(`.startBtn`);
const timer = document.querySelector(`.timer`);
// *QUIZ ELEMENTS
const questionDisplay = document.querySelector(`.question-display`);
const answers = Array.from(document.getElementsByClassName(`answer-items`));
const results = document.querySelector(`.result`);
let currentQuestion = {};
let questionCounter = 0;
let score = 0;
let acceptingAnswers = true;
const availableQuestions = questions;
let time = availableQuestions.length * 15;
let timeLeft = time;

// !TIMER FUNCTION
function timerCountdown() {
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
// !GENERATE A NEW QUESTION
function getNewQuestion() {
    // Increase question counter, grab a random question
    questionCounter += 1;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];

    // Display Questions and Answers
    questionDisplay.textContent = currentQuestion.question;

    answers.forEach((answer, i) => {
        const number = parseInt(answer.dataset.numbers);

        // const answerDisplay = answers[i].textContent;
        answer.textContent = currentQuestion.answers[i];

        acceptingAnswers = true;

        availableQuestions.splice(questionIndex, 1);

        answer.addEventListener(`click`, () => {
            const clickedAnswer = currentQuestion.answer;
            if (number === clickedAnswer) {
                console.log(`true`);
            } else {
                // penalize time
                time -= 15;
                if (time < 0) {
                    time = 0;
                }
                results.classList.remove(`hide`);
                results.textContent = `Incorrect!`;

                results.style.color(`red`);
                console.log(`false`);
            }
            // console.log(clickedAnswer);
        });
    });
    // console.log(currentQuestion);
}

// !START QUIZ
function startGame() {
    startBtn.addEventListener(`click`, () => {
        landing.classList.add(`hide`);
        quiz.classList.remove(`hide`);
        timerCountdown();
    });
    questionCounter = 0;
    score = 0;
    getNewQuestion();
}

startGame();
