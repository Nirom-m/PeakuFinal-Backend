import { Router } from "express";
import planesControllerPrivate from "../../controller/private/PlanesControllerPrivate";

class PlanesRouterPrivate {
    //variable tipo Router
    public rutaApi: Router;

    constructor() {
        this.rutaApi = Router();
        this.configRouter();
    }

    public configRouter(): void {
        /* this.rutaApi.get("/todos", planesControllerPrivate.consultar);
        this.rutaApi.get("/uno/:codigo", planesControllerPrivate.consultarUno); */
        this.rutaApi.post("/crear", planesControllerPrivate.crear);
        this.rutaApi.put("/actualizar/:codigo", planesControllerPrivate.actualizar);
        this.rutaApi.delete("/eliminar/:codigo", planesControllerPrivate.eliminar);
    }
}

const planesRouterPrivate = new PlanesRouterPrivate();

export default planesRouterPrivate.rutaApi;
