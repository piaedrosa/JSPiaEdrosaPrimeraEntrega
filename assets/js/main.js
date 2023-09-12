// Lo primero que hacemos es una función para validar la edad del usuario
function validarEdad() {
    let edad = parseInt(prompt("Por favor, ingresa tu edad:"));
  
    if (isNaN(edad) || edad <= 0) {
      console.log("Ingresa una edad válida.");
      return;
    }
  
    if (edad < 16) {
      console.log("Eres menor de 16 años y no puedes suscribirte a nuestros planes.");
      return;
    }
  
    elegirPlan();
  }
  
  // Función para elegir un plan
  function elegirPlan() {
    let plan = prompt("Elige un plan: scaled, intermedio, elite").toLowerCase();
  
    if (plan === "scaled" || plan === "intermedio" || plan === "elite") {
      elegirMetodoDePago(plan);
    } else {
      console.log("Plan no válido. Por favor, elige uno de los planes disponibles.");
    }
  }
  
  // Función para elegir el método de pago
function elegirMetodoDePago(plan) {
    var metodoPago = prompt("Elige un método de pago: efectivo, crédito, débito").toLowerCase();
    var costoMensual = calcularCostoMensual(plan);
  
    switch (metodoPago) {
      case "efectivo":
        costoMensual *= 0.9; // Aplicar un descuento del 10% al pagar en efectivo
        console.log("El costo mensual del plan " + plan + " es: $" + costoMensual.toFixed(2) + " (Pago en efectivo).");
        break;
      case "crédito":
        costoMensual *= 1.1; // Aplicar un recargo del 10% al pagar con crédito
        console.log("El costo mensual del plan " + plan + " es: $" + costoMensual.toFixed(2) + " (Pago con tarjeta de crédito).");
        break;
      case "débito":
        costoMensual *= 1.05; // Aplicar un recargo del 5% al pagar con débito
        console.log("El costo mensual del plan " + plan + " es: $" + costoMensual.toFixed(2) + " (Pago con tarjeta de débito).");
        break;
      default:
        console.log("Método de pago no válido. Por favor, elige uno de los métodos de pago disponibles.");
    }
  }
  // Función para calcular el costo mensual según el plan
  function calcularCostoMensual(plan) {
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
  
  // Llamamos a la función principal para iniciar el proceso
  validarEdad();