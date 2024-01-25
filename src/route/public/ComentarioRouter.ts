import { Router } from "express";
import comentarioController from "../../controller/ComentarioController";


class ComentarioRouter{

    public rutaApi: Router;



    constructor(){
        this.rutaApi =Router();
        this.configRoute()
    }

    public configRoute():void {
        this.rutaApi.get("/comentarios", comentarioController.obtenerTodosLosComentarios);
        this.rutaApi.get("/comentarioId/:id", comentarioController.obtenerComentarioPorId);
        this.rutaApi.get("/comentariosClienteEmail", comentarioController.obtenerComentariosPorClienteEmail);
    }
}

const comentarioRouter = new ComentarioRouter()

export default comentarioRouter.rutaApi;