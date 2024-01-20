import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();
const URL = String(process.env.DATABASE_URL);
const ConectionDB = mysql.createConnection(URL);

export default ConectionDB.promise();
