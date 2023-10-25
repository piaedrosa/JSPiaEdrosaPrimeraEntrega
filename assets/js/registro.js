console.log("pagina de registro de Atletas")








const miFormulario = document.getElementById("miFormularioDeRegistro");
miFormulario.addEventListener("submit", (e) => {
  e.preventDefault();
  // 1er paso es solicitar los datos al usuario (operador) - los recuperamos de los inputs del formulario
  let nombre = document.getElementById("nombre").value.trim().toLocaleLowerCase();
  let apellido = document.getElementById("apellido").value.trim().toLocaleLowerCase();
  let edad = document.getElementById("edad").value.trim().toLocaleLowerCase();
  let email = document.getElementById("email").value.trim().toLocaleLowerCase();
  let usuario = document.getElementById("usuario").value.trim().toLocaleLowerCase();
  let contrasena = document.getElementById("contrasena").value.trim();


  // hideMessages();
  // 2do paso crear o registrar al atleta dentro del sistema
 
 
  if (
    registrarAtleta(nombre,apellido,edad,email,usuario,contrasena)) {
    miFormulario.reset();
    alert("Atleta Registrado con éxito")
    window.location= "/Pages/Login.html";
  } else {
    alert("Revisa los datos ingresados");
  }
});
const usuarioMinChar = 6;
const passwordMInChar = 8;

const validarFormulario = (
  nombre = "",
  apellido = "",
  edad = "",
  email = "",
  usuario = "",
  contrasena = "",
) => {
  if (nombre.length == 0) {
    alert("Ingrese su nombre");
    return false;
  }
  if (apellido.length == 0) {
    alert("Ingrese su apellido");
    return false;
  }
  if (edad < 17) {
    alert("No tienes edad suficiente para registrarte sin permiso de tus padres. Ponte en contacto con nosotros a través de nuestro formulario de contacto");
    return false;
  }

  if (email.length == 0) {
    alert("El Correo electrónico es requerido");
    return false;
  }
 
  if (usuario == 0) {
    alert("El nombre de usuario es requerido");
    return false;
  }
  if (usuario.length < usuarioMinChar) {
    alert("El nombre de usuario debe contener por los menos " + usuarioMinChar + " caracteres");
    return false;
  }

  if (contrasena.length == 0) {
    alert("La contraseña es requerida");
    return false;
  }
  if (contrasena.length < passwordMInChar) {
    alert("La contraseña debe tener al menos " + passwordMInChar + " caracteres");
    return false;
  }
  
  return true;
};



const registrarAtleta = (
  nombre,
  apellido,
  edad,
  email,
  usuario,
  contrasena,
) => {
  // 1er paso: validar los campos ingresado en busca de errores
  const erroresDeRegistro = validarFormulario(
    nombre,
    apellido,
    edad,
    email,
    usuario,
    contrasena,
  );
  // Remover todo error que pueda existir previamente en la UI
  if (!erroresDeRegistro) {

    return false;
  }
  // 2do Validar que el atleta no existe dentro del sistema
  if (isExisteAtleta(atletas, usuario)) {
    alert("El Atleta ya existe en la base de datos con el usuario ingresado");
    return false;
  }


  // 3er paso crear nuevo atleta
  let unAtleta = new Atleta(
    nombre,
    apellido,
    edad,
    email,
    usuario,
    contrasena,
  );
  // 4to Añadimos al nuevo Atleta a nuestra base de atletas registrados
  atletas.push(unAtleta);
  actualizarListaEnStorage(atletas)
  alert("usuario registrado con éxito");
  return true;
};

