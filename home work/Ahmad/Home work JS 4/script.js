const logIn = {
    user: "admin",
    pass: "1234"
}

function getDatat() {
    let x = document.getElementById('username').value;
    let y = document.getElementById('password').value;

    logIn.user = x;
    logIn.pass = y;

}
