const questions = [
    {
        type: "image",
        question: "What is this animal?",
        media: "assets/images/lion.jpeg",
        options: ["Lion", "Tiger", "Elephant", "Giraffe"],
        answer: "Lion"
    },
    {
        type: "audio",
        question: "What sound does this animal make?",
        media: "assets/audio/dog-bark.mp3",
        options: ["Dog", "Cat", "Cow", "Bird"],
        answer: "Dog"
    },
    {
        type: "video",
        question: "What is happening in this video?",
        media: "assets/video/ocean.mp4",
        options: ["Ocean Waves", "Forest Fire", "Desert Storm", "City Traffic"],
        answer: "Ocean Waves"
    }
    
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score");

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <p>${question.question}</p>
        ${question.type === "image" ? `<img src="${question.media}" alt="Question Image" width="200">` : ""}
        ${question.type === "audio" ? `<audio controls><source src="${question.media}" type="audio/mpeg"></audio>` : ""}
        ${question.type === "video" ? `<video controls width="200"><source src="${question.media}" type="video/mp4"></video>` : ""}
    `;

    optionsContainer.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        score++;
        scoreDisplay.innerText = score;
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert(`Quiz Over! Your final score is ${score}`);
    }
}

nextButton.addEventListener("click", nextQuestion);

// Load the first question
loadQuestion();