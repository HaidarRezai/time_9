function show(value) {
    document.getElementById("display").value += value;
}

function remove(){
    let x = document.getElementById("display");
    x.value = x.value.slice(0, -20);
}

function del(){
    let x = document.getElementById("display");
    x.value = x.value.slice(0, -1);
}

function sum(){
    let x = document.getElementById("display").value;
     x= x.split("+")
    let result = 0;
    for(i of x){
        result += Number(i);

    }
    document.getElementById("display").value = result;

}