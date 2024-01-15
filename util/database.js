const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "products",
  password: "Deeseh@7088%",
});

module.exports = pool.promise();
