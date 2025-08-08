let lists = document.getElementsByTagName("li")
let test = document.getElementById("test")
let txt = ["Computer", "Moble", "Lab", "Phone"]

let counter = 0
for (let i of lists) {
    test.innerHTML += counter + ": " + i.innerText + " => " + txt[counter] + "<br>"
    counter++
}