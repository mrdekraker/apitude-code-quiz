const questions = [
    {
        question: `What is NOT a commonly present datatype in JavaScript?`,
        answers: [`String`, `Number`, `Symbol`, `Prompt`],
        answer: 4,
    },
    {
        question: `Which is NOT an advantage of JavaScript`,
        answers: [
            `More Server Interaction`,
            `Immediate feedback to the visitors`,
            `Increased Interactivity`,
            `Richer Interfaces`,
        ],
        answer: 1,
    },
    {
        question: `What is the correct syntax for referring to an external script called 'external.js'?`,
        answers: [
            `<script href="external.js>"`,
            `<script name="external.js">`,
            `<script src="external.js">`,
            `<script file="external.js">`,
        ],
        answer: 3,
    },
    {
        question: `How do you write 'Hello World' in an alert box?`,
        answers: [`msgBox('Hello World')`, `msg('Hello World')`, `alertBox('Hello World')`, `alert('Hello World')`],
        answer: 4,
    },
    {
        question: `What is the expected outcome for "const x = '1', "const y = 1", console.log(x == y)"?`,
        answers: [
            `True: String and Number both produce a 1, but are of different types`,
            `True: Both are number types`,
            `False: Both are number types`,
            `False: X is a string, Y is a number`,
        ],
        answer: 1,
    },
    {
        question: `JavaScript is an ______ language?`,
        answers: [`Object-Based`, `Object-Oriented`, `Procedural`, `None of the Above`],
        answer: 2,
    },
    {
        question: `Which of the following methods can be used to display data in some form using Javascript?`,
        answers: [`document.write()`, `console.log()`, `window.alert()`, `All of the Above`],
        answer: 4,
    },
    {
        question: `What keyword is used to check whether a given property is vaild or not?`,
        answers: [`in`, `is in`, `exists`, `lies`],
        answer: 1,
    },
    {
        question: `What will be the output of the following code snippet? (function() {
            setTimeout(() => console.log(1), 2000);
            console.log(2);
            setTimeout(() => console.log(3), 0);
            console.log(4);
        })();`,
        answers: [`1 2 3 4`, `2 3 4 1`, `2 4 3 1`, `4 3 2 1`],
        answer: 3,
    },
    {
        question: `When an operator's value is NULL, the typeof returned by the unary operator is:`,
        answers: [`Boolean`, `Undefined`, `Object`, `Integer`],
        answer: 3,
    },
    {
        question: `What does the JavaScript "debugger" statement do?`,
        answers: [
            `It will debug all the errors in the program at runtime.`,
            `It acts as a breakpoint in a program.`,
            `It will debug error in the current statement if any.`,
            `All of the above.`,
        ],
        answer: 2,
    },
    {
        question: `What will be the output of the following code snippet? 
        var a = true + true + true + * 3; print(a)`,
        answers: [`3`, `0`, `Error`, `5`],
        answer: 4,
    },
    {
        question: `What will be the output of the following code snippet? console.log(typeof(NaN));`,
        answers: [`Object`, `Number`, `String`, `None of the Above`],
        answer: 2,
    },
    {
        question: `What will be the output of the following code snippet? console.log(typeof(NaN));`,
        answers: [`true`, `Number`, `String`, `None of the Above`],
        answer: 2,
    },
    {
        question: `Which function is used to serialize an object into a JSON string in JavaScript?`,
        answers: [`stringify()`, `parse()`, `conver()`, `None of the Above`],
        answer: 2,
    },
];
