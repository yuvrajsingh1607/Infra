const express = require("express");

const mysql = require("mysql");
const db = mysql.createConnection({

  host: "test-database-1.cofitj4tb68a.us-west-2.rds.amazonaws.com",

  user: "admin",

  password: "D3u1EuopSt9mrIUa53XX",

  database: "nodejs",

});
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected");

});
const app = express();

app.get('/users' , (req, res) => {
   db.query('SELECT * FROM employee', (err, rows, fields) => {
     if (!err)
         res.send(rows);
     else
         console.log(err);
   })
});

app.listen("80", () => {
  console.log("Server started on port 80");
});

