//console.log("pagina de registro de Atletas")//








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
    registrarAtleta(nombre, apellido, edad, email, usuario, contrasena)) {
    miFormulario.reset();

    Swal.fire({
      icon: 'success',
      title: 'Atleta Registrado con éxito.',
      text: 'Dirigete al Login para acceder a tu Planificación',
      footer: '<a href="./pages/login">Login</a>',
      timer: 5000,
    });

  } else {
    
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
      Swal.fire({
      icon: 'warning',
      title: 'Ingrese su nombre',
      text: 'El campo Nombre no puede quedar vacío',
      timer:4000

    });
    return false;
  }
  if (apellido.length == 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Ingrese su Apellido',
      text: 'El campo Apellido no puede quedar vacío',
      timer:4000

    });
    return false;
  }
  if (edad < 17) {
    Swal.fire({
      icon: 'error',
      title: 'No tienes edad suficiente para registrarte sin permiso de tus padres.',
      text: 'EPonte en contacto con nosotros a través de nuestro formulario de contacto',
      timer:4000

    });
    
    return false;
  }

  if (email.length == 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Ingrese su Email',
      text: 'El campo Email no puede quedar vacío',
      timer:4000

    });
    return false;
  }

  if (usuario == 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Ingrese su Usuario',
      text: 'El campo Usuario no puede quedar vacío',
      timer:4000

    });
    return false;
  }
  if (usuario.length < usuarioMinChar) {
    Swal.fire({
      icon: 'warning',
      title: 'El nombre de usuario debe contener por los menos ' + usuarioMinChar + ' caracteres',
      timer:4000

    });
    
    return false;
  }

  if (contrasena.length == 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Ingrese su Contraseña',
      text: 'El campo Contraseña no puede quedar vacío',
      timer:4000

    });
    return false;
  }
  if (contrasena.length < passwordMInChar) {
    Swal.fire({
      icon: 'warning',
      title: 'La contraseña debe contener por los menos ' + passwordMInChar + ' caracteres',
      timer:4000

    });
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
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El Atleta ya existe en la base de datos con el usuario ingresado!',
      timer: 8000,
    });
    
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
  Swal.fire({
    icon: 'success',
    title: 'Atleta registrado con éxito',
    text: 'Dirigete al Login para acceder a tu Planificación',
    timer:5000
  });
  return true;
};

