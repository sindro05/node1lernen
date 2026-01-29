import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool(process.env.DATABASE_URL);

export default db.promise();
