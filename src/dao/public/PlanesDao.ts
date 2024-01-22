import PLanesEntidad from "../../entities/PlanesEntidad";
import ConectionDB from "../../settings/ConectionDB";
import { Request, Response } from "express";

class PlanesDao {
    protected static async obtenerPlanes( res: Response): Promise<any> {
        try {
            const query = "SELECT * FROM plan_vacacional";
            const result = await ConectionDB.query(query);
            res.status(200).json(result);
        } catch (err) {
            console.log(err);
            res.status(400).json({ respuesta: "Error en la consulta" });
        }
    }
    protected static async obtenerUno(
        identificador: any,
        res: Response
    ): Promise<any> {
        try {
            const query = `SELECT * FROM plan_vacacional WHERE plan_id = ${identificador}`;
            const result = await ConectionDB.query(query);
            res.status(200).json(result);

        } catch (err) {
            res.status(400).json({ respuesta: "Error en la consulta" });
        }
    }


}

export default PlanesDao;
