import { Request, Response } from "express";
import PerfilDao from "../dao/PerfilDao";

class PerfilController extends PerfilDao {
    public consulta(req: Request, res: Response) {
        PerfilController.obtenerPerfiles(res);
    }
    public crear(req: Request, res: Response) {
        PerfilController.crearPerfil(req, res);
    }
}

const perfilController = new PerfilController();

export default perfilController;
