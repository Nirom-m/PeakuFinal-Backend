import ComentarioService from "../services/ComentarioService";
import { Request, Response } from "express";

class ComentarioController{
    public async obtenerTodosLosComentarios(req: Request, res: Response): Promise<void> {
        try {
            const resultado = await ComentarioService.obtenerTodosLosComentarios();
            if (resultado.status === 200) {
                res.status(200).json(resultado.data);
            } 
            res.status(resultado.status).json({ message: resultado.message });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }

    public async obtenerComentarioPorId(req: Request, res: Response): Promise<void> {
        try {
            const resultado = await ComentarioService.obtenerComentarioPorId(req);
            if (resultado.status === 200) {
                res.status(200).json(resultado.data);
            } 
            res.status(resultado.status).json({ message: resultado.message });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }

    public async obtenerComentariosPorClienteEmail(req: Request, res: Response): Promise<void> {
        try {
            const resultado = await ComentarioService.obtenerComentariosPorClienteEmail(req);
            if (resultado.status === 200) {
                res.status(200).json(resultado.data);
            } 
            res.status(resultado.status).json({ message: resultado.message });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }

}

const comentarioController = new ComentarioController();
export default comentarioController;
