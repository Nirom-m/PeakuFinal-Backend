import PlanesDao from "../dao/PlanesDao";
import { Request, Response } from "express";
//import PlanesControllerPrivate from "../private/PlanesControllerPrivate";

class PlanesController {
    public consultar(req:Request,res: Response) {
        PlanesDao.obtenerPlanes(res);
    }

    public consultarUno(req: Request, res: Response) {
        PlanesDao.obtenerUno(req.params.codigo, res);
    }
    public crear(req: Request, res: Response) {
        PlanesDao.crearPlan(req, res);
    }
    
    public actualizar(req: Request, res: Response) {
        PlanesDao.actualizarPlan(req.params.codigo, req, res);
    }
    public eliminar(req: Request, res: Response) {
        PlanesDao.eliminarPlan(req.params.codigo, res);
    }


}

const planesController = new PlanesController();

export default planesController;
