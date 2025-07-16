let uppercase = Array.from({length: 26},(_,i)=>String.fromCharCode(65 + i));
setInterval(test_interval,1000)
function test_interval(){
    let r = Math.floor(Math.random() * 26)
    document.getElementById("upper").innerHTML +=` ${uppercase[r]}`;
}






