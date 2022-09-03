//  !DOM ELEMENTS
const wrapper = document.querySelector(`.wrapper`);
const landing = document.querySelector(`.landing`);
const timerEl = document.querySelector(`.timer`);
const startQuiz = document.querySelector(`#button`);
const quiz = document.querySelector(`.quiz`);
const quizButton = document.querySelector(`#button`);

// !TIMER FUNCTION
function countdown() {
    let timeLeft = 120;
    // timerEl.textContent = timeLeft;

    const timeInterval = setInterval(() => {
        if (timeLeft > 1) {
            timerEl.textContent = `Time: ${timeLeft}s`;
            timeLeft -= 1;
        } else if (timeLeft === 1) {
            timerEl.textContent = `Time: ${timeLeft}s`;
            timeLeft -= 1;
        } else {
            timerEl.textContent = `Time is up!`;
            clearInterval(timeInterval);
        }
    }, 1000);
}

// !HIDE ELEMENTS
// quiz.classList.add(`hide`);
startQuiz.addEventListener(`click`, () => {
    landing.classList.add(`hide`);
    quiz.classList.remove(`hide`);
    countdown();
});
