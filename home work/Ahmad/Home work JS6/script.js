const logIn = [
    { username: "Admin", password: "123" },
    { username: "Ahmad", password: "321" },
    { username: "Ali", password: "234" }
];

function enter() {
    let x = document.getElementById("username").value;
    let y = document.getElementById("password").value;

    for (let i = 0; i < logIn.length; i++) {
        if (logIn[i].username === x && logIn[i].password === y) {
            alert("pass");
            return;
        }
    }

    alert("failed");
}


