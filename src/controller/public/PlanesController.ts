import PlanesDao from "../../dao/public/PlanesDao";
import { Request, Response } from "express";

class PlanesController extends PlanesDao {
    public consultar(req:Request,res: Response) {
        PlanesController.obtenerPlanes(res);
    }

    public consultarUno(req: Request, res: Response) {
        PlanesController.obtenerUno(req.params.codigo, res);
    }

}

const planesController = new PlanesController();

export default planesController;
