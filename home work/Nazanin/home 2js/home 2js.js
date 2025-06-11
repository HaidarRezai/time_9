let info = {
    user: "",
    password: "",
}

function oky() {
    let x;
    let y;


    x = document.getElementById("username").value;
    y = document.getElementById("password").value;
    info.user = x;
    info.password = y;
    document.getElementById("demo").innerHTML = x + " " + y;
}