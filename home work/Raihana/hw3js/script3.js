const login = [
    {
        username: "Raihana",
        password: "1234"
    },
    {
        username: "Admin",
        password: "admin123"
    },
    {
        username: "Nazanin",
        password: "123456"
    },
    {
        username: "Ahmad",
        password: "ahmad123"
    }
]

function test() {
    let x = document.getElementById("username").value;
    let y = document.getElementById("password").value;

    for (let i = 0; i <= 2; i++) {
        if (x === login[i].username && y === login[i].password) {
            alert("welcome in our website.");
            return;
        }
    }

    alert("Your Password and your Username is incorrect.");
}