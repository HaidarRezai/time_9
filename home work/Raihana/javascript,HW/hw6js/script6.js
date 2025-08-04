function ludo() {
    let ran = Math.random() * 6 + 1
    ran = Math.floor(ran)
    

    if (ran == 6) {
        document.getElementById("demo").innerHTML = `<i class="bi bi-dice-6"></i> `
    }
    else if (ran == 5) {
        document.getElementById("demo").innerHTML = `<i class="bi bi-dice-5"></i>`
    }
    else if (ran == 4) {
        document.getElementById("demo").innerHTML = `<i class="bi bi-dice-4"></i>`
    }
    else if (ran == 3) {
        document.getElementById("demo").innerHTML = `<i class="bi bi-dice-3"></i>`
    }  
     else if (ran == 2) {
        document.getElementById("demo").innerHTML = `<i class="bi bi-dice-2"></i>`
    } 
    else if (ran == 1) {
        document.getElementById("demo").innerHTML = `<i class="bi bi-dice-1"></i>`
    }
}

//<p>${ran}</p>
