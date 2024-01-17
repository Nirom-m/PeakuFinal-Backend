import { Router } from 'express';
import perfilController from '../controller/ArtuculoController';


class ArticuloRouter{
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

const articuloRouter = new ArticuloRouter();
// se exporta la propiedad par que llame todos los endpoint
export default articuloRouter.rutaApi;