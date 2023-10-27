// estilo de menu
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


const registroGeneral = [
  {
    img: "https://isopixel.net/wp-content/uploads/2017/01/20170104-ryanreynolds01.jpg",
    Nombre: "Uriel Turpo",
    genero: "masculino",
    direccion: "Av. Villa Sol",
    "Precio departamento": "S/ 234.00",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4jWxRxcEVlb_iWITIV9z2JyegwZ26n3xgQ&usqp=CAU",
    Nombre: "Wilmer Rodriguez",
    genero: "Por descubrir",
    direccion: "La vuelta perdida",
    "Precio departamento": "S/ 234.00",
  },
  {
    img: "https://album.mediaset.es/eimg/2023/07/17/brad-pitt-durante-la-final-de-wimbledon_2236.jpg?w=1200&h=900",
    Nombre: "Erinson Ticona",
    genero: "masculino",
    direccion: "Av. Villa Sol",
    "Precio departamento": "S/ 234.00",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqX46iEiGr6ohWkV59oZaArgHc1dG44g-fIg&usqp=CAU",
    Nombre: "Yhonni Marca",
    genero: "masculino",
    direccion: "Calle de la Rosa",
    "Precio departamento": "S/ 300.25",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDC9Rn8JWtouy7d81ghYIT5gslfpSwr1Msg&usqp=CAU",
    Nombre: "Alicia Chaves",
    genero: "femenino",
    direccion: "Calle de los Sueños",
    "Precio departamento": "S/ 380.75",
  },
  {
    img: "https://cdn.trt.net.tr/images/xlarge/rectangle/c133/1cf7/a631/604b12373df0d.jpg?time=1696687104",
    Nombre: "Jason Statham",
    genero: "masculino",
    direccion: "Calle Principal",
    "Precio departamento": "S/ 320.50",
  },
  {
    img: "https://estaticos-cdn.prensaiberica.es/clip/c5e70d72-86b0-4530-b79a-a1d2c9321608_16-9-discover-aspect-ratio_default_0.jpg",
    Nombre: "Leonardo Dicaprio",
    genero: "masculino",
    direccion: "Av. Libertad",
    "Precio departamento": "S/ 200.00",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nKBMVfa7tRhXWEjSm5SNOBPqtSBiaDIJlYAyfF6wfHmvl4VriPMp-gStG7JqXddrzVA&usqp=CAU",
    Nombre: "Laura Martinez",
    genero: "femenino",
    direccion: "Calle 123",
    "Precio departamento": "S/ 280.75",
  },
  {
    img: "https://cdn-3.expansion.mx/dims4/default/f3cf1fc/2147483647/strip/true/crop/1200x799+0+0/resize/1200x799!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Ff4%2F1d%2F22f14ecf43c0b6232ef7b2b1644b%2Fgettyimages-465783654.jpg",
    Nombre: "Will Smith",
    genero: "masculino",
    direccion: "Av. Central",
    "Precio departamento": "S/ 410.00",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdEKjCp-5I6ne0s03VRWvpjJKWtJUz7JiIfA&usqp=CAU",
    Nombre: "Vin Diesel",
    genero: "masculino",
    direccion: "Av. del Sol",
    "Precio departamento": "S/ 350.00",
  },
  {
    img: "https://media.revistavanityfair.es/photos/60e8601d4f9acb6a2f6df036/master/w_1600%2Cc_limit/48344.jpg",
    Nombre: "Morgan Freeman",
    genero: "masculino",
    direccion: "Calle de la Luna",
    "Precio departamento": "S/ 275.50",
  },
  {
    img: "https://elcomercio.pe/resizer/i7AWpLQDQkYkP-v91LkZxDU66Og=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/CQWZXXM3QVCWFNPLMMWKUFVXP4.jpg",
    Nombre: "Keanu Reeves",
    genero: "masculino",
    direccion: "Av. de los Pájaros",
    "Precio departamento": "S/ 290.00",
  },
  {
    img: "https://i0.wp.com/hotbook.mx/wp-content/uploads/2020/08/chris-hemsworth.jpg?fit=618%2C410&ssl=1",
    Nombre: "Chris Hemsworth",
    genero: "masculino",
    direccion: "Departamento 120",
    "Precio departamento": "S/ 380.75",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ93sgFjMzsP9_1ymbREcI_yAi8-xHXSNcWAg&usqp=CAU",
    Nombre: "Sylverter Stallone",
    genero: "masculino",
    direccion: "Calle",
    "Precio departamento": "S/ 380.75",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCwQ9UlydTLp0wkVbQREUTbGwwODCQ3aVUyQ&usqp=CAU",
    Nombre: "Selena Gomez",
    genero: "femenino",
    direccion: "Avenida",
    "Precio departamento": "S/ 380.75",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPR28Toup_zP5Fole-J2_yhydtM7nCeTYJVg&usqp=CAU",
    Nombre: "Enrique Iglesias",
    genero: "masculino",
    direccion: "Calle de los Sueños",
    "Precio departamento": "S/ 380.75",
  },
];
// Obtén la referencia a la sección de resultados por su ID
const resultadosSection = document.getElementById("resultadosSection");

