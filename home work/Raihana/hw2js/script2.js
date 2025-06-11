const info = {
    username: "raihana",
    password: "123456"
}

function login(){
   let x = document.getElementById("username").value;
   let y = document.getElementById("password").value;

   if(x === info.username && y === info.password){
    window.alert("Welcome in our Website." + x + y)
   }
   else{
    alert("worng password")
   }

}