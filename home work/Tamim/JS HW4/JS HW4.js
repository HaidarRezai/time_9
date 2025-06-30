function post(){
let x = document.getElementById("fullname").value;
x = x.match([/a-z/g]);
let y = document.getElementById("email").value;
y = y.match([/@/]);
let z = document.getElementById("phone").value;
z = z.match([/0-9/]);

document.getElementById("demo").innerHTML = `This Fullname:${x}, Email: ${y}, Phone:${z}`;
if(x){
    document.getElementById("fullname").style.border ="1px solid green";
}else{
        document.getElementById("fullname").style.border ="1px solid red";

}

}