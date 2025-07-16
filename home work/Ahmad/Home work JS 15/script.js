
const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
let randomLetter = "";
let score = 0;

setInterval(() => {
    let randomIndex = Math.floor(Math.random() * 26);
    randomLetter = letters[randomIndex];
    document.getElementById("text").value += randomLetter;}, 1000);

function count() {
    let userTyped = document.getElementById("text").value;

    if (userTyped === randomLetter) {
        score += 1;
        document.querySelector(".point").textContent = "Points: " + score;
    }
    else{
        score -= 1;
    }
}
