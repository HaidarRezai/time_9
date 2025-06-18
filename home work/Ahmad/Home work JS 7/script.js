function darkMode() {
    document.getElementById('body').classList.toggle("dark_mode")
}
function addToDisplay(value) {
    document.getElementById("display").value += value + "";
}
function remove() {
    let x = document.getElementById("display");
    x.value = x.value.slice(0,-1);
}
function removeAc() {
    let x = document.getElementById("display");
    x.value = x.value.slice(-1,0);
}

function sum(){
    let plus = document.getElementById('display').value;
    plus = plus.split('+')
    let result = 0
    for(i of plus){
        result += Number(i)
    }
    document.getElementById('display').value = result;
}