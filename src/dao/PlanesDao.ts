import PLanesEntidad from "../entities/PlanesEntidad";
import ConectionDB from "../settings/ConectionDB";
import { Request, Response } from "express";


class PlanesDao{
    protected static async obtenerPlanes(req: Request, res: Response){
        try{
            const query = "SELECT * FROM plan_vacacional"
            const [result] = await ConectionDB.query(query)
                res.status(200).json(result);
            }
        catch(err) {
            console.log(err);
            res.status(400).json({ respuesta: 'Error en la consulta' });
        };
    }

    protected static async crearPlan(req:Request, res: Response){
        try {

            const {viaje_id,nombre,descripcion,precio,destino,guia_turismo,duracion_dias,url_img} = req.body;
            const newPlan= new PLanesEntidad(viaje_id,nombre,descripcion,precio,destino,guia_turismo,duracion_dias)
            await ConectionDB.query('INSERT INTO plan_vacacional SET ?',[newPlan])
            res.status(200).json('Creado Exitosamente');
        }
        catch(err) {
            console.log(err);
            res.status(400).json({ respuesta: 'Error en la Creacion del plan',err });
        }
    }
}


export default PlanesDao