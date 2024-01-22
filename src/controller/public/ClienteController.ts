import { Request, Response } from "express";
import ClienteDao from "../../dao/public/CilenteDao";

class ClienteController extends ClienteDao {

    public iniciarSesion(req:Request, res: Response) {
        ClienteController.iniciarSesion(req,res)
    }

    public crearCliente(req: Request, res: Response) {
        ClienteController.crearCliente(req, res);
    }

}

const clienteController = new ClienteController();

export default clienteController;
