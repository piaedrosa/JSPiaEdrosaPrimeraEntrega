class Atleta {
    constructor(nombre, apellido, edad, email, usuario, contrasena) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.email = email
        this.usuario = usuario
        this.contrasena = contrasena
        this.estaLogueado = false
        this.session = []
    }

    toString = () => {
        return this.usuario ;
    };
    isPassword = (contrasena = "") =>{
        return this.contrasena === contrasena;

    }; 
}
