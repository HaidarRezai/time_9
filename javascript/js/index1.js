import info from 'data.js';

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

