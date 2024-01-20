class PerfilEntidad {
    public nombre_perfil: string;
    public estado_perfil_id: number;
    constructor(nomp: string, estado: number) {
        this.nombre_perfil = nomp;
        this.estado_perfil_id = estado;
    }
}

export default PerfilEntidad;
