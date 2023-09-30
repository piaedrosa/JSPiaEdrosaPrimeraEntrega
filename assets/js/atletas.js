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
        console.table(erores);
        return false;

    }
    if (isExisteAtleta(atletas, email)) {
        console.table(["El Atleta con el email " + email + " ya esta registrado"]);
        return false;
    }
    let unAtleta = new Atleta(
        nombre,
        apellido,
        edad,
        email,
        usuario,
        contrasenia

    );
    atletasMock.push(unAtleta);
    return true;
};

let respuesta = prompt("quieres registrar otro atleta?");
while (respuesta.trim().toUpperCase() === "SI") {
    let nombre = prompt("ingrese nombre");
    let apellido = prompt("Ingrese apellido");
    let edad = prompt("Ingrese edad");
    let email = prompt("Ingrese email");
    let usuario = prompt("Ingrese usuario");
    let contrasenia = prompt("Ingrese contrasenia");

    if (registrarAtleta(
        nombre,
        apellido,
        edad,
        email,
        usuario,
        contrasenia)) {
        console.table(atletas)
    }
    else {
        alert("verificar los datos ingresados")
    }
    respuesta = prompt("quieres seguir registrando atletas?");
};
