let info = [
    {
        room: 'Lightweight',
        person: [
            { name: "Islam", img: "islam.jpg", text: "UFC Lightweight Champion from Dagestan.", record: '27-1' },
            { name: "Khabib", img: "khabib.avif", text: "Undefeated UFC legend and lightweight GOAT.", record: '29-0' },
            { name: "Justin Gaethje", img: "https://assets-cms.thescore.com/uploads/image/file/613583/w640xh480_GettyImages-1685839207.jpg?ts=1706286453", text: "Known for exciting wars and KO power.", record: '25-5' },
            { name: "Charles Oliveira", img: "https://ufc.com/images/styles/background_image_sm/s3/2025-04/050324-Charles-Oliveira-UFC-301-QA-HERO-gettyimages-2151317202.jpg?h=d1cb525d&itok=3rjuZR0_", text: "Submission king and former champ.", record: '34-10' },
            { name: "Dustin Poirier", img: "https://themaclife.com/wp-content/uploads/2018/10/DUSTIN-POIRIER-678x381.png", text: "Fan favorite with KO power and heart.", record: '30-9' }
        ]
    },
    {
        room: 'Middleweight',
        person: [
            { name: "Khamzat", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUMiR9Ta6bSc37vKPraYmoBld72gWmkJqnFtTq40UTbuf8SCx_ODTFO2vqTrRjsbPogI&usqp=CAU", text: "Undefeated phenom with grappling dominance.", record: '14-0' },
            { name: "Dricus Du Plessis", img: "https://static.wixstatic.com/media/0eb2e4_e26b4f420ccf4ec791089efb720043fa~mv2.jpg", text: "Middleweight Champion from South Africa.", record: '23-2' },
            { name: "Israel Adesanya", img: "https://s.yimg.com/ny/api/res/1.2/zXfu6GqKQrUKGamApCimqw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNztjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2021-03/84ebacc0-7f24-11eb-bcfa-1aa5ca24ef20", text: "Elite striker and former champ.", record: '24-3' },
            { name: "Robert Whittaker", img: "https://www.fightersonlymag.com/wp-content/uploads/2023/07/robert-whittaker.jpg", text: "Ex-champ known for toughness and pace.", record: '25-7' }
        ]
    },
    {
        room: 'Heavyweight',
        person: [
            { name: "Jon Jones", img: "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/180F5/production/_133094589_jonesufc.jpg", text: "UFC GOAT across two divisions.", record: '29-0' },
            { name: "Tom Aspinall", img: "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/16A3A/production/_124403729_gettyimages-1239340361.jpg", text: "Speedy, technical British heavyweight.", record: '15-3' },
            {
                name: "Daniel Cormier",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWkt1OvltasVcXvlq4j4scnQCcgXpgiFHwA&s", 
                text: "Double champ and UFC Hall of Famer. Known for elite wrestling and commentary career.",
                record: '22-3 (1 NC)'
            }, 
              {
        name: "Francis Ngannou",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmsiaZWE-Y2z7_w2Kpwbq_LpeZFe8wUPi_2Q&s", 
        text: "UFC Heavyweight KO‑Maschine und PFL‑Champion. Extrem explosive Schläge.",
        record: '18-5'
      },
        ]
    },
    {
        room: 'Bantamweight',
        person: [
            { name: "Farid Basharat", img: "https://i.ytimg.com/vi/RiTNgYPDDAI/maxresdefault.jpg", text: "Undefeated Afghan grappler with skill.", record: '13-0' },
            { name: "Javid Basharat", img: "https://pbs.twimg.com/media/GG1phrwboAARWt7.jpg", text: "Afghan-British talent, rising fast.", record: '14-2' },
            { name: "Merab Dvalishvili", img: "https://takedownshop.com/cdn/shop/files/IMG_1344.jpg?v=1725035602", text: "Relentless Georgian wrestler on win streak.", record: '17-4' }
        ]
    },
    {
        room: 'Featherweight',
        person: [
            { name: "Movsar Evloev", img: "https://img.championat.com/c/900x900/news/big/d/l/movsar-evloev-popal-pod-shkval-kritiki_1745397148907460169.jpg", text: "Undefeated grappler from Russia.", record: '19-0' },
            { name: "Volkanovski", img: "https://sa.kapamilya.com/absnews/abscbnnews/media/2023/sports/02/11/mma_alexander-volkanovski_epa.jpg", text: "Ex-champ, pound-for-pound elite.", record: '27-4' },
            { name: "Ilia Topuria", img: "https://ichef.bbci.co.uk/ace/standard/949/cpsprodpb/9fea/live/41285940-566e-11f0-b065-d59d8f77ead2.jpg", text: "Current undefeated champion.", record: '15-0' },
            { name: "Max Holloway", img: "https://phantom-marca.unidadeditorial.es/d3366a06255864966cd483fc738dfdbf/resize/828/f/jpg/assets/multimedia/imagenes/2024/10/26/17299734606995.jpg", text: "Fan favorite, former champ known for volume striking.", record: '26-7' }
        ]
    }
];



for (i in info) {
    document.getElementById("roomButtons").innerHTML += `
    <button class="btn" onclick="showResult(${i})">     ${info[i].room} </button>
  `;
}

function showResult(index) {
    const room = info[index];
    let html = `
        <h2>Weight Class ${room.room}</h2>
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Full Name</th>
              <th>Informations</th>
              <th>Record</th>
              
            </tr>
          </thead>
          <tbody>
      `;

    for (let p of room.person) {
        html += `
          <tr>
            <td><img src="${p.img}" alt="${p.name}"></td>
            <td>${p.name}</td>
            <td>${p.text}</td>
            <td>${p.record}</td>

          </tr>
        `;
    }

    html += `
          </tbody>
        </table>
      `;
    document.getElementById("resultArea").innerHTML = html;
}
function searchFighters() {
    const query = document.getElementById("searchInput").value;
    let html = "";

    for (let i of info) {
        for (let p of i.person) {
            if (p.name.includes(query)) {
                html += `
                    <table>
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Full Name</th>
                                <th>Informations</th>
                                <th>Record</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src="${p.img}" alt="${p.name}" width="100"></td>
                                <td>${p.name}</td>
                                <td>${p.text}</td>
                                <td>${p.record}</td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                `;
            }
        }
    }

    if (html === "") {
        html = "<p>No fighters found.</p>";
    }

    document.getElementById("resultArea").innerHTML = html;
}
