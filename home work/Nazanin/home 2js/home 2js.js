const info = {
  username: "nazanin",
  password: "2222"

}


function oky() {
  let x;
  let y;

  x = document.getElementById("username").value;
  y = document.getElementById("password").value;
  //  document.getElementById("demo").innerHTML=x+ " "+y;

  if (x === info.username && y === info.password) {
    alert("your username" + x + " " + " and your password" + y + " are correct");
  }

  else {
    alert("worng username and password")
  }
}