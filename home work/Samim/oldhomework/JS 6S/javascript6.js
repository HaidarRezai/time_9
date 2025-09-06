
function men() {
    var x = Math.random() * 6
    x = Math.floor(x)
    if (x == 6) {
        document.getElementById("para").innerHTML = `<i class="bi bi-1-circle-fill"></i>`
    }
    else if (x == 5) {
        document.getElementById("para").innerHTML = `<i class="bi bi-2-circle-fill"></i>`
    }
    else if (x == 4) {
        document.getElementById("para").innerHTML = `<i class="bi bi-3-circle-fill"></i>`
    }
    else if (x == 3) {
        document.getElementById("para").innerHTML = `<i class="bi bi-4-circle-fill"></i>`
    }
    else if (x == 2) {
        document.getElementById("para").innerHTML = `<i class="bi bi-5-circle-fill"></i>`

    }
    else if (x == 1) {
        document.getElementById("para").innerHTML = `<i class="bi bi-6-circle-fill"></i>`
    }
    else if (x == 0) {
        document.getElementById("para").innerHTML = `<i class="bi bi-1-circle-fill"></i>`
    }

}

