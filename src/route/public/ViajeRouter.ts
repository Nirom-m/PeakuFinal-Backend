import { Router } from "express";
import viajeController from "../../controller/ViajeController";


class ViajeRouter{

    public rutaApi: Router;



    constructor(){
        this.rutaApi =Router();
        this.configRoute()
    }

    public configRoute():void {
        this.rutaApi.get("/viajes", viajeController.consultarViajes);
        this.rutaApi.get("/consultarId/:id", viajeController.consultarViajeId);
    }
}

const viajeRouter = new ViajeRouter()

export default viajeRouter.rutaApi;
