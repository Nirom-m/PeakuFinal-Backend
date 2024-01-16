import ConectionDB from "../settings/ConectionDB";
import { Request, Response } from 'express';

class PerfilDao {
    protected static async obtenerPerfiles(req: Request, res: Response){
        try{
            const query = "SELECT * FROM estado_perfil"
            const [result] = await ConectionDB.query(query)
            console.log(result);
                res.status(200).json(result);
            }
        catch(err) {
            console.log(err);
            res.status(400).json({ respuesta: 'Error en la consulta' });
        };
    }
    protected static async obtenerPerfil(req: Request, res: Response){
        try{
            const query = "SELECT"
            const [result] = await ConectionDB.query(query)
            console.log(result);
                res.status(200).json(result);
            }
        catch(err) {
            console.log(err);
            res.status(400).json({ respuesta: 'Error en la consulta' });
        };
    }

    
}

export default PerfilDao;