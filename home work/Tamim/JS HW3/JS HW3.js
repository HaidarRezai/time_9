// let x = [
//     {
//         Question1: "What is your Marital Status",
//         Option: ["Married", "Single", "Divorce", "Engaged"],
//         Mark: 5,

//     },

//     {
//         Question1: "What do you do",
//         Option: ["Student", "Teacher", "Worker"],
//         Mark: 4,
//     }
// ]

// for (i of x) {
//     document.getElementById("names").innerHTML += `<p>${i.Question1}</p>`;
//     for (o of x[0, 1].Option) {
//         document.getElementById("names").innerHTML += `<span>${o}<br></span> `;
//     }

// }


let info ={Name:"Ahmad",Age:"20",Car:"BMW",Subject:"English",Phone:023234234};



for(let x of info){
    text +=info[x] + " ";
    document.getElementById("names").innerHTML += text;


}


