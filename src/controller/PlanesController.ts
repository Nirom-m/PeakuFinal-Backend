import PlanesDao from "../dao/PlanesDao";
import { Request,Response } from "express";

class PlanesController extends PlanesDao{
    public consultaPlanes(req: Request, res: Response) {
        PlanesController.obtenerPlanes(req,res);
    }
    public crearPlanes(req: Request,res: Response) {
        PlanesController.crearPlan(req,res);
    }


}


const planesController= new PlanesController();

export default planesController;