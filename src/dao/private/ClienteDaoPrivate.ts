import { Request, Response } from "express";
import ConectionDB from "../../settings/ConectionDB";
import ClienteEntidad from "../../entities/ClienteEntidad";
import Cifrado from 'bcryptjs'
import jwt from 'jsonwebtoken'

class ClienteDaoPrivate {
    protected static async obtenerClientes(res: Response): Promise<any> {
        try {
            const query = "SELECT * FROM cliente";
            const [result] = await ConectionDB.query(query);
            res.status(200).json(result);
        } catch (err) {
            res.status(400).json({ respuesta: "error en la consulta" });
        }
    }

    protected static async crearCliente(
        req: Request,
        res: Response
    ): Promise<any> {
        const { email, telefono, direccion, username, password, nombre, apellidos } = req.body
        //validar si el cliente existe
        const query = `SELECT * FROM cliente WHERE email= "${email}"`
        const existe: Array<any> = await ConectionDB.query(query);
        if (existe[0].length >= 1) {
            res.status(400).json({ respuesta: "el correo ya existe en la base de datos" })
        }
        else {
            const nombreRolPorDefecto = String(process.env.USUARIO_EXTERNO);
            const contra= Cifrado.hashSync(password,10);
            const newCliente = new ClienteEntidad(email, telefono, direccion, username, contra, nombre, apellidos, nombreRolPorDefecto);
            await ConectionDB.query("INSERT INTO cliente SET ?", [newCliente])
            .then((miObjeto:any) =>{    
                const misDatos={codUsuario:miObjeto[0].insertId ,email: email }
                const llave = String(process.env.CLAVE)
                const token = jwt.sign(misDatos,llave,{expiresIn:86400})

                res.status(200).json({
                    token: token
                })
            })
            .catch(err =>{
                res.status(400).json({
                    respuesta:'No se puede crear el Cliente',
                    err

                })
            })
        }
    }
}


export default ClienteDaoPrivate;
