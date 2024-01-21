import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

class Seguridad {
    public analizarToken(req: Request, res: Response, next: NextFunction) {
        //te da elaccso a la base de datos
        if (req.headers.authorization) {
            try {
                console.log('entra en el try');
                const llave = String(process.env.CLAVE);
                const tokenRecibido = req.headers.authorization ?.split(
                    " "
                )[1] as string;
                console.log(tokenRecibido);
                const infoUsuario = jwt.verify(tokenRecibido, llave);
                console.log(infoUsuario);
                req.body.datosUsuario = infoUsuario;
                next();
            } catch (error) {
                res.status(401).json({ respuesta: "Intento de Fraude" });
            }
        } else {
            //respuesta a no tener un Token de seguridad
            res.status(401).json({
                respuesta: "Petición negada por el sistema de seguridad",
            });
        }
    }
}
const seguridad = new Seguridad();
export default seguridad;
