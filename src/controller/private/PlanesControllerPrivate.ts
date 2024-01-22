
import { Request, Response } from "express";
import PlanesDaoPrivate from "../../dao/private/PlanesDaoPrivate";

class PlanesControllerPrivate extends PlanesDaoPrivate {
    public consultar(req:Request,res: Response) {
        PlanesControllerPrivate.obtenerPlanes(res);
    }

    public consultarUno(req: Request, res: Response) {
        PlanesControllerPrivate.obtenerUno(req.params.codigo, res);
    }

    public crear(req: Request, res: Response) {
        PlanesControllerPrivate.crearPlan(req, res);
    }

    public actualizar(req: Request, res: Response) {
        PlanesControllerPrivate.actualizarPlan(req.params.codigo, req, res);
    }
    public eliminar(req: Request, res: Response) {
        PlanesControllerPrivate.eliminarPlan(req.params.codigo, res);
    }
}

const planesControllerPrivate = new PlanesControllerPrivate();

export default planesControllerPrivate;
