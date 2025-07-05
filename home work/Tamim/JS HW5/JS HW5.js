let info = [
    {
        room: 1,
        person:[
          {  name: "Ahmad",
            Description: "IT Manager",
            Image: "https://randomuser.me/api/portraits/men/1.jpg"
          },
          {  name: "Ahmad",
            Description: "IT Manager",
            Image: "https://randomuser.me/api/portraits/men/1.jpg"
          },
          {  name: "Ahmad",
            Description: "IT Manager",
            Image: "https://randomuser.me/api/portraits/men/1.jpg"
          },

        ]
    },
    {
        room: 2,
        person:[
            {
                name: "Sara",
                Description: "Web Designer",
                Image: "https://randomuser.me/api/portraits/women/2.jpg"
            },
        {
                name: "Ali",
                Description: "Network Administrator",
                Image: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        ]
    },
    {
        room: 3,
        person:[
            {
                name: "Fatima",
                Description: "Data Analyst",
                Image: "https://randomuser.me/api/portraits/women/4.jpg"
            },
            {
                name: "Zain",
                Description: "Software Developer",
                Image: "https://randomuser.me/api/portraits/men/5.jpg"

            },
            {  name: "Ahmad",
            Description: "IT Manager",
            Image: "https://randomuser.me/api/portraits/men/1.jpg"
          },
        ]
    
    },
    {
        room: 4,
        person:[
            {
                name: "Mina",
                Description: "Project Coordinator",
                Image: "https://randomuser.me/api/portraits/women/6.jpg"
            },
            {
                name: "Omar",
                Description: "Cybersecurity Expert",
                Image: "https://randomuser.me/api/portraits/men/7.jpg"
            },

        ]
    },  
];

for (let i in info){
    document.getElementById("room").innerHTML += `<div id="btn" onclick="show_info(${i})"> ${info[i].room}</div>`
};

function show_info(index){
    document.getElementById("table").innerHTML =`
       <table id="table">
            <thead>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
            </thead>
            <tbody id="row">
              
              
            </tbody>
        </table>
    `
    for(let i of info[index].person){
        document.getElementById("row").innerHTML +=`
          <tr>
                <td><img src="${i.Image}"/></td>
                <td>${i.name}</td>
                <td>${i.Description}</td>
                </tr>
        `
    }
}
