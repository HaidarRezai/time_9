const logIn = {
    username: "Ahmad_sulaimankhail",
    password: "A!khail",
}
function log() {
    let x = document.getElementById('user').value;
    let y = document.getElementById('pass').value;

    if (x === logIn.username && y === logIn.password) {
        window.location.href = "index1.html";
    }
    else {
        alert("Username or password is incorrect")
    }
}