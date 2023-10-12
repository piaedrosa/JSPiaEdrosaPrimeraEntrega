//carga de pacientes con prompt//

let atletas = atletasMock.map((a) => {
  return new Atleta(
      a.nombre,
      a.apellido,
      a.edad,
      a.email,
      a.usuario,
      a.constrasenia,
  );
});
//validaciones del formulario//
const validarFormulario = (
  nombre = "",
  apellido = "",
  edad = "",
  email = "",
  usuario = "",
  contrasenia = ""
) => {
  let mensajes = [];
  if (nombre.length == 0) {
      mensajes.push("Complete el campo nombre para continuar")

  }
  if (apellido.length == 0) {
      mensajes.push("Complete el campo apellido para continuar")

  }
  if (edad.length == 0) {
      mensajes.push("Complete el campo edad para continuar");

  }
  if (email.length == 0) {
      mensajes.push("Complete el campo E-mail para continuar");

  } else if (!email.includes("@")) {
      mensajes.push("el campo email no tiene un formato válido");

  }
  if (usuario.length == 0) {
      mensajes.push("Complete el campo usuario para continuar");
  }

  if (contrasenia.length == 0) {
      mensajes.push("Complete el campo contraseña para continuar");

  }
  return mensajes;
};
const isExisteAtleta = (atletas = [], identificador = "") => {
  return atletas.some(
      (unAtleta) => unAtleta.email === identificador);
};

const registrarAtleta = (
  nombre,
  apellido,
  edad,
  email,
  usuario,
  contrasenia
) => {
  const errores = validarFormulario(
      nombre,
      apellido,
      edad,
      email,
      usuario,
      contrasenia);

  if (errores.length !== 0) {
      console.table(errores);
      return false;

  }
  // Verificar si el atleta ya existe en la base de datos por email
  if (!isExisteAtleta(atletas, email)) {
    let unAtleta = new Atleta(
      nombre,
      apellido,
      edad,
      email,
      usuario,
      contrasenia
    );
    
    // Agregar el nuevo atleta a atletasMock
    atletasMock.push(unAtleta);
    
    console.table(atletasMock); // Para mostrar los atletas actualizados
  } else {
    console.table(["El Atleta con el email " + email + " ya está registrado"]);
  }

  return true;
};


let respuesta = prompt("quieres registrar otro atleta?");
while (respuesta.toUpperCase() === "SI") {
  let nombre = prompt("ingrese nombre");
  let apellido = prompt("Ingrese apellido");
  let edad = prompt("Ingrese edad");
  let email = prompt("Ingrese email");
  let usuario = prompt("Ingrese usuario");
  let contrasenia = prompt("Ingrese contraseña");

  if (registrarAtleta(
      nombre,
      apellido,
      edad,
      email,
      usuario,
      contrasenia)) {
      
  }
  else {
      alert("verificar los datos ingresados")
  }
  respuesta = prompt("quieres seguir registrando atletas?");
};


// Lo primero que hacemos es una función para validar la edad del usuario
const validarEdad=()=> {
    let edad = parseInt(prompt("Por favor, ingresa tu edad:"));
  
    if (isNaN(edad) || edad <= 0) {
      console.log("Ingresa una edad válida.");
      return;
    }
  
    if (edad < 16) {
      alert("Eres menor de 16 años y no puedes suscribirte a nuestros planes.");
      return;
    }
  
    elegirPlan();
  }
  
  // cuando valida que es mayor, pasa a la función para elegir un plan (en funcion a la edad)
  const elegirPlan = ()=> {
    let plan = prompt("Elige un plan: scaled, intermedio, elite").toLowerCase();
  
    if (plan === "scaled" || plan === "intermedio" || plan === "elite") {
      elegirMetodoDePago(plan);
    } else {
      console.log("Plan no válido. Por favor, elige uno de los planes disponibles.");
    }
  }
  
  // El costo mensual varia segun el metodo de pago. creo otra función para elegir el método de pago, que depende del plan
const elegirMetodoDePago=(plan)=> {
    let metodoPago = prompt("Elige un método de pago: efectivo, credito, debito").toLowerCase();
    let costoMensual = calcularCostoMensual(plan);
  
    switch (metodoPago) {
      case "efectivo":
        costoMensual *= 0.9; // Aplicar un descuento del 10% al pagar en efectivo
        alert("El costo mensual del plan " + plan + " es: $" + costoMensual + " (Pago en efectivo).");
        break;
      case "credito":
        costoMensual *= 1.1; // Aplicar un recargo del 10% al pagar con crédito
        alert("El costo mensual del plan " + plan + " es: $" + costoMensual + " (Pago con tarjeta de crédito).");
        break;
      case "debito":
        costoMensual *= 1.05; // Aplicar un recargo del 5% al pagar con débito
        alert("El costo mensual del plan " + plan + " es: $" + costoMensual + " (Pago con tarjeta de débito).");
        break;
      default:
        alert("Método de pago no válido. Por favor, elige uno de los métodos de pago disponibles.");

    }
  }
  // Usamos un Switch dentro de la función para calcular el costo mensual según el plan
  const calcularCostoMensual=(plan)=> {
    switch (plan) {
      case "scaled":
        return 10000;
      case "intermedio":
        return 15000;
      case "elite":
        return 20000    ;
      default:
        return 0;
    }
  }
  
  // iniciamos el proceso instanciando a la función principal 
  validarEdad();

const bottonColorMode = document.querySelector("#color-mode");
const body = document.body;

let darkMode = localStorage.getItem("dark-mode");
 function activarDarkMode(){
  body.classList.add("dark-mode");
  localStorage.setItem("dark-mode", "activado");
 }

 function desactivarDarkMode (){
  body.classList.remove("dark-mode");
  localStorage.setItem("dark-mode", "desactivado")
 }

 if (darkMode=== "activado") {
  activarDarkMode();
 } else {
    desactivarDarkMode();
  }
  
  bottonColorMode.addEventListener("click", ()=> {
    darkMode= localStorage.getItem("darkmode");
    if (darkMode==="activado"){
      desactivarDarkMode();
    } else{activarDarkMode();

    }
  })

 
