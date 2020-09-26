const quizData = [
    {
    question: "What is the capital of California?",
    a: " Orick",
    b: "Redding",
    c: "San Francisco",
    d:" Sacramento",
    correct: "d",
    },
    {
    question: "What is the state Animal of California?",
    a: "Ostrich",
    b: "Tiger",
    c: "Grizzly Bear",
    d: "Orca Whale",
    correct: "c",
    },
    {
    question: "What California city as the largest population?",
    a: "Los Angeles",
    b: "San Jose",
    c: "San Francsico",
    d: "Fresno",
    correct: "a",
    },
    {
        question: "by acres, which is the largest California state park?",
    a: "Humboldt Redwoods",
    b: "Anza-Borrego Desert",
    c: "Lake Oroville",
    d: "Mono Lake",
    correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}


function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
	
	return answer;
}


function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }


currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
               <h2>You got ${score}/${quizData.length} questions correct.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});


