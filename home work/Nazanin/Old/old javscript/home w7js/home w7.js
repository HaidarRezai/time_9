let arr =[
   
     {
        qu:"what is your name?",
        option:["Ahmad","Tamim","Samim"]
    }, 
    {
        qu:"how old are you?",
        option:["18","19","20"]
    },
    
     {
        qu:"what is your name?",
        option:["Ahmad","Tamim","Samim"]
    }, 
    {
        qu:"how old are you?",
        option:["18","19","20"]
    },
       
]
for (i of arr){
    document.getElementById("page").innerHTML += `<p>${i.qu}</p>`
    // for (y of i.option){
    // document.getElementById("page").innerHTML += `<span>${y} <br></span>`;
    // }
    for (x of i.option){
        document.getElementById("page").innerHTML +=`<span>${x} <br></span>`
    }
}