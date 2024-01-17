
class PLanesEntidad{
    
    public viaje_id:string
    public nombre:string
    public descripcion:string
    public precio:number
    public destino:string
    public guia_turismo:string
    public duracion_dias:number

    constructor(
        viaje_id:string,
        nomber:string,
        descripcion:string,
        precio:number,
        destino:string,
        guia_turismo:string,
        duracion_dias:number
    ){
        this.viaje_id=viaje_id;
        this.nombre=nomber;
        this.descripcion=descripcion;
        this.precio=precio;
        this.destino=destino;
        this.guia_turismo=guia_turismo;
        this.duracion_dias=duracion_dias;

    }
}

export default PLanesEntidad;