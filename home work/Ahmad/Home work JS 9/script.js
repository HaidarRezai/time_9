let x = 1
while (x <= 10) {
    let y = 2
    document.getElementById('count').innerHTML += "<div class='test'>"

    while (y <= 10) {
        document.getElementById('count').innerHTML += `${x} x ${y} = ${x * y}<br>`;
        y++;
    }
    x++
    document.getElementById('count').innerHTML += "</div>"
}