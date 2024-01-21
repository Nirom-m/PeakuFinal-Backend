import { Request, Response } from "express";
import ClienteDao from "../dao/CilenteDao";

class ClienteController extends ClienteDao {

    public consultar(req:Request, res: Response) {
        ClienteController.obtenerClientes(res)
    }

    public consultarUno(req: Request, res: Response) {
        //PlanesController.obtenerUno(req.params.codigo, res);
    }

    public crear(req: Request, res: Response) {
        ClienteController.crearCliente(req, res);
    }

    public actualizar(req: Request, res: Response) {
        //PlanesController.actualizarPlan(req.params.codigo, req, res);
    }
    public eliminar(req: Request, res: Response) {
        //PlanesController.eliminarPlan(req.params.codigo, res);
    }

}

const clienteController = new ClienteController();

export default clienteController;
