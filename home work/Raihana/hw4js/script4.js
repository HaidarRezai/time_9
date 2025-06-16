function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function remove() {
  let x = document.getElementById("display");
  x.value = x.value.slice(0, -20);
}

function del() {
  let x = document.getElementById("display");
  x.value = x.value.slice(0, -1);
}