let info = [
    {
        room: 1,
        person: [
            {
                name: "sara",
                img: "https://uploads-ssl.webflow.com/632a406bba53c60f9ca58a26/63c6ce721d927f1f4b3b843c_1x1%20Banner%20-%206%20tips%20para%20tus%20fotos%20de%20marca%20personal.jpg ",
                text: "lorem ipsum voluptate numpum opti auto in remember "
            },          
        ]
    },
    {
             room: 2,
                person: [
            {
                name: "Asma",
                img: "https://app.ue.poznan.pl/public/Images/BazaPracownikow/3769.jpg ",
                text: "lorem ipsum voluptate numpum opti auto in remember "
            },
           
           
        ]
    },
    
     {
             room: 3,
                person: [
           
            {
                name: "Fatima",
                img: "https://res.cloudinary.com/djuirsgbf/image/fetch/q_85,f_auto,w_700,h_800,c_fill,g_face/https://www.propartnergroup.com/resources/team/paulina.jpg",
                text: "lorem ipsum voluptate numpum opti auto in remember"
            },   
        ]
    },
   
      {
        room: 4,
        person: [
            {
              name: "Mariam",
                img: "https://7esl.com/wp-content/plugins/7esl-plugin/assets/images/landing/gril2.png",
                text: "lorem ipsum voluptate numpum opti auto in remember" 
            },     
        ]
    },
      {
        room: 5,
        person: [
            {
              name: "Marwa",
                img: "https://th.bing.com/th/id/R.0b0e6c928d5e4403b0c92ca887aecbdc?rik=8c3rjowgbU%2bxtg&riu=http%3a%2f%2fwww.diplomacyandcommerce.rs%2fwp-content%2fuploads%2f2021%2f03%2fMarija-Zivkovic-BIGZ-682x1024.jpg&ehk=58kvqcV2X%2bi%2f2lILyJUqmhFJTYuqdpAiwZ69vQPAzrE%3d&risl=&pid=ImgRaw&r=0",
                text: "lorem ipsum voluptate numpum opti auto in remember"
            },            
        ]
    },   
];

for (i in info){
    document.getElementById("room").innerHTML += `<div class="btn" onclick="show_info(${i})">${info[i].room} </div>`;
}

function show_info (index){
    document.getElementById("table").innerHTML = 
       `<table id="customers">
            <thead>
                <tr>
                    <th>Img</th>
                    <th>Name</th>
                    <th>Information</th>
                </tr>
            </thead>
            <tbody id="row">
            
           
         </tbody>
        </table>`;       
      for (i of info[index].person){
        document.getElementById("row").innerHTML  +=`
        <tr>
        <td><img src="${i.img}"></td>
        <td>${i.name}</td>
        <td>${i.text}</td>
        
        
        </tr>
        
        
        `
      }
    }
