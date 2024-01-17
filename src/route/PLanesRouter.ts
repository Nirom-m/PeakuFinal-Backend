import { Router } from "express";
import planesController from "../controller/PlanesController";

class PlanesRouter{
    //variable tipo Router
    public rutaApi:Router;

    constructor(){
        this.rutaApi =Router();
        this.configRouter();
    }

    public configRouter():void{
        this.rutaApi.get('/todos', planesController.consultaPlanes)
        this.rutaApi.post('/crear', planesController.crearPlanes)
    }

}


const planesRouter=new PlanesRouter();

export default planesRouter.rutaApi;
