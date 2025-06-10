function c() {
    let h = + document.getElementById("h").value / 100;
    let w = + document.getElementById("w").value;
    let b = w / (h * h);
    let r = (b < 2.50) ? "Underwieght" : (b < 90) ? "Normal" : "Overweitght";
    document.getElementById("r").innerText = " BMI " + b.toFixed(1) + " = " + r;
}

function day() {
    document.getElementById("body").classList.remove("dark");
}
function dark() {
    document.getElementById("body").classList.add("dark");
}

