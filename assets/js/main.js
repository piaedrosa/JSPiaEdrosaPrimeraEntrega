// Lo primero que hacemos es una función para validar la edad del usuario
const validarEdad=()=> {
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

