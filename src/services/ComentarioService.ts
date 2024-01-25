import ComentarioDao from "../dao/ComentarioDao";
import { Request } from "express";

class ComentarioService{
    public static async obtenerTodosLosComentarios(): Promise<any> {
        try {
            const comentarios = await ComentarioDao.obtenerTodosLosComentarios();

            if (comentarios.length === 0) {
                return { status: 404, message: "No se encontraron comentarios" };
            }

            return { status: 200, data: comentarios };
        } catch (err) {
            console.error(err);
            throw new Error("Error interno del servidor al obtener comentarios");
        }
    }

    public static async obtenerComentarioPorId(req: Request): Promise<any> {
        try {
            const id = req.params.id;
            const comentario = await ComentarioDao.obtenerComentarioPorId(id);

            if (!comentario) {
                return { status: 404, message: "No se encontró el comentario con el ID proporcionado" };
            }

            return { status: 200, data: comentario };
        } catch (err) {
            console.error(err);
            throw new Error("Error interno del servidor al obtener comentario por ID");
        }
    }

    public static async obtenerComentariosPorClienteEmail(req: Request): Promise<any> {
        try {
            const {email} = req.body;
            const comentarios = await ComentarioDao.obtenerComentariosPorClienteEmail(email);

            if (comentarios.length === 0) {
                return { status: 404, message: "No se encontraron comentarios para el cliente con el email proporcionado" };
            }

            return { status: 200, data: comentarios };
        } catch (err) {
            console.error(err);
            throw new Error("Error interno del servidor al obtener comentarios por email del cliente");
        }
    }
}

export default ComentarioService;