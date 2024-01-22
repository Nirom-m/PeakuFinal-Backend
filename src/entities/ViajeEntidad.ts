

class ViajeEntidad {

    public origen: string;
    public destino: string;
    public fecha_salida: Date;
    public fecha_llegada: Date;
    public vacantes: number;
    public precio: number;

    constructor(origen: string, destino: string, fecha_salida: Date, fecha_llegada: Date, vacantes: number, precio: number) {
        this.origen = origen;
        this.destino = destino;
        this.fecha_salida = fecha_salida;
        this.fecha_llegada = fecha_llegada;
        this.vacantes = vacantes;
        this.precio = precio;
    }

}

export default ViajeEntidad;