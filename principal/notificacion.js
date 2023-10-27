const favoritos = [
  {
    img: "https://cadenaser.com/resizer/c8tqVQGdoLhDl2BhQ7KfENiKygY=/1200x1200/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/2DL26OC72NL7XDH63V26DSVXUA.jpg",
    Nombre: "Wilmer Rodriguez",
    genero: "masculino",
    direccion: "Av. Villa Sol",
    "Precio departamento": "S/ 234.00",
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/mh-celeb-name-changes-1567632828.png?crop=0.429xw:0.859xh;0.0321xw,0&resize=640:*",
    Nombre: "Elton John",
    genero: "Masculino",
    direccion: "Calle Principal",
    "Precio departamento": "S/ 320.50",
  },
  {
    img: "https://www.lanacion.com.py/resizer/-LAi7GhLNZLJbJgFLO6GFEZdkEI=/1016x0/smart/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/lanacionpy/FCM5YB4E4NBE3EKBRW3WHN243E.png",
    Nombre: "Tom cruise",
    genero: "masculino",
    direccion: "Av. Libertad",
    "Precio departamento": "S/ 200.00",
  },
];

const solicitudes = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUw54AbtSYGjKRpstWayQp3okomFsWGnx295Wm0bN5NR3BrhNXQgwZP4qSUaTmu0SQFoY&usqp=CAU",
    Nombre: "Simon Pegg",
    direccion: "Av. Villa Sol",
    mensaje: "Hola! ¿Cómo estás?",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCwQ9UlydTLp0wkVbQREUTbGwwODCQ3aVUyQ&usqp=CAU",
    Nombre: "Selena Gomez",
    direccion: "Av. Libertad",
    mensaje: "Hola, ¿qué tal?",
  },
];
// Variable de estado para rastrear si el contenido está visible
let contenidoVisible = null; // Puede ser 'favoritos' o 'solicitudes'

function mostrarContenido(contenido) {
  // Obtén la referencia al contenedor
  const container = document.querySelector(".formato");

  // Limpia el contenedor
  container.innerHTML = "";

  if (contenidoVisible === contenido) {
    // Si el contenido actual es el mismo que el contenido que se quiere mostrar, ocúltalo
    contenidoVisible = null;
  } else {
    if (contenido === "favoritos") {
      // Mostrar favoritos
      const h1 = document.createElement("h1");
      h1.textContent = "Favoritos";
      h1.className = "Encabezado";
      container.appendChild(h1);

      // Itera sobre la lista de favoritos y crea elementos para cada uno
      favoritos.forEach((favorito) => {
        const favoritoDiv = document.createElement("div");
        favoritoDiv.className = "favoritos-container";

        favoritoDiv.innerHTML = `
          <div class="favorito-foto">
            <img src="${favorito.img}" alt="${favorito.Nombre}">
          </div>
          <div class="informacion-favoritos">
            <h2 class="favoritos-title">${favorito.Nombre}</h2>
            <p class="favoritos-subtitle">Género: ${favorito.genero}</p>
            <p class="favoritos-subtitle">Dirección: ${favorito.direccion}</p>
            <p class="favoritos-subtitle">Precio departamento: ${favorito["Precio departamento"]}</p>
          </div>
        `;

        // Agrega cada elemento de favorito al contenedor
        container.appendChild(favoritoDiv);
      });
    } else if (contenido === "solicitudes") {
      // Mostrar solicitudes
      const h1 = document.createElement("h1");
      h1.textContent = "Notificacion";
      h1.className = "Encabezado";
      container.appendChild(h1);

      // Itera sobre la lista de solicitudes y crea elementos para cada una
      solicitudes.forEach((solicitud) => {
        const solicitudesDiv = document.createElement("div");
        solicitudesDiv.className = "solicitudes-container";

        solicitudesDiv.innerHTML = `
          <div class="solicitudes-foto">
            <img src="${solicitud.img}" alt="${solicitud.Nombre}">
          </div>
          <div class="informacion-solicitud">
            <h2 class="solicitudes-title">${solicitud.Nombre}</h2>
            <p class="solicitudes-subtitle">Dirección: ${solicitud.direccion}</p>
            <p class="solicitudes-mensaje">${solicitud.mensaje}</p>
            <div class="btn-mensaje">
                <button type="button" >Responder</button>
                <button type="button" >Ignorar</button>
            </div>
          </div>
        `;
        // Agrega cada elemento de solicitud al contenedor
        container.appendChild(solicitudesDiv);
      });
    } 
    contenidoVisible = contenido;
  }
}
mostrarContenido("solicitudes");
document.getElementById("miEnlace").addEventListener("click", function () {
    // Llama a la función para mostrar favoritos
    mostrarContenido("favoritos");});

document.getElementById("miNotificacion").addEventListener("click", function () {
    // Llama a la función para mostrar solicitudes
    mostrarContenido("solicitudes");});