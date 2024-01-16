import PerfilDao from "../dao/PefilDao";
import { Response } from 'express';

class PerfilController extends PerfilDao{

    public consulta(req: Request, res: Response) {
        PerfilController.obtenerPerfiles(res);
    }
}

const perfilController = new PerfilController();

export default perfilController;