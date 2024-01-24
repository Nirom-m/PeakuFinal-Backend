import { Request, Response } from "express";
import ConectionDB from "../settings/ConectionDB";
import ClienteEntidad from "../entities/ClienteEntidad";
import Cifrado from 'bcryptjs'
import { RowDataPacket } from "mysql2";

class ClienteDao {

    public static async obtenerClienteId(id: string): Promise<any> {
        try {
            const query = `SELECT * FROM cliente WHERE cliente_id=${id}`;
            const resultado = await ConectionDB.query<RowDataPacket[]>(query);

            // Verificar si hay resultados
            if (resultado[0].length === 0) {
                return null; // O cualquier valor que desees para indicar que no se encontró el cliente
            }

            return resultado[0][0];
        } catch (err) {
            console.error(err);
            throw new Error("Error interno del servidor");
        }
    }

    public static async obtenerClienteEmail(email: string): Promise<any> {
        try {
            const query = `SELECT * FROM cliente WHERE email="${email}"`;
            const resultado = await ConectionDB.query<RowDataPacket[]>(query);

            // Verificar si hay resultados
            if (resultado[0].length === 0) {
                return null; // O cualquier valor que desees para indicar que no se encontró el cliente
            }

            return resultado[0][0];
        } catch (err) {
            console.error(err);
            throw new Error("Error interno del servidor");
        }
    }




    public static async crearCliente(email: string, telefono: string, direccion: string, username: string, password: string,
        nombre: string,
        apellidos: string,
    ): Promise<any> {
        try {

            const contra = await Cifrado.hash(password, 10);
            const nombreRolPorDefecto = String(process.env.USUARIO_EXTERNO);
            const nuevoCliente = new ClienteEntidad(email, telefono, direccion, username, contra, nombre, apellidos, nombreRolPorDefecto);

            const insertQuery = "INSERT INTO cliente SET ?";
            await ConectionDB.query(insertQuery, [nuevoCliente]);

            return this.obtenerClienteEmail(email);
        } catch (err) {
            console.error(err);
            throw new Error("Error interno del servidor");
        }
    }

    public static async obtenerClienteUsername(username: string): Promise<any> {
        try {
            const query = "SELECT * FROM cliente WHERE username = ?";
            const resultado = await ConectionDB.query<RowDataPacket[]>(query, [username]);

            // Verificar si hay resultados
            if (resultado[0].length === 0) {
                return null; // O cualquier valor que desees para indicar que no se encontró el cliente
            }

            return resultado[0][0];
        }catch (err) {
            console.error(err);
            throw new Error("Error interno del servidor");
        }
    }
    
}


export default ClienteDao;
