// Seleccionamos los elementos del menú para celular.
const botonMenu = document.getElementById("boton-menu");
const menu = document.getElementById("menu");

// Mostramos u ocultamos el menú.
botonMenu.addEventListener("click", function () {
    menu.classList.toggle("menu-visible");

    if (menu.classList.contains("menu-visible")) {
        botonMenu.textContent = "✕";
    } else {
        botonMenu.textContent = "☰";
    }
});

// Cerramos el menú al presionar un enlace.
const enlacesMenu = menu.querySelectorAll("a");

enlacesMenu.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        menu.classList.remove("menu-visible");
        botonMenu.textContent = "☰";
    });
});

// BUSCADOR DE DESTINOS
const formulario = document.getElementById("formulario-busqueda");
const campoBusqueda = document.getElementById("busqueda");
const resultado = document.getElementById("resultado-busqueda");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const destino = campoBusqueda.value.trim().toLowerCase();

    if (destino === "iquitos") {
        window.location.href = "iquitos.html";
        return;
    }

    if (destino === "punta sal" || destino === "puntasal") {
        window.location.href = "punta_sal.html";
        return;
    }

    if (destino === "") {
        resultado.style.display = "block";
        resultado.textContent = "Escribe un destino para comenzar.";
    } else {
        resultado.style.display = "block";
        resultado.textContent = "Destino no disponible.";
    }
});
/* CAMBIO AUTOMÁTICO DE LA PORTADA */

const portada = document.querySelector(".portada");

const imagenes = [
    "Imagenes/cusco.png",
    "Imagenes/huascaran.png",
    "Imagenes/puntasal.png",
    "Imagenes/oxapampa.png",
    "Imagenes/pozuzo.png"
];

let indice = 0;

setInterval(function () {
    indice++;

    if (indice >= imagenes.length) {
        indice = 0;
    }

    portada.style.backgroundImage =
        `url('${imagenes[indice]}')`;
}, 5000);