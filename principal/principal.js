// Obtén todos los elementos <li> dentro de .sb
const menuItems = document.querySelectorAll(".sb li");
const sbElement = document.querySelector(".sb");

// Establece el primer elemento como activo por defecto
sbElement.style.borderLeftColor = "#06d1e5"; // Color por defecto

// Agrega un controlador de eventos a cada elemento <li>
menuItems.forEach((item) => {
  // Agrega un controlador de eventos para el evento "click" en el elemento <li>
  item.addEventListener("click", () => {
    // Elimina la clase activa de todos los elementos <li>
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove("active");
    });

    // Agrega la clase activa solo al elemento clickeado
    item.classList.add("active");

    // Obtiene el color correspondiente según la clase del elemento clickeado
    const className = item.classList[0];
    const colorMap = {
      "item-1": "#06d1e5",
      "item-2": "#04e500",
      "item-3": "#e72f2f",
      "item-4": "#fdfdf6c2",
      "item-6": "#2e5ee3",
      "item-7": "#8b30b5",
      "item-8": "#ebb905",
      "item-9": "#5adfac",
    };
    // Cambia el color del borde izquierdo de .sb según el elemento clickeado
    sbElement.style.borderLeftColor = colorMap[className] || "transparent";
  });
});



// You can change global variables here:
var radius = 240; // how big of the radius
var autoRotate = true; // auto rotate or not
var rotateSpeed = -60; // unit: seconds/360 degrees
var imgWidth = 120; // width of images (unit: px)
var imgHeight = 170; // height of images (unit: px)

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');
var aVid = ospin.getElementsByTagName('video');
var aEle = [...aImg, ...aVid]; // combine 2 arrays

// Size of images
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

// Size of the ground - depend on radius
var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
    for (var i = 0; i < aEle.length; i++) {
        aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
    }
}

function applyTransform(obj) {
    // Constrain the angle of the camera (between 0 and 180)
    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;

    // Apply the angle
    obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
    ospin.style.animationPlayState = (yes ? 'running' : 'paused');
}

var sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

// auto spin
if (autoRotate) {
    var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
    ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// setup events
document.onpointerdown = function (e) {
    clearInterval(odrag.timer);
    e = e || window.event;
    var sX = e.clientX,
        sY = e.clientY;

    this.onpointermove = function (e) {
        e = e || window.event;
        var nX = e.clientX,
            nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform(odrag);
        sX = nX;
        sY = nY;
    };

    this.onpointerup = function (e) {
        odrag.timer = setInterval(function () {
            desX *= 0.95;
            desY *= 0.95;
            tX += desX * 0.1;
            tY += desY * 0.1;
            applyTransform(odrag);
            playSpin(false);
            if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                clearInterval(odrag.timer);
                playSpin(true);
            }
        }, 17);
        this.onpointermove = this.onpointerup = null;
    };

    return false;
};

document.onmousewheel = function (e) {
    e = e || window.event;
    var d = e.wheelDelta / 20 || -e.detail;
    radius += d;
    init(1);
};

// Inicializar la animación después de cargar el contenido
window.addEventListener('load', function () {
    init(1000); // Delay de 1000 ms
});