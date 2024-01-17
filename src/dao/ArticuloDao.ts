import ConectionDB from "../settings/ConectionDB";
import { Request, Response } from 'express';

class ArticuloDao {
    protected static async obtenerArticulos(req: Request, res: Response){
        try{
            const query = "SELECT * FROM articulo"
            const [result] = await ConectionDB.query(query)
            console.log(result);
                res.status(200).json(result);
            }
        catch(err) {
            console.log(err);
            res.status(400).json({ respuesta: 'Error en la consulta' });
        };
    }

    protected static async crearArticulo(parametros:any, res:Response){
        try{
            const{}=parametros;
            delete parametros._id;
            delete parametros.datosUsuario;
        }
        catch{

        }
    }
    protected static async obtenerArticulo(req: Request, res: Response){
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

export default ArticuloDao;