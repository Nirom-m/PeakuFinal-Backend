
class ComentarioEntidad {
    
    public comentario_id?: number;
    public cliente_id: number;
    public comentario: string;
    
    constructor(
        cliente_id: number,
        comentario: string

    )   {

        this.cliente_id = cliente_id;
        this.comentario = comentario;
    }
}