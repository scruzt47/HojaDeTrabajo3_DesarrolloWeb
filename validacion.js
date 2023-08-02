var nombre = document.getElementById("nombre").value;
var fechaNacimiento = document.getElementById("fecha_nacimiento").value;
var nacionalidad = document.getElementById("nacionalidad").value;
var generoMasculino = document.getElementById("genero").checked;
var correo = document.getElementById("correo").value;
var direccion = document.getElementById("direccion").value;
var foto = document.getElementById("foto").value;

// Validar que los campos no estén vacíos
if (nombre === "" || fechaNacimiento === "" || nacionalidad === "" || (!generoMasculino && !generoFemenino && !generoOtro) || correo === "" || direccion === "" || foto === "") {
    alert("Por favor, completa todos los campos.");
    return false;
}

// Validar formato de correo electrónico
var correoRegex = /^\S+@\S+\.\S+$/;
if (!correo.match(correoRegex)) {
    alert("El correo electrónico no es válido.");
    return false;
}

// Otras validaciones que desees agregar

return true; // Si todas las validaciones pasan, se envía el formulario
