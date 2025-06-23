   console.log("hello");

    let y = 2;
    while (y <= 10) {
        let x = 1;
        while(x <= 10){
        document.getElementById("main").innerHTML += ` ${x}  x  ${y} = ${x * y} <br> `;
        x++;
        }
        y++;
        document.getElementById("main").innerHTML += ` <br>---------------------<br>`;
    }