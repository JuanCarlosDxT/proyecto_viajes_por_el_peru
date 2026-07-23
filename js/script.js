// Seleccionamos los elementos del menú para celular.
const botonMenu = document.getElementById("boton-menu");
const menu = document.getElementById("menu");

// Mostramos u ocultamos el menú.
if (botonMenu && menu) {
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
}
// BUSCADOR DE DESTINOS
const formulario = document.getElementById("formulario-busqueda");
const campoBusqueda = document.getElementById("busqueda");
const resultado = document.getElementById("resultado-busqueda");

if (formulario && campoBusqueda) {
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const destino = campoBusqueda.value.trim().toLowerCase();

    if (destino === "iquitos") {
        window.location.href = "iquitos.html";
        return;
    }

    if (destino === "punta sal" || destino === "puntasal" || destino === "tumbes") {
        window.location.href = "punta_sal.html";
        return;
    }

    if (destino === "lima") {
        window.location.href = "lima.html";
        return;
    }

    if (destino === "caballococha" || destino === "caballo cocha") {
        window.location.href = "caballococha.html";
        return;
    }

    if (destino === "oxapampa") {
        window.location.href = "oxapampa.html";
        return;
    }

    if (destino === "pozuzo") {
        window.location.href = "pozuzo.html";
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
}
/* CAMBIO AUTOMÁTICO DE LA PORTADA */

const portada = document.querySelector(".portada");

const imagenes = [
    "imagenes/cusco.png",
    "imagenes/huascaran.png",
    "imagenes/punta_sal.png",
    "imagenes/oxapampa.png",
    "imagenes/pozuzo.png",
    "imagenes/caballococha.png",
    "imagenes/castillo_de_chancay.png",
    "imagenes/plaza_mayor_de_lima.png",
    "imagenes/iquitos.png",
];

if (portada) {
let indice = 0;

setInterval(function () {
    indice++;

    if (indice >= imagenes.length) {
        indice = 0;
    }

    portada.style.backgroundImage =
        `url('${imagenes[indice]}')`;
}, 5000);
}