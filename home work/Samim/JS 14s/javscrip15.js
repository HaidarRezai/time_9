
 setInterval(set,500)
 color=[,"green","black","green","black","green","black"]  
function set(){
    let x= Math.floor(Math.random() *6)
    let y= document.getElementsByTagName("div")[x]
y.setAttribute("class","testing")
y.style.backgroundColor=color[x]
}
