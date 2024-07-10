
$(function () {
    $("#header").load("Header.html");
    $("#navbar").load("Navbar.html");
    $("#footer").load("Footer.html");
});

window.onscroll = function () { myFunction() };
var header = document.getElementById("header-top");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
