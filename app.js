// Sample quiz data
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

// Function to load a question
function loadQuestion() {
    const questionData = quizData[currentQuestion];
    document.getElementById("question").innerText = questionData.question;
    document.getElementById("label1").innerText = questionData.options[0];
    document.getElementById("label2").innerText = questionData.options[1];
    document.getElementById("label3").innerText = questionData.options[2];
    document.getElementById("label4").innerText = questionData.options[3];
    document.getElementById("quiz-form").reset();
}

// Function to submit an answer and load the next question
function submitAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer before submitting.");
        return;
    }

    const answerValue = parseInt(selectedOption.value);
    if (answerValue === quizData[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        displayResults();
    }
}

// Function to display the final score
function displayResults() {
    document.getElementById("quiz-container").innerHTML = `
        <h2>Your score: ${score}/${quizData.length}</h2>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
}

// Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

// Load the first question when the page loads
window.onload = loadQuestion;
