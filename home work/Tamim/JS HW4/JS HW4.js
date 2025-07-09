function post() {
    let x = document.getElementById("fullname").value;
    x = x.match(/[a-z]/g);
    let y = document.getElementById("email").value;
    y = y.match(/[@]/g);
    let z = document.getElementById("phone").value;
    z = z.match(/[0-9]/g);

    document.getElementById("demo").innerHTML = `This Fullname:${x}, Email: ${y}, Phone:${z}`;
    if (x) {
        document.getElementById("fullname").style.border = "1px solid green";
    } else {
        document.getElementById("fullname").style.border = "1px solid red";
    }
    if (y) {
        document.getElementById("email").style.border = "1px solid green";
    }
    else {
        document.getElementById("email").style.border = "1px solid red";
    }
    if (z) {
        document.getElementById("phone").style.border = "1px solid green";
    }
    else {
        document.getElementById("phone").style.border = "1px solid red";
    }

}