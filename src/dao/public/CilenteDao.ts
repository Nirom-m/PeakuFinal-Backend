import { Request, Response } from "express";
import ConectionDB from "../../settings/ConectionDB";
import ClienteEntidad from "../../entities/ClienteEntidad";
import Cifrado from 'bcryptjs'
import jwt from 'jsonwebtoken'

class ClienteDao {
    protected static async iniciarSesion(req: Request, res: Response): Promise<any> {
        const { email, password }: any = req.body
        const query = `SELECT * FROM cliente WHERE email="${email}"`
        await ConectionDB.query(query)
            .then((objeto: Array<any>) => {
                if (objeto[0]) {
                    //compara la contraseña que viene del front con la que esta en el back
                    const passwordCorrecta = Cifrado.compareSync(password, objeto[0][0].password);
                    if (passwordCorrecta) {
                        const datosVisibles = {
                            idCliente: objeto[0][0].cliente_id,
                            email: email,
                            perfil: objeto[0][0].rol,
                        };
                        const llavePrivada = String(process.env.CLAVE);
                        const miToken = jwt.sign(datosVisibles, llavePrivada, {
                            expiresIn: 86400,
                        });
                        res.status(200).json({ token: miToken });
                    } else {
                        res.status(400).json({
                            respuesta: 'Credenciales Incorrectas',
                        });
                    }

                } else {
                    res.status(400).json({
                        respuesta: 'Credenciales Incorrectas',
                    });
                }

            })

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
            const contra = Cifrado.hashSync(password, 10);
            const newCliente = new ClienteEntidad(email, telefono, direccion, username, contra, nombre, apellidos, nombreRolPorDefecto);
            await ConectionDB.query("INSERT INTO cliente SET ?", [newCliente])
                .then((miObjeto: any) => {
                    const misDatos = { codUsuario: miObjeto[0].insertId, email: email }
                    const llave = String(process.env.CLAVE)
                    const token = jwt.sign(misDatos, llave, { expiresIn: 86400 })
                    res.status(200).json({
                        token: token
                    })
                })
                .catch(err => {
                    res.status(400).json({
                        respuesta: 'No se puede crear el Cliente',
                        err

                    })
                })
        }
    }
}


export default ClienteDao;
