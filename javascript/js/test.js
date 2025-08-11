let datas = []
async function getData() {
    await fetch("https://api.escuelajs.co/api/v1/products")
        .then((response) => {
            if (!response.ok) {
                throw new Error("خطا در دریافت دارد");
            }
            return response.json();
        })
        .then((data) => {
            datas = data;
        })
        .catch((error) => {
            console.error("خطا:", error);
        });

    datas.map((i) => (
        document.getElementById("cover").innerHTML += `
        <div class="cart">
            <h3>${i.category.name}</h3>
           
            <img src="${i.category.image}" alt="image">
            <h4>${i.title}</h4>
            <p>${i.description}</p>
            <p>Price: ${i.price}$</p>
            <div id="${i.id}"></div>
        </div>
        `,
        i.images.map((j) => (
            document.getElementById(i.id).innerHTML += `<img src="${j}" alt="image">`
        ))
    ));

}
getData();