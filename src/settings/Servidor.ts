import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import ConectionDB from "./ConectionDB";


import seguridad from "../middleware/Seguidad";
import PlanesRouter from "../route/public/PlanesRouter";
import clienteRouter from "../route/public/ClienteRouter";
import PlanesRouterPrivate from "../route/private/PlanesRouterPrivate";

class Servidor {
    public app: express.Application;

    constructor() {
        dotenv.config({ path: "variables.env" });
        this.app = express();
        this.iniciarConfig();
        this.iniciarRutas();
        ConectionDB.connect();
    }
    public iniciarConfig() {
        this.app.set("PORT", process.env.PORT);
        //bloquear o permitir acceso
        this.app.use(cors());
        //los mensajes salen en la consola en modo desarrollo
        this.app.use(morgan("dev"));
        // permite limite de subida de archivos
        this.app.use(express.json({ limit: "50MB" }));
        //permite recibir parametros o consultas
        this.app.use(express.urlencoded({ extended: true }));
    }
    public iniciarRutas() {
        //Rutas Publicas
        this.app.use("/api/public/planes", PlanesRouter);
        this.app.use('/api/public/cliente', clienteRouter);
        //Rutas Privadas
        
        this.app.use('/api/private/cliente',seguridad.analizarToken, clienteRouter);
        this.app.use("/api/private/planes",seguridad.analizarToken,PlanesRouterPrivate);
        /* this.app.use('/api/public/reserva ,reservaRouter')
        this.app.use('/api/public/viaje ,viajeRouter')
        
    */
    }

    public iniciarServidor() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("backend listo en el puerto", this.app.get("PORT"));
        });
        ConectionDB.connect()
            .then(() => {
                console.log("Connected");
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    }
}

export default Servidor;
