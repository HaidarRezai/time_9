setInterval(kreis, 1000);
function kreis() {
    let y = document.getElementsByTagName('span');
    let x = Math.floor(Math.random() * y.length);
    let com = document.getElementsByTagName("span")[x].setAttribute("class", "testing");
}
