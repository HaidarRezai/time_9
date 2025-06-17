function calc(value){
    document.getElementById("input_number").value +=value;
}

function calc_remove(){
    let x = document.getElementById("input_number");
    x.value = x.value.slice(0,-1);
}

function plus(){
    let x = document.getElementById("input_number").value;
    x =x.split("+");
    let result =0;
    for(i of x){
        result += Number(i);
    }
    document.getElementById("input_number").value=result;
}