
        function test_ATD(value){
            document.getElementById("display").value += value;
        } 
        function remove(){
            let x = document.getElementById("display");
            x.value = x.value.slice(0, -1);
        }

        function sum(){
            let x = document.getElementById("display").value;
            x = x.split("+");
            let relsult = 0;
            for (i of x){
                relsult += Number(i);
            }
            document.getElementById('display').value=relsult;
        }

