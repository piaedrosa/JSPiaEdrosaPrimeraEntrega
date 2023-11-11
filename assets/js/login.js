

const miFormularioLog = document.getElementById("formularioLogin");
miFormularioLog.addEventListener("submit", (e)=>{
    e.preventDefault();


    let usuario = document.getElementById("usuario").value;
    let contrasena =document.getElementById("contrasena").value;
    


    const unAtleta = getAtleta (atletas, usuario);
   
    //console.log("--> aleta recuperado", unAtleta);//
    if (!unAtleta) {
        Swal.fire({
            icon: 'error',
            title: 'El usuario ingresado no existe',
            text: 'verifica los datos ingresados',
            timer:4000
      
          });
       
        return false;
        
    }

    if (!unAtleta.isPassword(contrasena)) {
        Swal.fire({
            icon: 'error',
            text: 'Contraseña incorrecta',
            timer:4000
      
          });;
        return false;
    }

    
    unAtleta.estaLogueado = true;
    registrarInicio(unAtleta);
    window.location= "/index.html" 
});



 