const mysql = require("mysql");
const express = require("express");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const server = app.listen(3005, () => console.log("Serveri valmiina"));

const conn = mysql.createConnection({
  host: "localhost",
  user: "", // "mikko",
  password: "", //"kt123456",
  database: "", //"puhelinluettelo",
  multipleStatements: true,
});

conn.connect((err) => {
  if (err) {
    console.log("Tapahtui virhe yhdistettäessä tietokantaan");
    return;
  }
  console.log("Yhteys muodostettu");
});
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Content-type", "application/json");
  next();
});

// Hae kaikki urheilijat
app.get("/urheilijat", (req, res) => {
  conn.query("SELECT * FROM urheilijat", (err, rows) => {
    if (err) throw err;
    return res.status(200).json(rows);
  });
});

// Hae urheilija
app.get("/urheilijat/:id", (req, res) => {
  const id = Number(req.params.id);
  conn.query("SELECT * FROM urheilijat WHERE id=?", id, (err, rows) => {
    if (err) throw err;
    res.end(JSON.stringify(rows[0]));
  });
});

// Muokkaa urheilija
app.put("/urheilijat/:id", (req, res) => {
  const id = Number(req.params.id);
  const paivitettyHenkilo = req.body;
  conn.query(
    "UPDATE urheilijat SET ? WHERE id = ?;",
    [paivitettyHenkilo, req.params.id],
    function (error, results) {
      if (error) throw error;
      conn.query("SELECT * FROM urheilijat WHERE id=?", id, (err, rows) => {
        if (err) throw err;
        res.end(JSON.stringify(rows[0]));
      });
    }
  );
});

// Poista urheilija
app.delete("/urheilijat/:id", (req, res) => {
  console.log("serverin poiston id:");
  const id = Number(req.params.id);
  console.log(id);
  conn.query(
    "DELETE FROM urheilijat WHERE id = ?;",
    [req.params.id],
    function (error, results) {
      if (error) throw error;
      return;
    }
  );
});

// Lisää urheilija
app.post("/lisaa", (req, res) => {
  let henkilo = req.body;
  console.log(henkilo);

  const syntymavuosi = req.body.syntymavuosi;
  const year = new Date(syntymavuosi).getFullYear();

  if (!henkilo) {
    return res
      .status(400)
      .send({ error: true, message: "Urheilija-objektia ei muodostunut" });
  }
  conn.query(
    "INSERT INTO urheilijat SET ? ",
    henkilo,
    function (error, results, fields) {
      if (error) throw error;
      return res.send(JSON.stringify({ id: results.insertId, ...henkilo }));
    }
  );
});

module.exports = app;
