function enter(){
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let gender = document.getElementById("gender").value;
    
    if (name.match(/[a-z]/gi)){
        document.getElementById("name").style.boxShadow = "0 0 7px green"
    } 
    else {
        document.getElementById("name").style.boxShadow = "0 0 7px red "
    }

     if (number.match(/[0-9]/g)){
        document.getElementById("number").style.boxShadow = "0 0 7px green"
    } 
    else {
        document.getElementById("number").style.boxShadow = "0 0 7px red "
    }

     if (gender.match(/Male|Famle/gi)){
        document.getElementById("gender").style.boxShadow = "0 0 7px green"
        
    } 
    else {
        document.getElementById("gender").style.boxShadow = "0 0 7px red "
    }
}
