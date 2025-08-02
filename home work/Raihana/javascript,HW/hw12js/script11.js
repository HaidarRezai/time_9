let info = [
    {
        room: 1,
        person: [
            {
                name: "Sara",
                img: "https://randomuser.me/api/portraits/women/1.jpg",
                text: "arbeitet als Designerin"
            }
        ]
    },
    {
        room: 2,
        person: [
            {
                name: "Fatima",
                img: "https://randomuser.me/api/portraits/women/4.jpg",
                text: "arbeitet im Marketing"
            },
            {
                name: "Mina",
                img: "https://randomuser.me/api/portraits/women/21.jpg",
                text: "arbeitet als HR-Managerin"
            }
        ]
    },
    {
        room: 3,
        person: [
            {
                name: "Elina",
                img: "https://randomuser.me/api/portraits/women/5.jpg",
                text: "arbeitet als QA-Testerin"
            }
        ]
    },
    {
        room: 4,
        person: [
            {
                name: "Niloofar",
                img: "https://randomuser.me/api/portraits/women/6.jpg",
                text: "arbeitet als UX-Designerin"
            }
        ]
    },
    {
        room: 5,
        person: [
            {
                name: "Layla",
                img: "https://randomuser.me/api/portraits/women/10.jpg",
                text: "arbeitet als Projektleiterin"
            },
            {
                name: "Yasmin",
                img: "https://randomuser.me/api/portraits/women/11.jpg",
                text: "arbeitet als IT-Spezialistin"
            }
        ]
    },
    {
        room: 6,
        person: [
            {
                name: "Julia",
                img: "https://randomuser.me/api/portraits/women/12.jpg",
                text: "arbeitet als Assistentin"
            }
        ]
    },
    {
        room: 7,
        person: [
            {
                name: "Clara",
                img: "https://randomuser.me/api/portraits/women/13.jpg",
                text: "arbeitet im Kundenservice"
            }
        ]
    },
    {
        room: 8,
        person: [
            {
                name: "Hanna",
                img: "https://randomuser.me/api/portraits/women/14.jpg",
                text: "arbeitet als Buchhalterin"
            }
        ]
    },
    {
        room: 9,
        person: [
            {
                name: "Nadia",
                img: "https://randomuser.me/api/portraits/women/15.jpg",
                text: "arbeitet als Softwareentwicklerin"
            }
        ]
    },
    {
        room: 10,
        person: [
            {
                name: "Sophia",
                img: "https://randomuser.me/api/portraits/women/16.jpg",
                text: "arbeitet als Managerin"
            }
        ]
    }
];
for (let i = 0; i < info.length; i++) {
    document.getElementById("room_num").innerHTML += `<button class="room_num_desgin" id="${i}" onclick='show(${i})'> ${info[i].room}</button>`;
}
let root = new Array()
function show(index) {

    root.push(index)
    for (j of root) {
        document.getElementById(j).classList.add("root");
    }

    document.getElementById(index).classList.add("active");
    document.getElementById(root.slice(-2, -1)).classList.remove("active");

    document.getElementById("tabel").innerHTML = `
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
    </table>`;

    for (let i of info[index].person) {
        document.getElementById("row").innerHTML += `
        <tr>
            <td><img src="${i.img}"></td>
            <td>${i.name}</td>
            <td>${i.text}</td>
        </tr>
        `
    }
}

function search() {

    let search = document.getElementById("search_style").value;

    for (i in info) {
        document.getElementById(i.toString()).classList.remove("suchen");
    }

    for (let n in info) {
        for (let p of info[n].person) {
            if (search == p.name) {
                document.getElementById(n).classList.add("suchen");
            }
        }
    }
}
