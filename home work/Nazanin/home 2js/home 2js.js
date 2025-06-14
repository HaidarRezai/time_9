    //   const info ={
    //   username: "Nazanin" , 
    //   password:"2222"

    // } 

     


    //  function oky() {
    //  let x;
    //  let y; 

    //  x =document.getElementById("username").value;
    //  y =document.getElementById("password").value;
    // //  document.getElementById("demo").innerHTML=x+ " "+y;

  //    if ( x === info.username && y === info.password){
  //     alert("your username"+ x + " " + " and your password"+ y +" are correct");
  //    }
    
  //   else {
  //     alert("worng username and password")
  //   }
  // }
  
  const pass_user= [
   {
    username:"Nazanin",
    password:"1111"
   },
   {
    username:"Raihana",
    password:"2222"
   },
   {
    username:"Ahmad",
    password:"3333"

   },
   {
    username:"Samim",
    password:"4444"
   }
  ]
  function login(){
    let x= document.getElementById("username").value;
    let y= document.getElementById("password").value;

    for(let i =0; i <= 2; i++){
      if(x === pass_user[i].username && y === pass_user[i].password) {
        alert("Welcome in our website.");
        return;
         
      }      
    }
    alert("Your Password and your Username is incorrect.");
  }
