const mysql = require("mysql2");
const config = require("../config");
let connection = mysql.createConnection(config.db);

connection.connect(function (err) {
  if (err) {
    console.log(err);
  }

  connection.query("select * from products", function (err, result) {});

  console.log("Connection is succesfully created");
});


module.exports = connection.promise();