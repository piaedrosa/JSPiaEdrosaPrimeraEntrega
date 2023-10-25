class Atleta {
    constructor(
    nombre,
    apellido,
    edad,
    email,
    usuario,
    contrasena,
    )
{
    this.nombre = nombre;
    this.apellido= apellido;
    this.edad=edad;
    this.email= email
    this.usuario = usuario
    this.contrasena=contrasena
}

toString =()=>{
    return this.usuario + this.email;
}
}
