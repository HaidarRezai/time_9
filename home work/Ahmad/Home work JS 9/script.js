let x = 1
while(x <= 10){
    let y = 2
    while(y <= 10){
        
    document.getElementById('count').innerHTML += `<div>${x} x ${y} = ${x * y}</div><br>`;
    y++;
    }
    x++
     document.getElementById('count').innerHTML += "=====<br>"
}