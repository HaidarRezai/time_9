let info = [
    {
        room: 1,
        person: [
            {
                name: "Omid",
                img: "https://randomuser.me/api/portraits/men/10.jpg",
                text: "Omid is a software engineer working on cloud infrastructure.",
            },
            {
                name: "Sara",
                img: "https://randomuser.me/api/portraits/women/21.jpg",
                text: "Sara is a UI/UX designer with a passion for minimalism.",
            },
            {
                name: "Yasin",
                img: "https://randomuser.me/api/portraits/men/87.jpg",
                text: "Yasin is a database administrator (DBA).",
            }
        ],
    },
    {
        room: 2,
        person: [
            {
                name: "Ali",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
                text: "Ali manages DevOps at a large tech company.",
            },
            {
                name: "Fatima",
                img: "https://randomuser.me/api/portraits/women/19.jpg",
                text: "Fatima is a content strategist and writer.",
            },
        ],
    },
    {
        room: 3,
        person: [
            {
                name: "Reza",
                img: "https://randomuser.me/api/portraits/men/45.jpg",
                text: "Reza leads a frontend development team.",
            },
        ],
    },
    {
        room: 4,
        person: [
            {
                name: "Zahra",
                img: "https://randomuser.me/api/portraits/women/46.jpg",
                text: "Zahra is an HR manager at a startup.",
            },
        ],
    },
    {
        room: 5,
        person: [
            {
                name: "Hamid",
                img: "https://randomuser.me/api/portraits/men/52.jpg",
                text: "Hamid works in network security and penetration testing.",
            },
            {
                name: "Mina",
                img: "https://randomuser.me/api/portraits/women/28.jpg",
                text: "Mina is a full stack developer with Django experience.",
            },
        ],
    },
    {
        room: 6,
        person: [
            {
                name: "Farid",
                img: "https://randomuser.me/api/portraits/men/63.jpg",
                text: "Farid is a digital marketing specialist.",
            },
        ],
    },
    {
        room: 7,
        person: [
            {
                name: "Layla",
                img: "https://randomuser.me/api/portraits/women/34.jpg",
                text: "Layla is a researcher in AI and machine learning.",
            },
        ],
    },
    {
        room: 8,
        person: [
            {
                name: "Hossein",
                img: "https://randomuser.me/api/portraits/men/75.jpg",
                text: "Hossein teaches Python and data structures.",
            },
        ],
    },
    {
        room: 9,
        person: [
            {
                name: "Narges",
                img: "https://randomuser.me/api/portraits/women/53.jpg",
                text: "Narges is an editor at an online magazine.",
            },
        ],
    },
    {
        room: 10,
        person: [
            {
                name: "Yasin",
                img: "https://randomuser.me/api/portraits/men/87.jpg",
                text: "Yasin is a database administrator (DBA).",
            },
        ],
    },
];

for (i in info) {
    document.getElementById("room").innerHTML += `<div class="btn" id="${i}" onclick="show_info(${i})">${info[i].room}</div>`
}

let root = new Array();

function show_info(index) {
    root.push(index)
    for (j of root) {
        document.getElementById(j).classList.add("root")
    }
    document.getElementById(index).classList.add("active")
    document.getElementById(root.slice(-2, -1)).classList.remove("active")
    document.getElementById("table").innerHTML = `
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
    `
    for (i of info[index].person) {
        document.getElementById("row").innerHTML += `
        <tr>
            <td><img src="${i.img}"></td>
            <td>${i.name}</td>
            <td>${i.text}</td>
        </tr>`
    }

}

let searchs = new Array();
function search() {
    for (se of searchs) {
        document.getElementById(se).classList.remove("search")
    }

    let search = document.getElementById("search").value;
    for (n in info) {
        for (p of info[n].person) {
            if (search == p.name) {
                searchs.push(n)
            }
        }
    }
    for (se of searchs) {
        document.getElementById(se).classList.add("search")
    }

}