const landing = document.querySelector(`.landing`);
const quiz = document.querySelector(`.quiz`);
const endGame = document.querySelector(`.endGame`);
const startBtn = document.querySelector(`.startBtn`);
const submitBtn = document.querySelector(`.submitBtn`);
const topScores = document.querySelector(`.topScores`);
const topScoresList = document.querySelector(`.topScoresList`);
const tryAgainBtn = document.querySelector(`.tryAgain`);

const questionDisplay = document.querySelector(`.question-display`);
const result = document.querySelector(`.result`);
const hud = document.querySelector(`#hud`);
const scoreHUD = document.querySelector(`.scoreHUD`);
const finalScore = document.querySelector(`.finalScore`);
const questionHUD = document.querySelector(`.questionHUD`);

const answers = Array.from(document.getElementsByClassName(`answer-items`));
let currentQuestion = {};
const maxQuestions = 5;
let canAnswer = true;
let score = 0;
const bonusPts = 10;
const maxHighScore = 5;
const highScores = JSON.parse(localStorage.getItem(`highScores`)) || [];
const mostRecentScore = localStorage.getItem(`mostRecentScore`);
let questionCounter = 0;
const availableQuestions = [...questions];
const username = document.getElementById(`initials`);
const viewHighscore = document.querySelector(`.box1`);

const timer = document.querySelector(`.timer`);
const time = maxQuestions * 12;
let timeLeft = time;
let myTimer;

// !TIMER FUNCTION

function timerCountdown() {
    timeLeft = maxQuestions * 12;
    myTimer = setInterval(() => {
        if (timeLeft > 1) {
            timer.textContent = `Time: ${timeLeft}s`;
            timeLeft -= 1;
        } else if (timeLeft === 1) {
            timer.textContent = `Time: ${timeLeft}s`;
            timeLeft -= 1;
        } else {
            timer.textContent = `Time is up!`;
            clearInterval(myTimer);
        }
    }, 1000);
}

function stopTimeInterval() {
    clearInterval(myTimer);
}

viewHighscore.addEventListener(`click`, () => {
    topScoresList.innerHTML = highScores
        .map((scoreList) => `<li class="scoresList">${scoreList.name} - ${scoreList.score}</li>`)
        .join(``);

    tryAgainBtn.addEventListener(`click`, () => {
        window.location.reload();
        localStorage.removeItem(`mostRecentScore`);
        topScores.classList.add(`hide`);
        landing.classList.remove(`hide`);
    });

    stopTimeInterval();
    timer.textContent = `Ready?`;
    landing.classList.add(`hide`);
    quiz.classList.add(`hide`);
    endGame.classList.add(`hide`);
    topScores.classList.remove(`hide`);
});

// SET THE SCORES
function scoreUpdate(num) {
    score += num;
    scoreHUD.textContent = score;
}

function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions || timeLeft <= 0) {
        localStorage.setItem(`mostRecentScore`, score);
        finalScore.textContent = `${score}.`;
        stopTimeInterval();
        timer.textContent = `Time is up!`;
        quiz.classList.add(`hide`);
        endGame.classList.remove(`hide`);
        return;
    }
    questionCounter += 1;
    questionHUD.textContent = `${questionCounter}/${maxQuestions}`;

    // Grab a random Question and display bot question and answers
    const questionIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[questionIndex];
    questionDisplay.textContent = currentQuestion.question;

    answers.forEach((answer, i) => {
        // const number = parseInt(answer.dataset.numbers);
        answer.textContent = currentQuestion.answers[i];
    });

    availableQuestions.splice(currentQuestion, 1);
    canAnswer = true;
}

answers.forEach((answer) => {
    answer.addEventListener(`click`, (e) => {
        if (!canAnswer) return;

        canAnswer = false;
        const selectChoice = e.target;
        const selectedAnswer = parseInt(selectChoice.dataset.numbers);

        const results = selectedAnswer === currentQuestion.answer;
        // ternary: if something is true apply : if not true apply
        const resultsClass = selectedAnswer === currentQuestion.answer ? `answer-right` : `answer-wrong`;

        selectChoice.classList.add(resultsClass);

        // IF (statement === true: display correct info) else if (statement === false: display incorrect info) else (display other info)
        if (results === true) {
            result.classList.remove(`hide`);
            result.textContent = `Correct!`;
            result.style.color = `green`;
            scoreUpdate(bonusPts);
            setTimeout(() => {
                result.style.color = ``;
                result.classList.add(`hide`);
                selectChoice.classList.remove(resultsClass);
                getNewQuestion();
            }, 1000);
        } else {
            timeLeft -= 20;
            result.classList.remove(`hide`);
            result.textContent = `Incorrect!`;
            result.style.color = `red`;
            setTimeout(() => {
                result.style.color = ``;
                result.classList.add('hide');
                selectChoice.classList.remove(resultsClass);
                getNewQuestion();
            }, 1000);
        }
    });
});

// SUBMIT AND SAVE HIGHSCORE
username.addEventListener(`keyup`, () => {
    submitBtn.disabled = !username.value;
});

submitBtn.addEventListener(`click`, (e) => {
    const { target } = e;
    e.preventDefault();

    const scoreSubmit = {
        // score: mostRecentScore,
        score,
        name: username.value,
    };
    highScores.push(scoreSubmit);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(maxHighScore);

    localStorage.setItem(`highScores`, JSON.stringify(highScores));

    // DISPLAY HIGH SCORES
    topScoresList.innerHTML = highScores
        .map((scoreList) => `<li class="scoresList">${scoreList.name} - ${scoreList.score}</li>`)
        .join(``);

    tryAgainBtn.addEventListener(`click`, () => {
        localStorage.removeItem(`mostRecentScore`);
        topScores.classList.add(`hide`);
        landing.classList.remove(`hide`);
    });

    endGame.classList.add(`hide`);
    topScores.classList.remove(`hide`);
});

// Starts the Quiz
function startGame() {
    localStorage.removeItem(`mostRecentScore`);
    timer.textContent = `Ready?`;
    startBtn.addEventListener(`click`, () => {
        questionCounter = 0;
        score = 0;
        landing.classList.add(`hide`);
        quiz.classList.remove(`hide`);
        hud.classList.remove(`hide`);
        getNewQuestion();
        stopTimeInterval();
        timerCountdown();
    });
}

startGame();
