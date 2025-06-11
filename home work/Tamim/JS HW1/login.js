const info = {
    Name: "Ahmad",
    Class: "JavaScript",
    Fee: 200
}

function getdata() {
    let x;
    let y;
    x = document.getElementById('username').value;
    y = document.getElementById('password').value;

    window.alert('The Username ' + x + ' and Password is ' + y);
}