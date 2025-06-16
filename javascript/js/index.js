const arr = [
    [1, 3, 4],
    [6, 7, 8, 9],
    "Omid",
    "Farid",
    "Abbas",
    "Ahamd",
    "Hamid"
]
counter = ""
for (i of arr) {
    counter = i
    break;
}
document.getElementById("page").innerHTML = counter