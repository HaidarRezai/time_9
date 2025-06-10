function submitt() {
  let deutsch = + document.getElementById('deutsch').value;
  let mathe = + document.getElementById('mathe').value;
  let englisch = + document.getElementById('englisch').value;
  let info = + document.getElementById('info').value;
  let result = (deutsch + mathe + englisch + info) / 4;
  document.getElementById('result').value = `${result}%`;
}







// let d = document.getElementById("deutsch").value; // "76"
// let m = document.getElementById("mathe").value;   // "87"
// let summe = d + m; // ergibt "7687" ❌

// gibt immer einen String zurück, z. B. "76" (nicht die Zahl 76). ohne (+) zeichen


// let d = +document.getElementById("deutsch").value; // wird zu 76 (Zahl)
// let m = +document.getElementById("mathe").value;   // wird zu 87 (Zahl)
// let summe = d + m; // ergibt 163 ✅
