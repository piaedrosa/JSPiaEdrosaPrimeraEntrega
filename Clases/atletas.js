class atletas {
    constructor(
    nombre,
    apellido,
    edad,
    email,
    usuario,
    contrasenia,
    )
{
    this.nombre = nombre;
    this.apellido= apellido;
    this.edad=edad;
    this.email= email
    this.usuario = usuario
    this.contrasenia=contrasenia
}

toString =()=>{
    return this.usuario + this.email;
}
}
