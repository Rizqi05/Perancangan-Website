var slideIndex = 0;
showSlides();

function tekanslide1() {
    var gambarTampil = document.getElementById("slide2")
    var gambar1 = document.getElementById("slide1")
    var gambar2 = document.getElementById("slide3")
    gambarTampil.style.display = "block"
    gambar1.style.display = "none"
    gambar2.style.display = "none"
}
function tekanslide2() {
    var gambarTampil = document.getElementById("slide3")
    var gambar1 = document.getElementById("slide1")
    var gambar2 = document.getElementById("slide2")
    gambarTampil.style.display = "block"
    gambar1.style.display = "none"
    gambar2.style.display = "none"
}
function tekanslide3() {
    var gambarTampil = document.getElementById("slide1")
    var gambar1 = document.getElementById("slide2")
    var gambar2 = document.getElementById("slide3")
    gambarTampil.style.display = "block"
    gambar1.style.display = "none"
    gambar2.style.display = "none"
}