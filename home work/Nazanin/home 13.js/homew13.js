
setInterval(page,1000)
let colors = ["cadetblue", "blue","black" ,"darkgreen", "darkblue","gray" ]
function page(){
    let divs = document.getElementsByTagName('div');
    let x =Math.floor(Math.random()* divs.length)
    let y=  document.getElementsByTagName("div")[x]
    y.setAttribute("class", "shep")
    y.style.backgroundColor =colors[x];
}

