
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("CookieBox").classList.add("show");
    }, 500); // wait 0.5s before showing
});

function hideCookieBox() {
    document.getElementById("CookieBox").classList.remove("show");
}


