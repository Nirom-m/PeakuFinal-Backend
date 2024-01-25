import { RowDataPacket } from "mysql2";
import ConectionDB from "../settings/ConectionDB";
import ClienteDao from "./CilenteDao";

class ComentarioDao {

    /* public static async crearComentario(email: string, comentario: string): Promise<any> {
        try {
            const clienteResult = await ClienteDao.obtenerClienteEmail(email);

            if (clienteResult[0].length === 0) {
                throw new Error('Cliente no encontrado');
            }

            const clienteId = clienteResult[0][0].cliente_id;

            // Insertar el comentario en la base de datos
            const insertarComentarioQuery = 'INSERT INTO comentario (cliente_id, comentario) VALUES (?, ?)';
            const resultado = await ConectionDB.query<RowDataPacket[]>(insertarComentarioQuery, [clienteId, comentario]);

            // Verificar si se insertó correctamente
            if (resultado[0].affectedRows === 1) {
                // Devolver el nuevo comentario
                const nuevoComentarioId = resultado[0].insertId;
                const nuevoComentario = await this.obtenerComentarioPorId(nuevoComentarioId.toString());
                return nuevoComentario;
            } else {
                throw new Error('Error al crear el comentario');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Error interno del servidor al crear el comentario');
        }
    } */

    public static async obtenerTodosLosComentarios(): Promise<any> {
        try {
            const query = 'SELECT * FROM comentario';
            const resultado = await ConectionDB.query<RowDataPacket[]>(query);
            if (resultado[0].length === 0) {
                return null
            } 
            return resultado[0];
        } catch (error) {
            console.error(error);
            throw new Error('Error interno del servidor al obtener todos los comentarios');
        }
    }

    public static async obtenerComentarioPorId(comentarioId: string): Promise<any> {
        try {
            const query = 'SELECT * FROM comentario WHERE comentario_id = ?';
            const resultado = await ConectionDB.query<RowDataPacket[]>(query, [comentarioId]);
            
            if (resultado[0].length === 0) {
                return null
            } 
            return resultado[0][0];
        } catch (error) {
            console.error(error);
            throw new Error('Error interno del servidor al obtener el comentario por ID');
        }
    }

    public static async obtenerComentariosPorClienteEmail(clienteEmail: string): Promise<any> {
        try {
            const query = 'SELECT * FROM comentario WHERE cliente_id IN (SELECT cliente_id FROM cliente WHERE email = ?)';
            const resultado = await ConectionDB.query<RowDataPacket[]>(query, [clienteEmail]);
            
            if (resultado[0].length === 0) {
                return null
            } 
            return resultado[0][0];
        } catch (error) {
            console.error(error);
            throw new Error('Error interno del servidor al obtener los comentarios por cliente email');
        }
    }
}

export default ComentarioDao;