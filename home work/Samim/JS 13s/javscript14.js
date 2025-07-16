       const uppercase = Array.from({length: 26},(_,i)=> String.fromCharCode(65+i));
    setInterval(one,600);
    function one(){
        let x = Math.floor(Math.random()*26)
        document.getElementById("text").innerHTML+=`${uppercase[x]}`
    }