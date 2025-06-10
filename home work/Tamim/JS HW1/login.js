const info = {
   Username:"admin",
   Password:"admin"
}

function getdata(){
   let x = document.getElementById('username').value;
   let y = document.getElementById('password').value;
    info.Username =x;
    info.Password =y;
    if(x === info.Username && y === info.Password){
        alert('Your username ' + x + ' and Your Password '+ y +' are correct');
    }
    else{
        alert('Your Username '+ x +'and Password ' + y +'is wrong');
    }
}