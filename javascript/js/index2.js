class Person {
    constructor(first_name, last_name, gender, phone) {
        this.fullname = first_name + " " + last_name
        this.gender = gender;
        this.phone = phone;
    }
    show_info() {
        let all = ``
        all += "Full Name: " + this.fullname + "<br>"
        if (this.gender == "Male" || this.gender == "Female") {
            all += "Gender: " + this.gender + "<br>"
        } else {
            all += "Gender: Invalid" + "<br>"

        }
        all += "Phone: " + this.phone + "<br>"
        return all
    }

}

class Student extends Person {
    constructor(first_name, last_name, gender, phone) {
        super(first_name, last_name, gender, phone)
    }
    subject = "JS";
    fee = 10000;
}

class Teacher extends Person {
    constructor(first_name, last_name, gender, phone) {
        super(first_name, last_name, gender, phone)
    }
    subject = "JS";
    salary = 40000;
}

class Manager extends Person {
    constructor(first_name, last_name, gender, phone) {
        super(first_name, last_name, gender, phone)
    }
    post = "Manager";
    salary = 50000;
}

ma = new Manager("Omid", "Rezai", "Male", "07878787")
document.getElementById("cover").innerHTML += `${ma.show_info()}<br> <hr>`

let stu = new Student("Farida", "Mohammadi", "Female", "0787878")
document.getElementById("cover").innerHTML += stu.show_info()
