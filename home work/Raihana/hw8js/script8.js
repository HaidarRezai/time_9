let arr = [
    {
        que: "What is your name?",
        opt: ["Nazanin", "Asma", "zahra", "Marim"]
    },
     {
        que: "What do you want to lernen?",
        opt: ["HTML", "CSS", "JavaScript"]
    },
]
for (i of arr) {
    document.getElementById("demo").innerHTML += `<p>${i.que}</p>`;
    for (y of i.opt) {
        document.getElementById("demo").innerHTML += `<span>${y} <br></span>`
    }
}
