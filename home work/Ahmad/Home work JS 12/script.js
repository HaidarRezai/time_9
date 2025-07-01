let info = [
    {
        room: 1,
        person: [
            {
                name: "Islam",
                image: "islam.jpg",
                information: `<pre>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam error quos ab molestiae recusandae! Sed ipsum repudiandae, illo,</pre>`,
            },
            {
                name: "Tate",
                image: "tate.jpg",
                information: `<pre>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam error quos ab molestiae recusandae! Sed ipsum repudiandae, illo,</pre>`,
            },
            {
                name: "Khamzat",
                image: "Khamzat-Chimaev-Press.jpg",
                information: `<pre>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam error quos ab molestiae recusandae! Sed ipsum repudiandae, illo,</pre>`,
            },
            {
                name: "Khabib",
                image: "khabib nurmagomedov announcement hero.avif",
                information: `<pre>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam error quos ab molestiae recusandae! Sed ipsum repudiandae, illo,</pre>`,
            }
        ]
    }
];

let tableHTML = `
    <table border="1">
        <thead>
            <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Information</th>
            </tr>
        </thead>
        <tbody>
`;

for (let i of info) {
    for (let j of i.person) {
        tableHTML += `
            <tr>
                <td><img src="${j.image}" alt="${j.name}" width="100"></td>
                <td>${j.name}</td>
                <td>${j.information}</td>
            </tr>
        `;
    }
}

tableHTML += `
        </tbody>
    </table>
`;

document.getElementById('cover').innerHTML = tableHTML;
