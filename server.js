// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.end('Hello World!');
// });

// app.listen(port, () => {
//     console.log(`app listening at http://localhost:${port}`)
//   });
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rishirocks292",
  database: "dmp_kamet",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("SELECT * FROM addresses", function (err, addresses, fields) {
    if (err) throw err;
    console.log(addresses);
  });
});
