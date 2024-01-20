import PlanesDao from "../dao/PlanesDao";
import { Request, Response } from "express";

class PlanesController extends PlanesDao {
    public consultar(res: Response) {
        PlanesController.obtenerPlanes(res);
    }

    public consultarUno(req: Request, res: Response) {
        PlanesController.obtenerUno(req.params.codigo, res);
    }

    public crear(req: Request, res: Response) {
        PlanesController.crearPlan(req, res);
    }

    public actualizar(req: Request, res: Response) {
        PlanesController.actualizarPlan(req.params.codigo, req, res);
    }
    public eliminar(req: Request, res: Response) {
        PlanesController.eliminarPlan(req.params.codigo, res);
    }
}

const planesController = new PlanesController();

export default planesController;
