import mysql from "mysql2";
const ConectionDB=()=>{
    const URL = String(process.env.DATABASE_URL)
    const Conec= mysql.createConnection(URL)
    
    Conec.connect(err => {
        if (err) {
            console.error('Error al conectar a la base de datos:', err);
            return;
        }
        console.log('Conexión exitosa a la base de datos MySQL');
    });

    Conec.end(err => {
        if (err) {
          console.error('Error al cerrar la conexión a la base de datos:', err);
          return;
        }
        console.log('Conexión cerrada exitosamente');
      });
}


export default ConectionDB;
