const arr = [
    1, 2, 3, 4, 5
]
const names = [
    "Ahmad", "Samim", "Tamin", "Rahana", "Nazanin"
]

const result = new Array()
function test() {
    arr.sort(function () { return 0.5 - Math.random() });
    for (i of arr) {
        result.push(names[i - 1])
    }
    document.getElementById("page").innerHTML = `${result}`

}

