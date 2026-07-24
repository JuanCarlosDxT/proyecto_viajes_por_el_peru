// ===============================
// LOGIN EXPLORA PERÚ
// ===============================

// Obtener el formulario
const formulario = document.getElementById("formLogin");

// Escuchar el envío del formulario
formulario.addEventListener("submit", function(event){

    // Evita que la página se recargue
    event.preventDefault();

    // Obtener datos
    const correo = document.getElementById("correo").value.trim();

    const password = document.getElementById("password").value.trim();

    // Validar campos vacíos
    if(correo === "" || password === ""){

        alert("Por favor complete todos los campos.");

        return;

    }

    // Validar correo
    if(!correo.includes("@")){

        alert("Ingrese un correo electrónico válido.");

        return;

    }

    // Usuario de prueba
    const usuario = "admin@exploraperu.com";

    const clave = "123456";

    // Validar acceso
    if(correo === usuario && password === clave){

        alert("¡Bienvenido a Explora Perú!");

        // Esperar 1 segundo antes de regresar
        setTimeout(function(){

            window.location.href = "mi_cuenta.html";

        },1000);

    }else{

        alert("Correo o contraseña incorrectos.");

    }

});