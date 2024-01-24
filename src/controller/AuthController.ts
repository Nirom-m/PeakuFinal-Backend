import { Request, Response } from "express";
import ClienteDao from "../dao/CilenteDao";
import ClienteService from "../services/ClienteService";
import jwt from 'jsonwebtoken';
import Seguridad from "../middleware/Seguridad";

class AuthController {

    public async iniciarSesion(req: Request, res: Response) {

        // Verificamos credenciales ingresadas con la base de datos
        const verificarCredenciales = await ClienteService.verificarInicioSesion(req);
        if (!(verificarCredenciales.status===200)) {
            return res.status(verificarCredenciales.status).json(verificarCredenciales.message);
        }
        

        let token = Seguridad.emitirToken(verificarCredenciales.data);

        return res.status(200).json(token);
    }

}

const authController = new AuthController();

export default authController;
