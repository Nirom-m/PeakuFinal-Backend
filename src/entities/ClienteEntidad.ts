

class ClienteEnidad {
    
    public email: string;
    public telefono: number;
    public direccion: string;
    public username: string;
    public password: string;
    public nombre: string;
    public apellidos: string;


    constructor(
        
        email: string,
        telef: number,
        direc: string,
        username: string,
        password: string,
        nombre: string,
 
        apellidos: string
    ) {
        
        this.email = email;
        this.telefono = telef;
        this.direccion = direc;
        this.username = username;
        this.password = password;
       
        this.nombre = nombre;
        this.apellidos = apellidos;
    }
}

export default ClienteEnidad;
