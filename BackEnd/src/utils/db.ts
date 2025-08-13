// connession col database
import mysql, { Connection } from 'mysql2';

export const connection: Connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'bb',
});
