function calc(value){
    document.getElementById("input_number").value +=value;
}

function calc_remove(){
    let x = document.getElementById("input_number");
    x.value = x.value.slice(0,-1);
}