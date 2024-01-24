import ViajeDao from "../dao/ViajeDao";
import { Request } from "express";

class ViajesService {

    public static async consultarViajes(): Promise<any> {
        try {
            const viajes = await ViajeDao.consultarViajes();

            if (viajes.length === 0) {
                return { status: 404, message: "No se encontraron viajes" };
            }

            return { status: 200, data: viajes };
        } catch (err) {
            console.error(err);
            throw new Error("Error interno del servidor");
        }
    }

    public static async consultarViajeId(req: Request): Promise<any> {
        try {
            const id = req.params.id;
            const viaje = await ViajeDao.consultarViajeId(id);

            if (!viaje) {
                return { status: 404, message: "No se encontró el viaje con el ID proporcionado" };
            }

            return { status: 200, data: viaje };
        } catch (err) {
            console.error(err);
            throw new Error("Error interno del servidor");
        }
    }

}

export default ViajesService;