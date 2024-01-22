import { Router } from "express";
import planesController from "../../controller/public/PlanesController";

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
    }
}

const planesRouter = new PlanesRouter();

export default planesRouter.rutaApi;
