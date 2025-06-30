function execute() {
    let name = document.getElementById('full_name').value;
    let mail = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    
    if (name.match(/[a-z]/i)) {
        document.getElementById('full_name').style.border = "2px solid green";
    } else {
        document.getElementById('full_name').style.border = "2px solid red";
    }

    if (mail.includes('@')) {
        document.getElementById('email').style.border = "2px solid green";
    } else {
        document.getElementById('email').style.border = "2px solid red";
    }

    if (age.match(/[0-9]/)) {
        document.getElementById('age').style.border = "2px solid green";
    } else {
        document.getElementById('age').style.border = "2px solid red";
    }
}