// Crea un fragmento de documento para mejorar el rendimiento
const fragment = document.createDocumentFragment();

// Recorre el array y crea elementos HTML para cada registro
registroGeneral.forEach((registro) => {
  const registroDiv = document.createElement("div");
  registroDiv.classList.add("registro");

  registroDiv.innerHTML = `
    <div class="registro-foto">
      <img src="${registro.img}" alt="${registro.Nombre}">
    </div>
    <div class="informacion-registro">
      <h2 class="registro-title">${registro.Nombre}</h2>
      <p class="registro-subtitle">Género: ${registro.genero}</p>
      <p class="registro-subtitle">Dirección: ${registro.direccion}</p>
      <p class="registro-subtitle">Precio departamento: ${registro["Precio departamento"]}</p>
    </div>
  `;

  fragment.appendChild(registroDiv);
});

// Agrega la sección de resultados al documento
resultadosSection.appendChild(fragment);

// Función para buscar registros por nombre y dirección
function buscar() {
  const searchText = document.getElementById("searchInput").value.toLowerCase();
  const resultado = document.getElementById("resultadosSection");
  resultado.innerHTML = "";

  let resultadosEncontrados = false; // Variable para realizar seguimiento de resultados

  for (let i = 0; i < registroGeneral.length; i++) {
    const registro = registroGeneral[i];
    const nombre = registro.Nombre.toLowerCase();
    const direccion = registro.direccion.toLowerCase();

    if (nombre.includes(searchText) || direccion.includes(searchText)) {
      const registroDiv = document.createElement("div");
      registroDiv.classList.add("registro");

      registroDiv.innerHTML = `
        <div class="registro-foto">
          <img src="${registro.img}" alt="${registro.Nombre}">
        </div>
        <div class="informacion-registro">
          <h2 class="registro-title">${registro.Nombre}</h2>
          <p class="registro-subtitle">Género: ${registro.genero}</p>
          <p class="registro-subtitle">Dirección: ${registro.direccion}</p>
          <p class="registro-subtitle">Precio departamento: ${registro["Precio departamento"]}</p>
        </div>
      `;

      resultado.appendChild(registroDiv);
      resultadosEncontrados = true; // Se encontró al menos un resultado
    }
  }

  // Mostrar un mensaje si no se encontraron resultados
  if (!resultadosEncontrados) {
    const mensajeNoEncontrado = document.createElement("p");
    mensajeNoEncontrado.textContent = "No se encontraron resultados.";
    mensajeNoEncontrado.classList.add("no-encontrado"); // Agrega la clase CSS
    resultado.appendChild(mensajeNoEncontrado);
  }
}