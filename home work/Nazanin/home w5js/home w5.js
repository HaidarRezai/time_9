function clik(){
   let y =Math.random() *6 + 1
   y = Math.floor(y)



   if(y == 1) {
    document.getElementById("icon").innerHTML =`<i class="bi bi-dice-1"></i> `
   }
    else if (y == 2) {
    document.getElementById("icon").innerHTML =`<i class="bi bi-dice-2"></i> `
   }
    else if (y == 3) {
    document.getElementById("icon").innerHTML =`<i class="bi bi-dice-3"></i> `
   }
    else if (y == 4) {
    document.getElementById("icon").innerHTML =`<i class="bi bi-dice-4"></i> `
   }
    else if (y == 5) {
    document.getElementById("icon").innerHTML =`<i class="bi bi-dice-5"></i> `
   }
    else if (y == 6) {
    document.getElementById("icon").innerHTML =`<i class="bi bi-dice-6"></i> `
   }
    
   


}