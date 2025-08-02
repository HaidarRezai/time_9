document.addEventListener("mousemove",(movement)=>{
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = movement.clientX + "px";
    particle.style.top = movement.clientY + "px";
    document.body.appendChild(particle)

    setTimeout(() => {
        particle.remove();
    }, 1000);
})