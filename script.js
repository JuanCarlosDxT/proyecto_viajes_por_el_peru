// Seleccionamos los elementos del menú para celular.
const botonMenu = document.getElementById("boton-menu");
const menu = document.getElementById("menu");

// Al presionar el botón, mostramos u ocultamos el menú.
botonMenu.addEventListener("click", function () {
    menu.classList.toggle("menu-visible");

    // Cambiamos el símbolo del botón.
    if (menu.classList.contains("menu-visible")) {
        botonMenu.textContent = "✕";
    } else {
        botonMenu.textContent = "☰";
    }
});

// Cerramos el menú cuando el usuario presiona uno de sus enlaces.
const enlacesMenu = menu.querySelectorAll("a");

enlacesMenu.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        menu.classList.remove("menu-visible");
        botonMenu.textContent = "☰";
    });
});

// Funcionamiento del buscador de destinos.
const formulario = document.getElementById("formulario-busqueda");
const campoBusqueda = document.getElementById("busqueda");
const resultado = document.getElementById("resultado-busqueda");

formulario.addEventListener("submit", function (evento) {
    // Evita que la página se recargue al enviar el formulario.
    evento.preventDefault();

    const destino = campoBusqueda.value.trim();

    resultado.style.display = "block";

    if (destino === "") {
        resultado.textContent = "Escribe un destino para comenzar.";
    } else {
        resultado.textContent = "Buscando experiencias en: " + destino;
    }
});
