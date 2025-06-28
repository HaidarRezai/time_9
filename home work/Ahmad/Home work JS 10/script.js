let questions = [
    {
        id: 1,
        question: "What is a programming language?",
        choices: ["A tool for cooking", "A way to communicate with computers", "A mobile app", "A video game"],
        correctAnswer: 1,
        reward: 5
    },
    {
        id: 2,
        question: "Which one is a JavaScript data type?",
        choices: ["Car", "Boolean", "Table", "Document"],
        correctAnswer: 1,
        reward: 5
    },
    {
        id: 3,
        question: "Which keyword creates a variable in JavaScript?",
        choices: ["var", "html", "print", "css"],
        correctAnswer: 0,
        reward: 5
    },
    {
        id: 4,
        question: "Which symbol is used for single-line comments in JavaScript?",
        choices: ["//", "/* */", "<!-- -->", "#"],
        correctAnswer: 0,
        reward: 5
    },
    {
        id: 5,
        question: "Which HTML tag is used to link JavaScript?",
        choices: ["<script>", "<link>", "<js>", "<javascript>"],
        correctAnswer: 0,
        reward: 5
    },
    {
        id: 6,
        question: "Which of the following is a loop in JavaScript?",
        choices: ["if", "for", "switch", "return"],
        correctAnswer: 1,
        reward: 5
    },
    {
        id: 7,
        question: "What is the output of: console.log(typeof 123);",
        choices: ["number", "string", "boolean", "object"],
        correctAnswer: 0,
        reward: 5
    },
    {
        id: 8,
        question: "How do you write 'Hello World' in an alert box?",
        choices: ["alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');", "msgBox('Hello World');"],
        correctAnswer: 2,
        reward: 5
    },
    {
        id: 9,
        question: "What does CSS stand for?",
        choices: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 1,
        reward: 5
    },
    {
        id: 10,
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["onmouseover", "onchange", "onclick", "onmouseclick"],
        correctAnswer: 2,
        reward: 5
    }
];


for (let i = 0; i < questions.length; i++) {
    let question = questions[i];
    document.getElementById('cover').innerHTML += `<p>${question.question}</p>`;

    for (let j = 0; j < question.choices.length; j++) {
        document.getElementById('cover').innerHTML += `
            <input type="radio" name="q${question.id}" value="${j}" id="q${question.id}_option${j}">
            <label id="label_q${question.id}_option${j}">${question.choices[j]}</label><br>`;
    }
    document.getElementById('cover').innerHTML += `<br>`;
}


document.getElementById('cover').innerHTML += `<button onclick="quiz()">Submit Answers</button> <div id="result"></div>`;


function quiz() {
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        let question = questions[i];
        let radios = document.getElementsByName("q" + question.id);

        for (let j = 0; j < radios.length; j++) {
            let label = document.getElementById(`label_q${question.id}_option${j}`);
            label.style.color = ""; 

            if (radios[j].checked) {
                if (j === question.correctAnswer) {
                    score += question.reward;
                    label.style.color = "green"; 
                } else {
                    label.style.color = "red";   
                }
            }
        }


        let correctLabel = document.getElementById(`label_q${question.id}_option${question.correctAnswer}`);
        correctLabel.style.color = "green";
    }

    document.getElementById('result').innerText = "Your total score: " + score;
}
