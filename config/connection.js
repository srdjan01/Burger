var mysql = require("mysql");
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3000,
  // Your username
  user: "root",
  // Your password
  password: "Zuki197116",
  database: "burgers_db"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readBurger();
});
function readBurger() {
  connection.query("SELECT name FROM burger", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}