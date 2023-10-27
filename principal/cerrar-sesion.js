document.getElementById("pc2").addEventListener("click", function (event) {
    event.preventDefault();
    var overlay = document.getElementById("mensaje-overlay");
    overlay.style.display = "block";
});

document.getElementById("cancelar-mensaje").addEventListener("click", function () {
    var overlay = document.getElementById("mensaje-overlay");
    overlay.style.display = "none";
});

document.getElementById("aceptar-mensaje").addEventListener("click", function () {

window.location.href = "../index.html";
});