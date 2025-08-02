let color = ['#205781', '#017eb3ff', '#208174ff', '#14abbfff']
function growCircle() {
  let divs = document.getElementsByTagName('div');
  let x = Math.floor(Math.random() * divs.length);
  let y = document.getElementsByTagName('div')[x];
  y.setAttribute('class', 'grow');
  y.style.backgroundColor = color[x];
}
setInterval(growCircle, 1000);