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
        this.rutaApi.post("/login", clienteController.iniciarSesion ); 
        this.rutaApi.post("/crear", clienteController.crearCliente);
    }
}

const clienteRouter = new ClienteRouter();

export default clienteRouter.rutaApi;
