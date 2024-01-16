import { Router } from 'express';
import perfilController from '../controller/PerfilController';
import Conec from '../settings/ConectionDB';


class PerfilRouter{
    //varible tipo router
    public rutaApi: Router;

    constructor(){
        this.rutaApi = Router();
        this.configRouter();
    }

    public configRouter():void{
        this.rutaApi.get('/todos', async(req, res)=>{
            try{
                const [result]= await Conec.query("SELECT * FROM estado_perfil")
                console.log('entra aqui');
                    res.status(200).json(result);
                }
            catch(err) {
                console.log(err);
                res.status(400).json({ respuesta: 'Error en la consulta' });
            }
        })
    }

}

const perfilRouter = new PerfilRouter();
// se exporta la propiedad par que llame todos los endpoint
export default perfilRouter.rutaApi;