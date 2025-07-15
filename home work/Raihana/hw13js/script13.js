class Person {
    fullName = "Sara";
    age = 20;
    gender = "Female";

    show_info() {
        return `Full Name: ${this.fullName} Age: ${this.age} Gender: ${this.gender}`;
    }
    valided() {
        const input1 = document.getElementById("fullname").value;
        const input2 = document.getElementById("age").value;
        const input3 = document.getElementById("male").value;


        if(input1.length === 0){
            document.getElementById("fullname").style.boxShadow = "none";
        }
        else if (input1 === this.fullName && this.fullName.length >= 3) {
            document.getElementById("fullname").style.boxShadow = "0 0 10px green";
        } else {
            document.getElementById("fullname").style.boxShadow = "0 0 10px red";
        }


        if(input2.length === 0){
            document.getElementById("age").style.boxShadow = "none";
        }
       else if (input2.length <= 18 && this.age <= 40) {
            document.getElementById("age").style.boxShadow = "0 0 10px green";
        } else {
            document.getElementById("age").style.boxShadow = "0 0 10px red";
        }


        if (input3 === this.gender == "Male" || this.gender == "Female") {
            document.getElementById("female").style.boxShadow = "0 0 10px green";
            document.getElementById("male").style.boxShadow = "0 0 10px red";
        } else {
            return ("faild")
        }
    }
}

let obj = new Person();
document.getElementById("cover").innerHTML = obj.valided();

