import PerfilEntidad from "./PerfilEntidad"

class ClienteEnidad {
    public cliente_id: number
    public email: string
    public telefono: number
    public direccion: string
    public username: string
    public password: string
    public nombre: string
    public apellidos: string
    public codPerfil: PerfilEntidad;


    constructor(
        id_cliente: number,
        email: string,
        telef: number,
        direc: string,
        username: string,
        password: string,
        nombre: string,
        codP: PerfilEntidad,
        apellidos: string
    ) {
        this.cliente_id = id_cliente
        this.email = email
        this.telefono = telef
        this.direccion = direc
        this.username = username
        this.password = password
        this.codPerfil = codP;
        this.nombre = nombre
        this.apellidos = apellidos
    }
}

export default ClienteEnidad;