let arr = [
  {
    question: "What is your name?",
    name: ["Ahmad", "Khan", "Ali", "Fawad"],
    subject: "What do you want to learn?",
    subjectName: ["Javascript", "HTML", "CSS"]
  }
];

let output = "";

for (let i = 0; i < 2; i++) {
  output += arr[0].question + "<br>";
  output +=arr[0].name.join("<br>") + "<br><br>"; 
  output += arr[0].subject + "<br>";
  output += arr[0].subjectName.join("<br>") + "<br><br>"; 
}

document.getElementById("cover").innerHTML = output;
