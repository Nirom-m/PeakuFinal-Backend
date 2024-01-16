import Conec from "../settings/ConectionDB";
import { Request, Response } from 'express';

class PerfilDao {
    protected static  obtenerPerfiles = async (res:Response)=>{
        try{
            const [result]= await Conec.query("SELECT * FROM estado_perfil")
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