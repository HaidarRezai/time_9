const uppercase = Array.from({ length:26 }, (_, i ) => String.fromCharCode(65 + i));

setInterval(myFunction ,100);

function myFunction() {
    let r = Math.floor(Math.random() * 26)
    document.getElementById("page_setinterval").innerHTML +=`${uppercase[r]}`
}