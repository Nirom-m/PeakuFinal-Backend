import { Router } from "express";
import Seguridad from "../../middleware/Seguridad";
import planesController from "../../controller/PlanesController";

class PlanesRouterPrivate {
    //variable tipo Router
    public rutaApi: Router;

    constructor() {
        this.rutaApi = Router();
        this.configRouter();
    }

    public configRouter(): void {
        this.rutaApi.use(Seguridad.analizarToken);
        this.rutaApi.get("/uno/:codigo", planesController.consultarUno);
        this.rutaApi.post("/crear", planesController.crear);
        this.rutaApi.put("/actualizar/:codigo", planesController.actualizar);
        this.rutaApi.delete("/eliminar/:codigo", planesController.eliminar);
    }
}

const planesRouterPrivate = new PlanesRouterPrivate();

export default planesRouterPrivate.rutaApi;
