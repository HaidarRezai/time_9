var info = [
    {
        room: 1,
        person: [
            {
                name: "khan",
                lastname: "jan",
                age: 23,
                info: ""
            },
            {
                name: "omid",
                lastname: "jan",
                age: 19,
                info: ""
            },
            {
                name: "farid",
                lastname: "khan",
                age: 30,
                info: ""
            },
        ]
    }
]
for (i of info) {
    document.getElementById("para").innerHTML += `<div class="one">${i.room}</div>`
}
for (j of info) {
    document.getElementById("para").innerHTML += `
<table>
        <thead>
            <tr>
                <th>Name</th>
                <th>lastname</th>
                <th>Age</th>
                <th>Information</th>
            </tr>
        </thead>
        <tbody id="row">
           
        </tbody>
    </table>
        `
}

for (i of i.person) {
    document.getElementById("row").innerHTML += `
 <tr>
                <td>${i.name}</td>
                <td>${i.lastname}</td>
                <td>${i.age}</td>
                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis cupiditate quos at non. Molestiae earum modi nisi
                    , iure sapiente perferendis architecto neque facilis quam maiores molestias non delectus adipisci ut!</td>
            </tr>
        `
}
