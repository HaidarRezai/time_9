const info = [
    { Username: "admin", Password: "admin" },
    { Username: "tamim", Password: "tamim" },
    { Username: "khan", Password: "khan" }
];

function getdata() {
    let x = document.getElementById('username').value;
    let y = document.getElementById('password').value;
    // info.Username =x;
    // info.Password =y;
    // if(x === info.Username && y === info.Password){
    //     alert('Your username ' + x + ' and Your Password '+ y +' are correct');
    // }

    // else{
    //     alert('Your Username '+ x +' and Password ' + y +' is wrong');
    // }

    for (let i = 0; i < info.length; i++) {
        if (info[i].Username === x && info[i].Password === y) {
            alert("Your username " + info[i].Username + " and password is " + info[i].Password + "       correct");
            break;
        }

    }
    alert("Username is not exist in the Database");
};




