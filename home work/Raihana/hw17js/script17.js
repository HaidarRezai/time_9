document.addEventListener("mousemove", function (e) {
    const p = document.createElement("div");
    p.className = "particle";

    const farben = ["#F5CBCB", "#9ECAD6", "#748DAE", "#4A9782", "#A2AADB", "#8DBCC7" ,"#4A9782"];
    const farbe = farben[Math.floor(Math.random() * farben.length)];

    p.style.background = farbe;
    p.style.left = e.pageX + "px";
    p.style.top = e.pageY + "px";
    p.style.boxShadow = `0 0 40px ${farbe}`;

    document.body.appendChild(p);

    setTimeout(() => p.remove(), 10000);
});

