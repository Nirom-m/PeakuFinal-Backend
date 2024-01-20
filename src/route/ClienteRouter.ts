import { Router } from "express";
import clienteController from "../controller/ClienteController";



class ClienteRouter {
    //variable tipo Router
    public rutaApi: Router;

    constructor() {
        this.rutaApi = Router();
        this.configRouter();
    }

    public configRouter(): void {
       this.rutaApi.get("/todos", clienteController.consultar ); 
       /* this.rutaApi.get("/uno/:codigo", planesController.consultarUno);
        this.rutaApi.post("/crear", planesController.crear);
        this.rutaApi.put("/actualizar/:codigo", planesController.actualizar);
        this.rutaApi.delete("/eliminar/:codigo", planesController.eliminar);
    */}
}

const clienteRouter = new ClienteRouter();

export default clienteRouter.rutaApi;
