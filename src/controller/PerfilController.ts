import { Request, Response } from "express";
import PerfilDao from "../dao/PerfilDao";

class PerfilController extends PerfilDao {
    public consultar(req: Request, res: Response) {
        PerfilController.obtenerPerfiles(res);
    }
    public consultarUno(req: Request, res: Response) {
        PerfilController.obtenerPerfil(req.params.codigo, res);
    }
    public crear(req: Request, res: Response) {
        PerfilController.crearPerfil(req, res);
    }
    public actualizar(req: Request, res: Response) {
        PerfilController.actualizarPerfil(req.params.codigo, req, res);
    }
    public eliminar(req: Request, res: Response) {
        PerfilController.eliminarPerfil(req.params.codigo, res);
    }
}

const perfilController = new PerfilController();

export default perfilController;
