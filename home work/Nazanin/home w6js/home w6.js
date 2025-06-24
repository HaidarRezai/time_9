let x = 1
while (x <= 10){
    let y =2;
    while (y <= 10){
     document.getElementById("cover").innerHTML +=`${x} x ${y} = ${x * y}<br>`;

    y++;
    }
     x++;
        document.getElementById("cover").innerHTML +=`<br>------------- <br>`;

    
}