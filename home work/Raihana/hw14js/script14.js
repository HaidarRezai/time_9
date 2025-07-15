class Person {
    constructor(first_name, last_name, gender, phon) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = gender;
        this.phon = phon
    }

    show_info() {
        let all = ``
        all += "First Name: " + this.first_name + "<br>";
        all += "Last Name: " + this.last_name + "<br>";
        if (this.gender == "Male" || this.gender == "Female") {
            all += "Gender: " + this.gender + "<br>";
        } else {
            all += "Gender: invalid <br>"
        }
        all += "phon: " + this.phon + "<br>";
        return all;
    }
}

class Manger extends Person {
    post = "Manger";
    salary = 200000;
    constructor(first_name, last_name, gender, phon) {
        super(first_name, last_name, gender, phon)
    }
}

class Teacher extends Person {
    post = "Teacher";
    salary = 500000;
    constructor(first_name, last_name, gender, phon) {
        super(first_name, last_name, gender, phon)
    }
}

class Student extends Person {
    subject = "JS";
    fee = "1000"
    constructor(first_name, last_name, gender, phon) {
        super(first_name, last_name, gender, phon)
    }
}

ma = new Manger("Sara", "Ahmadi", "Female", "0894754938")
document.getElementById("cover").innerHTML += ma.show_info() + "<br>";

te = new Teacher("Ahmad", "Ahmadi", "Male", "0485724875")
document.getElementById("cover").innerHTML += te.show_info() + "<br>";

stu = new Student("Asma", "Ahmadi", "Female", "0485744359347")
document.getElementById("cover").innerHTML += stu.show_info() + "<br>";