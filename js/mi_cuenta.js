// ======================================
// MI CUENTA - EXPLORA PERÚ
// ======================================

// Obtener elementos
const nombreUsuario = document.getElementById("nombreUsuario");
const correoUsuario = document.getElementById("correoUsuario");
const departamentoUsuario = document.getElementById("departamentoUsuario");

const btnEditar = document.getElementById("editarPerfil");
const btnCerrar = document.getElementById("cerrarSesion");


// ======================================
// CARGAR DATOS DEL USUARIO
// ======================================

// Buscar información guardada
const usuario = JSON.parse(localStorage.getItem("usuario"));

if(usuario){

    nombreUsuario.textContent =
        usuario.nombre + " " + usuario.apellidos;

    correoUsuario.textContent =
        usuario.correo;

    departamentoUsuario.textContent =
        usuario.departamento;

}else{

    // Datos de demostración
    nombreUsuario.textContent =
        "Invitado";

    correoUsuario.textContent =
        "usuario@exploraperu.com";

    departamentoUsuario.textContent =
        "No especificado";

}


// ======================================
// EDITAR PERFIL
// ======================================

btnEditar.addEventListener("click", function(){

    alert(
        "Esta función estará disponible próximamente."
    );

});


// ======================================
// CERRAR SESIÓN
// ======================================

btnCerrar.addEventListener("click", function(){

    const respuesta = confirm(
        "¿Desea cerrar la sesión?"
    );

    if(respuesta){

        window.location.href = "login.html";

    }

});


// ======================================
// MENSAJE DE BIENVENIDA
// ======================================

window.addEventListener("load", function(){

    console.log("Bienvenido a Mi Cuenta - Explora Perú");

});