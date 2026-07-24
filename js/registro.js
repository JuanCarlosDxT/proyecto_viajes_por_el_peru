// ======================================
// REGISTRO - EXPLORA PERÚ
// ======================================

// Obtener el formulario
const formulario = document.getElementById("formRegistro");

// Escuchar el envío del formulario
formulario.addEventListener("submit", function(event){

    // Evitar que la página se recargue
    event.preventDefault();

    // Obtener valores
    const nombre = document.getElementById("nombre").value.trim();

    const apellidos = document.getElementById("apellidos").value.trim();

    const correo = document.getElementById("correo").value.trim();

    const password = document.getElementById("password").value;

    const confirmar = document.getElementById("confirmar").value;

    const departamento = document.getElementById("departamento").value;

    const acepto = document.getElementById("acepto").checked;

    // Validar nombre
    if(nombre.length < 2){

        alert("Ingrese un nombre válido.");

        return;

    }

    // Validar apellidos
    if(apellidos.length < 2){

        alert("Ingrese sus apellidos.");

        return;

    }

    // Validar correo
    if(!correo.includes("@") || !correo.includes(".")){

        alert("Ingrese un correo electrónico válido.");

        return;

    }

    // Validar contraseña
    if(password.length < 8){

        alert("La contraseña debe tener al menos 8 caracteres.");

        return;

    }

    // Confirmar contraseña
    if(password !== confirmar){

        alert("Las contraseñas no coinciden.");

        return;

    }

    // Validar departamento
    if(departamento === ""){

        alert("Seleccione un departamento.");

        return;

    }

    // Validar términos
    if(!acepto){

        alert("Debe aceptar los términos y condiciones.");

        return;

    }

    // Registro exitoso
    alert("¡Cuenta creada correctamente!\n\nAhora puede iniciar sesión.");

    // Redireccionar al login
    window.location.href = "mi_cuenta.html";

});