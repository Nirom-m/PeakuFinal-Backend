import { Router } from "express";
import planesController from "../controller/PlanesController";

class PlanesRouter {
    //variable tipo Router
    public rutaApi: Router;

    constructor() {
        this.rutaApi = Router();
        this.configRouter();
    }

    public configRouter(): void {
        this.rutaApi.get("/todos", planesController.consultar);
        this.rutaApi.get("/uno/:codigo", planesController.consultarUno);
        this.rutaApi.post("/crear", planesController.crear);
        this.rutaApi.put("/actualizar/:codigo", planesController.actualizar);
        this.rutaApi.delete("/eliminar/:codigo", planesController.eliminar);
    }
}

const planesRouter = new PlanesRouter();

export default planesRouter.rutaApi;
