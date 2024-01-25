class PlanesEntidad {
    public plan_id?: number;
    public viaje_id: number;
    public nombre: string;
    public descripcion: string;
    public precio: number;
    public destino: string;
    public guia_turismo: string;
    public duracion_dias: number;
    public url_img: string;

    constructor(
        viaje_id: number,
        nomber: string,
        descripcion: string,
        precio: number,
        destino: string,
        guia_turismo: string,
        duracion_dias: number,
        url_img: string
    ) {
        this.viaje_id = viaje_id;
        this.nombre = nomber;
        this.descripcion = descripcion;
        this.precio = precio;
        this.destino = destino;
        this.guia_turismo = guia_turismo;
        this.duracion_dias = duracion_dias;
        this.url_img = url_img;
    }
}

export default PlanesEntidad;
