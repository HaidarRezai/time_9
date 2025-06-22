function Dice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    if (dice === 6) {
        document.getElementById('dice').innerHTML = `<i class="bi bi-dice-6"></i>`;
    }
    else if (dice === 5) {
        document.getElementById('dice').innerHTML = `<i class="bi bi-dice-5"></i>`;
    }
    else if (dice === 4) {
        document.getElementById('dice').innerHTML = `<i class="bi bi-dice-4"></i>`;
    }
    else if (dice === 3) {
        document.getElementById('dice').innerHTML = `<i class="bi bi-dice-3"></i>`;
    }
    else if (dice === 2) {
        document.getElementById('dice').innerHTML = `<i class="bi bi-dice-2"></i>`;
    }
    else if (dice === 1) {
        document.getElementById('dice').innerHTML = `<i class="bi bi-dice-1"></i>`;
    }
}


