
let info = [
    {
        room: 1,
        person:
            [
                {
                    name: "khan",
                    img: "https://static.vecteezy.com/system/resources/previews/053/630/777/non_2x/a-man-with-a-white-shirt-and-gray-hair-photo.jpeg",
                    info: "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium itaque id consequuntur sit.",
                }
            ]

    },
    {
        room: 2,
        person:
            [
                {
                    name: "omid",
                    img: "https://www.shutterstock.com/image-photo/portrait-his-he-nicelooking-attractive-260nw-1481638418.jpg",
                    info: "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium itaque id consequuntur sit.",

                },
                {
                    name: "omid",
                    img: "https://www.shutterstock.com/image-photo/portrait-his-he-nicelooking-attractive-260nw-1481638418.jpg",
                    info: "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium itaque id consequuntur sit.",

                },
            ]

    },
    {
        room: 3,
        person:
            [
                {
                    name: "farid",
                    img: "https://c8.alamy.com/comp/F90025/portrait-of-handsome-young-man-in-white-t-shirt-outdoors-looking-in-F90025.jpg",
                    info: "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium itaque id consequuntur sit.",

                },
                {
                    name: "farid",
                    img: "https://c8.alamy.com/comp/F90025/portrait-of-handsome-young-man-in-white-t-shirt-outdoors-looking-in-F90025.jpg",
                    info: "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium itaque id consequuntur sit.",

                },

            ]

    },
    {
        room: 4,
        person:
            [
                {
                    name: "waheed",
                    img: "https://media.istockphoto.com/id/1392528328/photo/portrait-of-smiling-handsome-man-in-white-t-shirt-standing-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=6vUtfKvHhNsK9kdNWb7EJlksBDhBBok1bNjNRULsAYs=",
                    info: "    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium itaque id consequuntur sit.",

                }
            ]

    }
];

for (i in info) {
    document.getElementById("para").innerHTML += `<button class="one" onclick="check(${i})">${info[i].room}</button>`
}
function check(index) {
    document.getElementById("table").innerHTML = `
            
             <table>
            <thead>
                <tr>
                    <th>photo</th>
                    <th>full name</th>
                    <th>information</th>

                </tr>
            </thead>
            <tbody id="row">
               
            </tbody>
        </table>
            
            `
    for (i of info[index].person) {
        document.getElementById("row").innerHTML += `
                
                 <tr>
                    <td><img src="${i.img}""></td>
                    <td>${i.name}</td>
                    <td>${i.info}</td>
                </tr>
                
                
                `
    }

}