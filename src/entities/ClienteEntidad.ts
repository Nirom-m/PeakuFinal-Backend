

class ClienteEntidad {

    public cliente_id?: number;
    public email: string;
    public telefono: string;
    public direccion: string;
    public password: string;
    public nombre: string;
    public apellidos: string;
    public rol:string;
    constructor(
        email: string,
        telef: string,
        direc: string,
        password: string,
        nombre: string,
        apellidos: string,
        rol:string
        ) {
        
        this.email = email;
        this.telefono = telef;
        this.direccion = direc;
        this.password = password;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.rol =rol;
    }
}

export default ClienteEntidad;
