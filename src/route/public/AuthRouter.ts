import { Router } from "express";
import authController from "../../controller/public/AuthController";

class AuthRouter {
    //variable tipo Router
    public rutaApi: Router;

    constructor() {
        this.rutaApi = Router();
        this.configRouter();
    }


    public configRouter(): void {
        this.rutaApi.post("/login", authController.iniciarSesion ); 
    }
}

const authRouter = new AuthRouter();

export default authRouter.rutaApi;