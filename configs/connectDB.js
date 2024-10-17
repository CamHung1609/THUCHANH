import mysql from "mysql12";
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "buoi2",
  password: "",
});
const connection = pool.promise();
export default connection;
