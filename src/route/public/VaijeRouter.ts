import { Router } from "express";


class ViajeRouter{

    public rutaApi: Router;



    constructor(){
        this.rutaApi =Router();
        this.configRoute()
    }

    public configRoute():void {
        this.rutaApi.get("/todos")
        this.rutaApi.get("/uno/:codigo")
    }
}

const viajeRouter = new ViajeRouter()

export default viajeRouter.rutaApi;
