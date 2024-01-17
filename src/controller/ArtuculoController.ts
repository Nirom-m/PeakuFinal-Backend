import PerfilDao from "../dao/ArticuloDao";
import { Request, Response } from 'express';

class PerfilController extends PerfilDao{

    public consulta(req: Request, res: Response) {
        PerfilController.obtenerArticulos(req,res);
    }
    public crear(req: Request, res: Response) {
        PerfilController.crearArticulo(req.body, res);
    }
}

const perfilController = new PerfilController();

export default perfilController;