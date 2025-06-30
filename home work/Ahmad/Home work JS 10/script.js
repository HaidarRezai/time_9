const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".item.active").forEach((activeItem) => {
            if (activeItem !== item) {
                activeItem.classList.remove("active");
                activeItem.querySelector(".body").style.maxHeight = null;
            }
        });
        item.classList.toggle("active");

        const body = item.querySelector(".body");
        if (item.classList.contains("active")) {
            body.style.maxHeight = body.scrollHeight + "px";
        } else {
            body.style.maxHeight = null;
        }
    });
});

let y = "kabul is a city"
let x = /k/gi;
if(x.test(y))
console.log('!GEFUNDEN')
else{
console.log('!NICHT GEFUNDEN')

}