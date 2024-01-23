import { Request, Response } from "express";
import ClienteDao from "../../dao/public/CilenteDao";
import ClienteService from "../../services/ClienteService";

class ClienteController {

    public async consultarClienteId(req: Request, res: Response) {
        try {

            const respuestaConsulta = await ClienteService.consultarClientePorId(req);

            if (respuestaConsulta.status === 200) {
                res.status(200).json(respuestaConsulta.data);
            } else {
                res.status(respuestaConsulta.status).json({ error: respuestaConsulta.message });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }

    public async consultarClienteEmail(req: Request, res: Response) {
        try {
            const respuestaConsulta = await ClienteService.consultarClientePorEmail(req);

            if (respuestaConsulta.status === 200) {
                res.status(200).json(respuestaConsulta.data);
            } else {
                res.status(respuestaConsulta.status).json({ error: respuestaConsulta.message });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }

    public async crearCliente(req: Request, res: Response) {
        try {
            const respuestaCreacion = await ClienteService.crearCliente(req);

            if (respuestaCreacion.status === 201) {
                res.status(201).json(respuestaCreacion.data);
            } else {
                res.status(respuestaCreacion.status).json({ error: respuestaCreacion.message });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }

}

const clienteController = new ClienteController();

export default clienteController;
