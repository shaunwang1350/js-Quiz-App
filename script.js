const quizData = [
    {
        question: 'What is the most used programming language in 2020?',
        a:'Java',
        b:'R or "rrrrr"',
        c:'Python',
        d:'JavaScript',
        correct: 'c'
    },
    {
        question: 'Who is the President of US?',
        a:'Donald Trump',
        b:'Xi Jing Ping',
        c:'Kanye',
        d:'Joe Biden',
        correct: 'd'
    },
    {
        question: 'Fastest way to get rich?',
        a:'Only Fans',
        b:'A good 9 - 5 job',
        c:'Doge Coin',
        d:'AMC gang',
        correct: 'b'
    },
    {
        question: 'Is cereal soup?',
        a:'Cmon man...stop!',
        b:'No, you are a psychopath',
        c:'Umm, yes',
        d:'I\'m a guy of Semiotics guy',
        correct: 'a'
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
                <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
                <ol style="font-size: 1.2rem; margin: 3rem 1rem;">
                    <li style="margin: 1.2rem 0;"> <i>'What is the most used programming language in 2020?' </i> <br> <b>correct answer: </b>  Python. Did you select R!</li>
                    <li style="margin: 1.2rem 0;"> <i>'Who is the President of US?' </i> <br> <b>correct answer: </b> Old Joe, but Kanye tho?</li>
                    <li style="margin: 1.2rem 0;"> <i>'Fastest way to get rich?' </i> <br> <b>correct answer: </b> Cmon now, a good 9 - 5 job? Slow and steady wins the race?</li>
                    <li style="margin: 1.2rem 0;"> <i>'Is cereal soup?' </i> <br> <b>correct answer: </b> Just stop man...</li>
                </ol>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

