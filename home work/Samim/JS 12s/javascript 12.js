
class person{
    Name="farid";
    Age= " 20 ";
    Gender="male";
    
    show_info(){
        return`Name :${this.Name}, Age : ${this.Age},Gender: ${this.gender} ` 
    }
    valided(){
        let status=``
        if(isNaN(this.Name) && this.Name.length >=3 ){
            status+=`Name : ${this.Name} pass <br> <hr>` 
        }
        else{
               status+=`name: ${this.Name} field <br> ` 
        }
        if(this.Age >=18 && this.Age <=60){
            status +=`Age :${this.Age}  pass <br> <hr>`
        }
        else{
            status+=`Age :${this.Age} field <br>`
        }
        if(this.Gender=="male"&& this.Gender=="femail" ){
            status+=`Gender :${this.Gender} pass <br>`
        }
        else{
            status+=`Gender : ${this.Gender} field  <hr>`
        }

        return status
    }
}
let x =new person()
document.getElementById("para").innerHTML=x.valided() 
