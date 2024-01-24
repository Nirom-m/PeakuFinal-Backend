import { Router } from "express";
//import planesControllerPrivate from "../../controller/private/PlanesControllerPrivate";
import Seguridad from "../../middleware/Seguridad";
import clienteController from "../../controller/ClienteController";



class ClienteRouter {
    //variable tipo Router
    public rutaApi: Router;

    constructor() {
        this.rutaApi = Router();
        this.configRouter();
    }

    public configRouter(): void {
        this.rutaApi.use(Seguridad.analizarToken, Seguridad.verificarRol(['Cliente']));
        
        this.rutaApi.get("/todos", clienteController.consultar );
        /* this.rutaApi.get("/uno/:codigo", planesControllerPrivate.consultarUno);
        this.rutaApi.put("/actualizar/:codigo", planesControllerPrivate.actualizar);
        this.rutaApi.delete("/eliminar/:codigo", planesControllerPrivate.eliminar); */
        //this.rutaApi.get("/consultarId/:id", clienteController.consultarClienteId);
        this.rutaApi.get("/consultarEmail", clienteController.consultarClienteEmail);
    }
}

const clienteRouter = new ClienteRouter();

export default clienteRouter.rutaApi;
