import { Response } from "express";
import ConectionDB from "../settings/ConectionDB";

class ClienteDao {
    protected static async obtenerClientes(res: Response): Promise<any> {
        try {
            const query = "SELECT * FROM cliente";
            const [result] = await ConectionDB.query(query);
            res.status(200).json(result);
        } catch (err) {
            res.status(400).json({ respuesta: "error en la consulta" });
        }
    }

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
