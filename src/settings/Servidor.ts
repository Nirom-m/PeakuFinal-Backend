import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import ConectionDB from './ConectionDB';

class Servidor{

    public app : express.Application;

    constructor(){
        dotenv.config({ path: 'Variables.env' });
        this.app=express()
        this.iniciarConfig();
        ConectionDB();
        
    }
    public iniciarConfig() {
        this.app.set('PORT', process.env.PORT);
        //bloquear o permitir acceso
        this.app.use(cors());
        //los mensajes salen en la consola en modo desarrollo
        this.app.use(morgan('dev'));
        // permite limite de subida de archivos
        this.app.use(express.json({ limit: '50MB' }));
        //permite recibir parametros o consultas
        this.app.use(express.urlencoded({ extended: true }));
    }

    public iniciarServidor() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('backend listo en el puerto', this.app.get('PORT'));
        });
    }
}


export default Servidor;