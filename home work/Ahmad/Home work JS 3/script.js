const rate = 69.59;
function usd() {
  let dollar1 = document.getElementById('dollar1').value;
  let afn1 = dollar1 * rate;
  document.getElementById('afn1').value = afn1;

}

function afn() {
  let afn2 = document.getElementById('afn2').value;
  let dollar2 = afn2 / rate;
  document.getElementById('dollar2').value = dollar2;

}