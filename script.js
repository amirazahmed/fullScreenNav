var open = document.getElementById("open");
var nav = document.getElementById("nav");

function openNav() {
    open.style.display = "none";
    nav.style.width = "100%";
    
}
function closeNav() {
    nav.style.width ="0";
    open.style.display="block";
}