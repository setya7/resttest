var mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tryrest",
});

conn.connect((err) => {
  if (err) throw err;
  console.log(`ini ${err ? `error ${err}` : "tidak ada error ya"}`);
});

module.exports = conn;
