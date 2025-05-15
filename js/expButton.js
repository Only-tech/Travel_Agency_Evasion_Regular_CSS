document.getElementById("explore_button").addEventListener("click", function() {
    let target = document.querySelector(this.getAttribute("data-target"));
    
    window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
    });
});

const monBouton = document.getElementById("explore_button");

monBouton.addEventListener("mouseenter", () => {
    monBouton.style.opacity = "1";
    monBouton.style.animationPlayState = "paused";
});

monBouton.addEventListener("mouseleave", () => {
    monBouton.style.animationPlayState = "running";
});

// change color
document.getElementById("explore_button").addEventListener("mouseenter", function() {
    document.getElementById("path1").setAttribute("fill", "#fff");
    document.getElementById("path2").setAttribute("fill", "#131C46");
});

// reset to origin color
document.getElementById("explore_button").addEventListener("mouseleave", function() {
    document.getElementById("path1").setAttribute("fill", "#131C46"); 
    document.getElementById("path2").setAttribute("fill", "#fff"); 
});