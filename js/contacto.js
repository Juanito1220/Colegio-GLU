let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let telefono = document.getElementById("telefono");
let mensaje = document.getElementById("input_mensaje");
let enviar = document.getElementById("envio")



function ocultarplace() {
    nombre.classList.remove("placeholder")
}

function mensajeEnvio(){

    if(nombre.value!="" && correo.value!="" && telefono.value!="" && mensaje.value!=""){
        Swal.fire({
           title:"Su mensaje se ha enviado de forma exitosa",
           icon:'success',
        });
    }
}

enviar.addEventListener('click',mensajeEnvio)
