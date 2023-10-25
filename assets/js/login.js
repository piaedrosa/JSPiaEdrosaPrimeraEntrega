console.log("estas en la pagina del login");





const miFormulario = document.getElementById("formularioLogin");
miFormulario.addEventListener("submit", (e)=>{
    e.preventDefault();


    let usuario = document.getElementById("usuario").value;
    let contrasena =document.getElementById("contrasena").value;
    

    if (!validarFormulario (usuario, contrasena)) {
        alert("Completar todos los campos");
        return false;
    }

    const unAtleta = getAtleta (atletas, usuario);
   
    console.log("--> aleta recuperado", unAtleta);
    if (!unAtleta) {
        alert("el usuario ingresado no existe");
        return false;
        
    }

    if (!unAtleta.isPassword(contrasena)) {
        alert("Contraseña incorrecta");
        return false;
    }

    
    unAtleta.estaLogueado = true;
    registrarInicio(unAtleta);
    window.location= "/index.html" 
});



 