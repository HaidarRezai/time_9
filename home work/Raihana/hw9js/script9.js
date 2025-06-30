document.getElementById("demo").innerHTML += `<input type="text" id="name" placeholder="Name"><br>`;
document.getElementById("demo").innerHTML += `<input type="email" id="email" placeholder="E-Mail"><br>`;
document.getElementById("demo").innerHTML += `<input type="tel" id="phone" placeholder="Telefon"><br>`;
document.getElementById("demo").innerHTML += `<input type="text" id="gender" placeholder="Gender"><br>`;

document.getElementById("demo").innerHTML += `<input type="submit" id="but" onclick="chek()">`;

function chek() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;


    if (name.match(/[a-z]/gi)) {
        document.getElementById("name").style.boxShadow = "0 0 10px green";
    } else {
        document.getElementById("name").style.boxShadow = "0 0 10px red";
    }


    if (email.match(/[a-z]/gi)) {
        document.getElementById("email").style.boxShadow = "0 0 10px green";
    } else {
        document.getElementById("email").style.boxShadow = "0 0 10px red";
    }


    if (phone.match(/[0-9]/g)) {
        document.getElementById("phone").style.boxShadow = "0 0 10px green";
    } else {
        document.getElementById("phone").style.boxShadow = "0 0 10px red";
    }


    if (gender.match(/male|female/i)) {
        document.getElementById("gender").style.boxShadow = "0 0 10px green";
    } else {
        document.getElementById("gender").style.boxShadow = "0 0 10px red";
    }
}