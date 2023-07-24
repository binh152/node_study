import mysql from "mysql2";

// create the connection to database
const connection = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    database: "node_blog",
    password: "123456",
  })
  .promise();

export default connection;
