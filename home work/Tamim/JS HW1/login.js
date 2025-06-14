const info = [
    {
        full_name: "Samim Sulimani",
        Username: "admin1",
        Password: "admin"
    },
    {
        full_name: "Ahmad Sulimani",
        Username: "admin2",
        Password: "admin"
    },
    {
        full_name: "Nazanin Sulimani",
        Username: "admin3",
        Password: "admin"
    },
]
/*

1 loop 
    1 if
    2 break;
*/
function getdata() {
    let x = document.getElementById('username').value;
    let y = document.getElementById('password').value;
    info.Username = x;
    info.Password = y;
    if (x === info.Username && y === info.Password) {
        alert('Your username ' + x + ' and Your Password ' + y + ' are correct');
    }
    else {
        alert('Your Username ' + x + 'and Password ' + y + 'is wrong');
    }
}