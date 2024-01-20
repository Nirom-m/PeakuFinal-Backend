import { Response } from "express";
import ClienteEnidad from "../entities/ClienteEntidad";

class ClienteDao extends ClienteEnidad {
    protected static async crearCliente(
        correo: any,
        parametros: any,
        res: Response
    ): Promise<any> {
        //validar si el Perfil existe
        const nombrPerfilPorDefecto = String(process.env.USUARIO_EXTERNO);
        const jsonPerfil = { nombrePerfil: nombrPerfilPorDefecto };
    }
}

export default ClienteDao;
