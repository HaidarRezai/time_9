class Check {
    fullname = "Ahmad";

    show_name() {
        return this.fullname;
    }

    valid() {
        const input =document.getElementById("insert").value;
        if (input === this.fullname && isNaN(this.fullname) ) {
            document.getElementById("insert").style.border = "2px solid green";
        } else {
            document.getElementById("insert").style.border = "2px solid red";
        }
    }
}

let obj = new Check();
document.getElementById("insert").innerHTML = obj.show_name(); 
obj.valid(); 


