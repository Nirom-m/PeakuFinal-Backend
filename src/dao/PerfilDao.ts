import { Request, Response } from "express";
import ConectionDB from "../settings/ConectionDB";
import PerfilEntidad from "../entities/PerfilEntidad";

class PerfilDao {
    //se crea un perfil
    protected static async crearPerfil(
        req: Request,
        res: Response
    ): Promise<any> {
        const { nombre_perfil, estado_perfil_id } = req.body;

        //verificaion si el perfil existe
        const query = `SELECT * FROM perfiles WHERE nombre_perfil="${nombre_perfil}"`;
        const existe: Array<any> = await ConectionDB.query(query);
        if (existe[0].length >= 1) {
            res.status(400).json({ respuesta: "El perfil ya existe..." });
        } else {
            //se crea el perfil si no existe
            const newPerfil = new PerfilEntidad(
                nombre_perfil,
                estado_perfil_id
            );
            await ConectionDB.query("INSERT INTO perfiles SET ?", [newPerfil])
                .then((miObjeto) => {
                    res.status(200).json({
                        respuesta: "Perfil Creado",
                        miObjeto,
                    });
                })
                .catch(() => {
                    res.status(400).json({
                        respuesta: "NO se puede crear el perfil",
                    });
                });
        }
    }
    protected static async obtenerPerfiles(res: Response): Promise<any> {
        try {
            const query = "SELECT * FROM perfiles";
            const [result] = await ConectionDB.query(query);
            res.status(200).json(result);
        } catch (err) {
            res.status(400).json({ respuesta: "Error en la consulta" });
        }
    }
    protected static async obtenerPerfil(
        identifiacador: any,
        res: Response
    ): Promise<any> {
        try {
            const query = `SELECT * FROM perfiles WHERE id = ${identifiacador}`;
            const [result] = await ConectionDB.query(query);
            res.status(200).json(result);
        } catch (err) {
            res.status(400).json({ respuesta: "Error en la consulta" });
        }
    }

    protected static async actualizarPerfil(
        identifiacador: any,
        req: Request,
        res: Response
    ): Promise<any> {
        try {
            const query = `SELECT * FROM perfiles WHERE id = ${identifiacador}`;
            const result: Array<any> = await ConectionDB.query(query);
            if (result[0].length == 0) {
                res.status(400).json({ respuesta: "El perfil no existe" });
            } else {
                const { nombre_perfil, estado_perfil_id } = req.body;
                const query = `UPDATE perfiles SET nombre_perfil = ?, estado_perfil_id = ? WHERE id =?`;

                const [result] = await ConectionDB.query(query, [
                    nombre_perfil,
                    estado_perfil_id,
                    identifiacador,
                ]);

                res.status(200).json({
                    respuesta: "Perfil actualizado con exito",
                });
            }
        } catch (err) {
            res.status(400).json({
                respuesta: "Error al actualizar un perfil",
                err,
            });
        }
    }

    protected static async eliminarPerfil(
        identificador: any,
        res: Response
    ): Promise<any> {
        try {
            const query = `SELECT * FROM perfiles WHERE id = ${identificador}`;
            const result: Array<any> = await ConectionDB.query(query);
            if (result[0].length == 0) {
                res.status(400).json({ respuesta: "El perfil no existe" });
            } else {
                const query = `DELETE FROM perfiles WHERE id =${identificador}`;
                const [result] = await ConectionDB.query(query);
                res.status(200).json({
                    respueta: "Perfil eliminado con exito",
                });
            }
        } catch {
            res.status(404).json({ respueta: "El perfil no exite" });
        }
    }
}

export default PerfilDao;
