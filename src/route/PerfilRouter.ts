import { Router } from "express";
import perfilController from "../controller/PerfilController";

class PerfilRouter {
    //variable tipo ruter
    public rutaApi: Router;

    //inciacion de los metodos
    constructor() {
        this.rutaApi = Router();
        this.configRouter();
    }
    //creacion de las rutas
    public configRouter() {
        this.rutaApi.get("/todos", perfilController.consultar);
        this.rutaApi.get("/uno/:codigo", perfilController.consultarUno);
        this.rutaApi.post("/crear", perfilController.crear);
        this.rutaApi.put("/actualizar/:codigo", perfilController.actualizar);
        this.rutaApi.delete("/eliminar/:codigo", perfilController.eliminar);
    }
}

const perfilRouter = new PerfilRouter();

export default perfilRouter.rutaApi;
