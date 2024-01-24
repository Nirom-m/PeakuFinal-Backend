import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

class Seguridad {

    public static emitirToken(usuario: any) {
        const token = jwt.sign(
            {
                username: usuario.username,
                rol: usuario.rol,
                email: usuario.email,
            },
            String(process.env.CLAVE),
            { expiresIn: "3 days" }
        );
        return { token: `Bearer ${token}`};
    }
    public static analizarToken(req: Request, res: Response, next: NextFunction) {
        try {
            const llave = String(process.env.CLAVE);
            const tokenRecibido = req.headers.authorization?.split(" ")[1] as string;

            if (!tokenRecibido) {
                throw new Error("Token no proporcionado");
            }

            const infoUsuario = jwt.verify(tokenRecibido, llave);
            req.body.datosUsuario = infoUsuario;
            next();
        } catch (error: any) {
            console.error(error);
            res.status(500).json({ respuesta: error.message});
        }
    }

    public static verificarRol(rolesPermitidos: string[]) {
        return (req: Request, res: Response, next: NextFunction) => {
            try {
                // Verificar si el objeto datosUsuario existe en el cuerpo de la solicitud
                if (!req.body.datosUsuario) {
                    return res.status(401).json({ respuesta: "Token no válido" });
                }
    
                // Obtener el rol del usuario desde el objeto datosUsuario
                const rolUsuario = req.body.datosUsuario.rol;
    
                // Verificar si el rol del usuario tiene permisos
                if (rolesPermitidos.includes(rolUsuario)) {
                    // El usuario tiene el rol adecuado, permitir el acceso
                    next();
                } else {
                    // El usuario no tiene el rol adecuado, denegar el acceso
                    res.status(403).json({ respuesta: "Acceso no autorizado" });
                }
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: "Error interno del servidor al verificar rol" });
            }
        };
    }
}

export default Seguridad;
