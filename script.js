let menu = document.getElementById("menu");
let menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("hidden");
});
window.addEventListener("scroll", function() {
    menu.classList.add("hidden");
});
