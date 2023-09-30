const validarFormulario = (
    nombre="",
    apellido ="",
    edad="",
    email="",
    usuario="",
    contrasenia=""
    ) => {
        let mensajes = [];
    if(nombre==0){
        mensajes.push("Complete el campo nombre para continuar")

    }
    if(apellido==0){
        mensajes.push("Complete el campo apellido para continuar")

    }
    if(edad==0){
        mensajes.push("Complete el campo edad para continuar");

    }
    if(email==0){
        mensajes.push("Complete el campo E-mail para continuar");

    }
    if(usuario==0){
        mensajes.push("Complete el campo usuario para continuar");

    } else if (!email.includes("@")) {
        mensajes.push("el campo email no tiene un formato válido")
        
    } else {
        
    }
    if(contrasenia==0){
        mensajes.push("Complete el campo contraseña para continuar");

    }
        return mensajes;
    };

const registrarAtleta = (nombre,
    apellido,
    edad,
    email,
    usuario,
    contrasenia) => {

}
