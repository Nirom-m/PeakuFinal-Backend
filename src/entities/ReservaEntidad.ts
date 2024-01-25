class ReservaEntidad {
    public cliente_id?: number;
    public plan_id: number;
    public viaje_id: number;
    public empleado_id: number;
    public subtotal: number;
    public metodo_pago: string;
    public descuento: number;
    public total: number;

    constructor(

        plan_id: number,
        viaje_id: number,
        empleado_id: number,
        subtotal: number,
        metodo_pago: string,
        descuento: number,
        total: number
    ) {
        this.plan_id = plan_id;
        this.viaje_id = viaje_id;
        this.empleado_id = empleado_id;
        this.subtotal = subtotal;
        this.metodo_pago = metodo_pago;
        this.descuento = descuento;
        this.total = total;
    }
}

export default ReservaEntidad;
