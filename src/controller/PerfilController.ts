import PerfilDao from "../dao/PefilDao";
import { Request, Response } from 'express';

class PerfilController extends PerfilDao{

    public consulta(req: Request, res: Response) {
        PerfilController.obtenerPerfiles(req,res);
    }
}

const perfilController = new PerfilController();

export default perfilController;