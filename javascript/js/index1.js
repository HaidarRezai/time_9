
var x = `
Lorem ipsum, dolor sit amet consectetur adipisicing elit.
Est cum similique voluptatum esse tempore itaque.
Expedita harum voluptates fugiat obcaecati unde ad debitis et dignissimos delectus.
Non ducimus voluptas dolore.
`

document.getElementById("test").innerHTML = x
document.getElementById("test").innerHTML += `<input type="text" id="text" onchange="task()" placeholder="Just Number">`
document.getElementById("test").innerHTML += `<input type="submit" onclick="task()">`


function task() {
    let enter = document.getElementById("text").value
    enter = enter.match(/(Male|Female)/g);
    document.getElementById("test").innerHTML += enter
    if (enter) {
        document.getElementById("text").style.border = "1px solid green"
    } else {
        document.getElementById("text").style.border = "1px solid red"
    }

}