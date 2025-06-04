const students = {
    fullName: "Omid Ahamdi",
    gender: "Male",
    subject: ["HTML", "CSS", "JS"],
    time: "9-10 pm",
    course: function () {
        return `${this.fullName}, ${this.gender}`
    }
}

document.getElementById("para").innerHTML = students.course()

function getData() {
    let full = document.getElementById("full").value;
    let gender = document.getElementById("gender").value;
    let time = document.getElementById("time").value;

    students.fullName = full
    students.gender = gender
    students.time = time
    alert(time)
    document.getElementById("para").innerHTML = students.fullName
    document.getElementById("para").innerHTML += students.gender
    document.getElementById("para").innerHTML += students.time
}
