const info = [
    {
        id: 1,
        question: "What is a programming language?",
        option: ["A: Python", "B: Js", "C: React", "D: A language computer knows"],
        cur: "D",
        mark: 5,
    },
    {
        id: 2,
        question: "Which one is a programming language?",
        option: ["A: HTML", "B: CSS", "C: Python", "D: Figma"],
        cur: "C",
        mark: 5,
    },
    {
        id: 3,
        question: "Which one is used to style web pages?",
        option: ["A: HTML", "B: CSS", "C: JavaScript", "D: Node.js"],
        cur: "B",
        mark: 5,
    },
    {
        id: 4,
        question: "Which one is not a frontend framework?",
        option: ["A: React", "B: Vue", "C: Django", "D: Angular"],
        cur: "C",
        mark: 5,
    },
    {
        id: 5,
        question: "What does HTML stand for?",
        option: ["A: Hyperlinks and Text Markup Language", "B: Home Tool Markup Language", "C: Hyper Text Markup Language", "D: Hyper Tool Multi Language"],
        cur: "C",
        mark: 5,
    },
    {
        id: 6,
        question: "What is JavaScript primarily used for?",
        option: ["A: Styling", "B: Backend logic", "C: Making pages interactive", "D: Designing layouts"],
        cur: "C",
        mark: 5,
    },
    {
        id: 7,
        question: "Which is a backend framework?",
        option: ["A: React", "B: Angular", "C: Vue", "D: Django"],
        cur: "D",
        mark: 5,
    },
    {
        id: 8,
        question: "Which tag is used for creating hyperlinks in HTML?",
        option: ["A: <link>", "B: <a>", "C: <href>", "D: <hlink>"],
        cur: "B",
        mark: 5,
    },
    {
        id: 9,
        question: "What does CSS stand for?",
        option: ["A: Colorful Style Sheets", "B: Cascading Style Sheets", "C: Computer Style Sheets", "D: Creative Style Syntax"],
        cur: "B",
        mark: 5,
    },
    {
        id: 10,
        question: "Which language runs in a browser?",
        option: ["A: PHP", "B: JavaScript", "C: Python", "D: Java"],
        cur: "B",
        mark: 5,
    },
    {
        id: 11,
        question: "Which method converts JSON string to object in JavaScript?",
        option: ["A: JSON.stringify()", "B: JSON.convert()", "C: JSON.toObject()", "D: JSON.parse()"],
        cur: "D",
        mark: 5,
    },
    {
        id: 12,
        question: "Which one is a NoSQL database?",
        option: ["A: PostgreSQL", "B: SQLite", "C: MongoDB", "D: MySQL"],
        cur: "C",
        mark: 5,
    },
    {
        id: 13,
        question: "Which symbol is used for comments in JavaScript?",
        option: ["A: #", "B: //", "C: <!-- -->", "D: **"],
        cur: "B",
        mark: 5,
    },
    {
        id: 14,
        question: "What is React mainly used for?",
        option: ["A: Building servers", "B: Styling", "C: Creating user interfaces", "D: Managing databases"],
        cur: "C",
        mark: 5,
    },
    {
        id: 15,
        question: "What keyword declares a constant variable in JavaScript?",
        option: ["A: var", "B: let", "C: const", "D: static"],
        cur: "C",
        mark: 5,
    },
    {
        id: 16,
        question: "What is the extension of a JavaScript file?",
        option: ["A: .java", "B: .js", "C: .jv", "D: .jsx"],
        cur: "B",
        mark: 5,
    },
    {
        id: 17,
        question: "Which HTML element is used for the largest heading?",
        option: ["A: <heading>", "B: <h6>", "C: <h1>", "D: <head>"],
        cur: "C",
        mark: 5,
    },
    {
        id: 18,
        question: "What is the correct syntax to output in the browser console?",
        option: ["A: print()", "B: console.log()", "C: output()", "D: log.console()"],
        cur: "B",
        mark: 5,
    },
    {
        id: 19,
        question: "Which of the following is a Python web framework?",
        option: ["A: Laravel", "B: Django", "C: React", "D: Flask"],
        cur: "B",
        mark: 5,
    },
    {
        id: 20,
        question: "Which operator is used for equality comparison in JavaScript?",
        option: ["A: =", "B: ==", "C: ===", "D: =>"],
        cur: "C",
        mark: 5,
    },
];

for (i of info) {
    document.getElementById("test").innerHTML += `<p id="q_${i.id}">${i.id}: ${i.question}</p>`
    for (o of i.option) {
        let value = o[0];
        document.getElementById("test").innerHTML += `<label id="${i.id}${value}"><input type="radio" name="q${i.id}" value="${value}"> ${o}</label>`
    }
    document.getElementById("test").innerHTML += ``
}
document.getElementById("test").innerHTML += `<button onclick="result()">Submit</button>`
function result() {
    let getCurOption = new Array()
    let mark = 0;
    let totla_mark = 0;


    for (i of info) {
        let radios = document.getElementsByName(`q${i.id}`);
        // let radios=["A","B","C","D"]
        let selected = null;

        for (j of radios) {
            if (j.checked) {
                selected = j.value;
                break;
            }
        }

        if (selected == i.cur) {
            mark += i.mark;
            getCurOption.push(i.id)
        }
        totla_mark += i.mark
    }
    for (i of info) {
        if (getCurOption.includes(i.id)) {
            document.getElementById(`q_${i.id}`).style.color = "green"
        }
        else {
            document.getElementById(`q_${i.id}`).style.color = "red"
        }
        for (o of i.option) {
            let value = o[0];
            if (value == i.cur) {
                document.getElementById(`${i.id}${value}`).style.backgroundColor = "green"
                break
            }

        }
    }

    let pre = Math.round((mark * 100) / totla_mark)
    document.getElementById("test").innerHTML += `${mark}, ${pre}%`
}