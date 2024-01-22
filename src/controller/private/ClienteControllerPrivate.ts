import { Request, Response } from "express";
import ClienteDaoPrivate from "../../dao/private/ClienteDaoPrivate";

class ClienteControllerPrivate extends ClienteDaoPrivate {

    public consultar(req:Request, res: Response) {
        ClienteControllerPrivate.obtenerClientes(res)
    }

    public consultarUno(req: Request, res: Response) {
        //PlanesController.obtenerUno(req.params.codigo, res);
    }

    public crear(req: Request, res: Response) {
        ClienteControllerPrivate.crearCliente(req, res);
    }

    public actualizar(req: Request, res: Response) {
        //PlanesController.actualizarPlan(req.params.codigo, req, res);
    }
    public eliminar(req: Request, res: Response) {
        //PlanesController.eliminarPlan(req.params.codigo, res);
    }

}

const clienteControllerPrivate = new ClienteControllerPrivate();

export default clienteControllerPrivate;
