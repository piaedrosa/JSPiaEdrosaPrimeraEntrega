let atletas = atletasMock.map((a) => {
    return new atleta(
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
    if (nombre == 0) {
        mensajes.push("Complete el campo nombre para continuar")

    }
    if (apellido == 0) {
        mensajes.push("Complete el campo apellido para continuar")

    }
    if (edad == 0) {
        mensajes.push("Complete el campo edad para continuar");

    }
    if (email == 0) {
        mensajes.push("Complete el campo E-mail para continuar");

    }
    if (usuario == 0) {
        mensajes.push("Complete el campo usuario para continuar");

    } else if (!email.includes("@")) {
        mensajes.push("el campo email no tiene un formato válido")

    } else {

    }
    if (contrasenia == 0) {
        mensajes.push("Complete el campo contraseña para continuar");

    }
    return mensajes;
};
const isExisteAtleta = (atletas = [], identificador = "") => {
    return atletas.some((unAtleta) => unAtleta.email === identificador);
}

const registrarAtleta = (
    nombre,
    apellido,
    edad,
    email,
    usuario,
    contrasenia
) => {
    const errores = validarFormulario(nombre, apellido, edad, email, usuario, contrasenia);
    if (errores.length !== 0) {
        console.table(erores);
        return false;

    }
    if (isExisteAtleta(atletas, email)) {
        console.table(["El Atleta con el email " + email + " ya esta registrado"]);
        return false;
    }
    let unAtleta = new atleta(
        nombre,
        apellido,
        edad,
        email,
        usuario,
        contrasenia

    );
    atletas.push(unAtleta);
    console.table(atletas)
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
