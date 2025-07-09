class FullName {
    fullname = "Ahmad";
    gender = "Male";
}

let obj = new FullName();  

function check() {
    const input = document.getElementById('fullName').value;

    if (input === obj.fullname) {
        document.getElementById('fullName').style.borderBottom = "2px solid green";
    } else {
        document.getElementById('fullName').style.borderBottom = "2px solid red";
    }
}
