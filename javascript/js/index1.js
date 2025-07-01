let info = [
    {
        room: 1,
        person: [
            {
                name: "Omid",
                img: "./image/1.png",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusamus, cupiditate vel minus totam, neque deserunt delectus error porro quo quibusdam nostrum quisquam, reiciendis unde quidem nisi dolore? Velit, necessitatibus?",
            },
            {
                name: "Reza",
                img: "./image/2.png",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusamus, cupiditate vel minus totam, neque deserunt delectus error porro quo quibusdam nostrum quisquam, reiciendis unde quidem nisi dolore? Velit, necessitatibus?",
            },
            {
                name: "Hamid",
                img: "./image/3.png",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusamus, cupiditate vel minus totam, neque deserunt delectus error porro quo quibusdam nostrum quisquam, reiciendis unde quidem nisi dolore? Velit, necessitatibus?",
            },
            {
                name: "Abbas",
                img: "./image/4.png",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusamus, cupiditate vel minus totam, neque deserunt delectus error porro quo quibusdam nostrum quisquam, reiciendis unde quidem nisi dolore? Velit, necessitatibus?",
            },
            {
                name: "Farid",
                img: "./image/5.png",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusamus, cupiditate vel minus totam, neque deserunt delectus error porro quo quibusdam nostrum quisquam, reiciendis unde quidem nisi dolore? Velit, necessitatibus?",
            },

        ]
    },
    {
        room: 2,
        person: [
            {
                name: "Omid",
                img: "./image/1.png",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusamus, cupiditate vel minus totam, neque deserunt delectus error porro quo quibusdam nostrum quisquam, reiciendis unde quidem nisi dolore? Velit, necessitatibus?",
            },
            {
                name: "Reza",
                img: "./image/2.png",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusamus, cupiditate vel minus totam, neque deserunt delectus error porro quo quibusdam nostrum quisquam, reiciendis unde quidem nisi dolore? Velit, necessitatibus?",
            },
            {
                name: "Hamid",
                img: "./image/3.png",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusamus, cupiditate vel minus totam, neque deserunt delectus error porro quo quibusdam nostrum quisquam, reiciendis unde quidem nisi dolore? Velit, necessitatibus?",
            },
            {
                name: "Abbas",
                img: "./image/4.png",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusamus, cupiditate vel minus totam, neque deserunt delectus error porro quo quibusdam nostrum quisquam, reiciendis unde quidem nisi dolore? Velit, necessitatibus?",
            },
            {
                name: "Farid",
                img: "./image/5.png",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusamus, cupiditate vel minus totam, neque deserunt delectus error porro quo quibusdam nostrum quisquam, reiciendis unde quidem nisi dolore? Velit, necessitatibus?",
            },

        ]
    }
]

for (i of info) {
    document.getElementById("cover").innerHTML += `<div class="btn" onclick="showResult()">${i.room}</div>`
}

function showResult() {
    for (i of info) {
        document.getElementById("cover").innerHTML += `
            <table>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Full Name</th>
                        <th>Informations</th>
                    </tr>
                </thead>
                <tbody id="row">
                    
                </tbody>
            </table>
        `
        for (p of i.person) {
            document.getElementById("row").innerHTML += `
            <tr>
                <td><img src="${p.img}" alt=""></td>
                <td>${p.name}</td>
                <td>${p.text}</td>
            </tr>
            `
        }
    }
}
