const info = [
  {
    username: "nazanin",
    password: "2222"
  },
  {
    username: "Samim",
    password: "1234"
  },

  {
    username: "Zahra",
    password: "1234"
  },

]


function oky() {
  let x;
  let y;

  x = document.getElementById("username").value;
  y = document.getElementById("password").value;
  //  document.getElementById("demo").innerHTML=x+ " "+y;

  for (i of info) {
    if (x === i.username && y === i.password) {
      alert("your username" + x + " " + " and your password" + y + " are correct");
    }

    else {
      alert("worng username and password")
    }
    break;
  }
}