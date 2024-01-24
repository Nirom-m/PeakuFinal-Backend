import { RowDataPacket } from "mysql2";
import ConectionDB from "../settings/ConectionDB";

class ViajeDao{
    public static async consultarViajes():Promise<any>{
        try {
            const query = 'SELECT * FROM viaje';
            const result = await ConectionDB.query<RowDataPacket[]>(query);

            return result[0];
        } catch (error) {
            console.error(error);
            throw new Error('Error interno del servidor al consultar viajes');
        }

    }
    public static async consultarViajeId(id: string):Promise<any>{
        try {
            const query = 'SELECT * FROM viaje WHERE viaje_id = ?';
            const result = await ConectionDB.query<RowDataPacket[]>(query, [id]);

            if (result[0].length === 0) {
                return null; // Viaje no encontrado
            }

            return result[0][0];
        } catch (error) {
            console.error(error);
            throw new Error('Error interno del servidor al consultar viaje por ID');
        }
    }
}

export default ViajeDao;