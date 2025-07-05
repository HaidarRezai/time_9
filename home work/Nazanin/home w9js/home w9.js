let info = [
    {
        room: 1,
        person: [
            {
                name: "sara",
                img: "b.jpeg",
                text: "lorem ipsum voluptate numpum opti auto in remember "
            },
            {
                name: "Mariam",
                img: "a.png",
                text: "lorem ipsum voluptate numpum opti auto in remember"
            },
             {
                name: "Marwa",
                img: "c.jpeg",
                text: "lorem ipsum voluptate numpum opti auto in remember"
            },


        ]
    }
]

for (i of info) {
    document.getElementById("page").innerHTML += `<div class="btn">${i.room}</div>`;
}

for (i of info) {
    document.getElementById("page").innerHTML +=
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
    }


    for (let i of info) {
        for (let p of i.person) {
            document.getElementById("row").innerHTML += `
  <tr>
  <td><img src="${p.img}" alt="" width="50"></td>
  <td>${p.name}</td>    
   <td>${p.text}</td>
   </tr>`;
        }
    }


















