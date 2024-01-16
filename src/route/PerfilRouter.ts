import { Router } from 'express';
import perfilController from '../controller/PerfilController';


class PerfilRouter{
    //varible tipo router
    public rutaApi: Router;

    constructor(){
        this.rutaApi = Router();
        this.configRouter();
    }

    public configRouter():void{
        this.rutaApi.use('/todos', perfilController.consulta)
    }

}

const perfilRouter = new PerfilRouter();
// se exporta la propiedad par que llame todos los endpoint
export default perfilRouter.rutaApi;