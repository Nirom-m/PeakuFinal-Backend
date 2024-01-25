
import ViajesService from "../services/ViajesService";
import { Request, Response } from "express";


class ViajeController{
    public async consultarViajes(req: Request, res: Response): Promise<void> {
        try {
            const resultado = await ViajesService.consultarViajes();
            if (resultado.status === 200) {
                res.status(200).json(resultado.data);
            } 
            res.status(resultado.status).json({ message: resultado.message });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }

    public async consultarViajeId(req: Request, res: Response): Promise<void> {
        try {  
            const resultado = await ViajesService.consultarViajeId(req);
            if (resultado.status === 200) {
                res.status(200).json(resultado.data);
            } 
            res.status(resultado.status).json({ message: resultado.message });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
}

const viajeController = new ViajeController();
export default viajeController;