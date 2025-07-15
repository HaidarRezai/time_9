class Person {
    fullname = "Ali"
    age = "20"
    gender = "male"

    //     show_info() {
    //     return `full name: ${this.fullname}, Age: ${this.age}, gender: ${this.age}`
    // }

    check() {
        let input = document.getElementById("fullname").value;
        if (input.length === 0) {
            document.getElementById("fullname").style.border = "1px solid lightblue";
        }
        else if (input.length >= 3 && isNaN(this.fullname)) {
            document.getElementById("fullname").style.border = "1px solid green";
        }
        else {
            document.getElementById("fullname").style.border = "1px solid red"
        }
    }
}

let obj = new Person();
obj.check();
// document.getElementById("cover").innerHTML = obj.valided()