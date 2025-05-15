
// window.addEventListener("scroll", function () {
//     const navbar = document.getElementById("mainNav");

//     if (window.scrollY > 50) {
//         navbar.style.backgroundColor = "#D9D9D9";
//         navbar.style.boxShadow = "2px 4px 32px 5px rgba(0, 0, 0, 0.2)";
//     } else {
//         navbar.style.backgroundColor = "transparent";
//         navbar.style.boxShadow = "none";
//     }
// });


window.addEventListener("scroll", function() {
    let navbar = document.getElementById("mainNav");
    let logo = document.getElementById("logo");
    let home = document.getElementById("home");

    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
        logo.style.display = "none"; // hide logo
        home.style.display = "block"; // home display
    } else {
        navbar.classList.remove("scrolled");
        logo.style.display = "block"; // logo display
        home.style.display = "none"; // hide home
    }

    if (window.innerWidth < 656) {
        logo.style.display = "block"; // logo display on screen < 656px
        home.style.display = "block"; // home display on screen < 656px
    }
});

// display burger menu
function toggleMenu() {
    document.querySelector(".header_nav").classList.toggle("active");
}
