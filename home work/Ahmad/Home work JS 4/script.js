const logIn = {
    user: "",
    pass: ""
}

function getDatat() {
    let x = document.getElementById('username').value;
    let y = document.getElementById('password').value;
    
    logIn.user = x;
    logIn.pass = y;

    window.alert("Dear " + x + ", your password is " + y);
}
