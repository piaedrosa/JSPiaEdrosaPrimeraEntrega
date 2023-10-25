console.log("estas en la pagina del login");





const miFormularioLog = document.getElementById("formularioLogin");
miFormularioLog.addEventListener("submit", (e)=>{
    e.preventDefault();


    let usuario = document.getElementById("usuario").value;
    let contrasena =document.getElementById("contrasena").value;
    

    
    
    unAtleta.estaLogueado = true;
    registrarInicio(unAtleta);
    window.location= "/index.html" 
});



 