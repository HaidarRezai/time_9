const info = new Array(
    {
        id: 100,
        full_name: "Omid Ahamdi",
        subject: "JS",
        user: "admin1",
        password: "123"
    },
    {
        id: 101,
        full_name: "Hamid Ahamdi",
        subject: "Python",
        user: "admin2",
        password: "1234"
    },
)

function athud() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    for (i of info) {
        if (i.user == user && i.password == pass) {
            document.getElementById("page").innerHTML = `
            <h1>Hello ${i.full_name}, to this page</h1>
            <p>Subject: ${i.subject}</p>

            `
            break;
        }
    }
}