let info = [
    {
        room: 1,
        person: [
            {
                name: "Zara",
                img: 'foto.avif',
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                name: "Ahmad",
                img: 'foto.jpg',
                text: "Doloremque, magni. Dignissimos molestias architecto eius porro!"
            },
            {
                name: "Sara",
                img: 'foto.avif',
                text: "Quasi, repellendus. Similique culpa aliquid eius at."
            },
            {
                name: "Fatima",
                img: 'foto.jpg',
                text: "Facere, ullam. Eveniet, laboriosam architecto eos minima!"
            },
            {
                name: "Layla",
                img: 'foto.avif',
                text: "Voluptate, numquam. Consectetur optio autem reprehenderit in!"
            }
        ]
    }
];

for (let i of info) {
    document.getElementById("demo").innerHTML += `<div class="but">${i.room}</div>`;
}

document.getElementById("demo").innerHTML += `
    <table>
        <thead>
            <tr>
                <th>Photo</th>
                <th>Full Name</th>
                <th>Information</th>
            </tr>
        </thead>
        <tbody id="row">
        </tbody>
    </table>
`;

for (let i of info) {
    for (let p of i.person) {
        document.getElementById("row").innerHTML += `
            <tr>
                <td><img src="${p.img}" alt="" width="50"></td>
                <td>${p.name}</td>
                <td>${p.text}</td>
            </tr>
        `;
    }
}
