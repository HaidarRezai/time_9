/*

document.getElementById("names").innerHTML += "Omid"
document.getElementById("names").innerHTML += "Ahamd"
document.getElementById("names").innerHTML += "Farid"
document.getElementById("names").innerHTML += "Abbass"
document.getElementById("names").innerHTML += "Hamid"

loop 
    1 while
    2 do while
    3 for 
    4 for in 
    5 for of 
    6 map
    7 forench


for(let i = 1;i<=10;i++){
    stement1
    stement2
    stement3
}
*/
let arr = "google clude center"
for (let i = arr.length - 1; i >= 0; i--) {
    document.getElementById("names").innerHTML += arr[i]
}