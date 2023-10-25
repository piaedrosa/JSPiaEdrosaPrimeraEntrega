const LOCAL_STORAGE_NOMBRE = "atletas";

const actualizarListaEnStorage = (list = []) => {
    localStorage.setItem(LOCAL_STORAGE_NOMBRE, JSON.stringify(list));
}

const recuperarListaEnStorage = () => {
    const recuperados = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NOMBRE));
    if( recuperados){
        return recuperados.map((e)=> {
            return new Atleta (e.nombre, e.apellido, e.edad, e.email, e.usuario, e.contrasena)
        })
    }
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_NOMBRE)) || []
}

let atletas = recuperarListaEnStorage();
//console.table(atletas);//

const isExisteAtleta = (atletas = [], identificador = "") => {
    return atletas.some(
        (unAtleta) => unAtleta.usuario.toLowerCase() === identificador.toLowerCase()
    );
};


const getAtleta = (atletas = [], identificador = "") => {
    return atletas.find((unAtleta) => unAtleta.usuario === identificador
    );
};

const ATLETA_LOGGEADO_LLAVE = "Atleta Logueado";
const registrarInicio = (unAlteta) => {
    sessionStorage.setItem(ATLETA_LOGGEADO_LLAVE, JSON.stringify(unAlteta));
};
const recuperarAtletaLogeado = () => {
    return JSON.parse(sessionStorage.getItem(ATLETA_LOGGEADO_LLAVE)) || false;

};

const ATLETA_LOGGEADO = recuperarAtletaLogeado();

const AtletaLogueado = ()=>{
    return !!ATLETA_LOGGEADO;
}
