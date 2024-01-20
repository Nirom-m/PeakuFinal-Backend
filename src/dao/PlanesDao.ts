import PLanesEntidad from "../entities/PlanesEntidad";
import ConectionDB from "../settings/ConectionDB";
import { Request, Response } from "express";

class PlanesDao {
    protected static async obtenerPlanes(res: Response) {
        try {
            const query = "SELECT * FROM plan_vacacional";
            const [result] = await ConectionDB.query(query);
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

    protected static async crearPlan(req: Request, res: Response) {
        try {
            const {
                viaje_id,
                nombre,
                descripcion,
                precio,
                destino,
                guia_turismo,
                duracion_dias,
                url_img,
            } = req.body;
            const newPlan = new PLanesEntidad(
                viaje_id,
                nombre,
                descripcion,
                precio,
                destino,
                guia_turismo,
                duracion_dias,
                url_img
            );
            await ConectionDB.query("INSERT INTO plan_vacacional SET ?", [
                newPlan,
            ]);
            res.status(200).json({ respuesta: "Creado Exitosamente" });
        } catch (err) {
            console.log(err);
            res.status(400).json({
                respuesta: "Error en la Creacion del plan",
                err,
            });
        }
    }

    protected static async actualizarPlan(
        identificador: any,
        req: Request,
        res: Response
    ): Promise<any> {
        try {
            const {
                viaje_id,
                nombre,
                descripcion,
                precio,
                destino,
                guia_turismo,
                duracion_dias,
                url_img,
            } = req.body;
            const query = `UPDATE plan_vacacional SET viaje_id=?,nombre=?,descripcion=?,precio=?,destino=?,guia_turismo=?,duracion_dias=?,url_img=? WHERE plan_id=?`;
            const [result] = await ConectionDB.query(query, [
                viaje_id,
                nombre,
                descripcion,
                precio,
                destino,
                guia_turismo,
                duracion_dias,
                url_img,
                identificador,
            ]);

            res.status(200).json({ respuesta: "Plan vacacional actualizado" });
        } catch (err) {
            res.status(400).json({
                respuesta: "Error al actualizar el plan",
                err,
            });
        }
    }
    protected static async eliminarPlan(
        identificador: any,
        res: Response
    ): Promise<any> {
        try {
            const consulta: Array<any> = await ConectionDB.query(
                `SELECT * FROM plan_vacacional WHERE plan_id="${identificador}"`
            );

            if (consulta[0].length == 0) {
                res.status(400).json({ respuesta: "El plan no existe" });
            } else {
                const query = `DELETE FROM plan_vacacional WHERE plan_id=${identificador}`;
                const result = await ConectionDB.query(query);
                res.status(200).json({
                    respuesta: "Plan vacacional eliminado con exito",
                });
            }
        } catch (err) {
            res.status(400).json({
                respuesta: "Error al eliminar el plan",
                err,
            });
        }
    }
}

export default PlanesDao;
