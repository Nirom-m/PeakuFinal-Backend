import { Router } from "express";
import clienteControllerPrivate from "../../controller/private/ClienteControllerPrivate";
import planesControllerPrivate from "../../controller/private/PlanesControllerPrivate";



class ClienteRouter {
    //variable tipo Router
    public rutaApi: Router;

    constructor() {
        this.rutaApi = Router();
        this.configRouter();
    }

    public configRouter(): void {
        this.rutaApi.get("/todos", clienteControllerPrivate.consultar ); 
        this.rutaApi.post("/crear", clienteControllerPrivate.crear);
        this.rutaApi.get("/uno/:codigo", planesControllerPrivate.consultarUno);
        this.rutaApi.put("/actualizar/:codigo", planesControllerPrivate.actualizar);
        this.rutaApi.delete("/eliminar/:codigo", planesControllerPrivate.eliminar);
    }
}

const clienteRouter = new ClienteRouter();

export default clienteRouter.rutaApi;
