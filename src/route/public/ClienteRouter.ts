import { Router } from "express";
import clienteController from "../../controller/public/ClienteController";



class ClienteRouter {
    //variable tipo Router
    public rutaApi: Router;

    constructor() {
        this.rutaApi = Router();
        this.configRouter();
    }


    public configRouter(): void {
        // this.rutaApi.post("/login", clienteController.iniciarSesion ); 
        this.rutaApi.post("/crear", clienteController.crearCliente);
        this.rutaApi.get("/consultarId/:id", clienteController.consultarClienteId);
        this.rutaApi.get("/consultarEmail", clienteController.consultarClienteEmail);

    }
}

const clienteRouter = new ClienteRouter();

export default clienteRouter.rutaApi;
