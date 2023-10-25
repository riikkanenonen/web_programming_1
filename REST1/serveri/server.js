const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;
let sanakirja = [];

const data = fs.readFileSync("./sanakirja.txt", {
  encoding: "utf8",
  flag: "r",
});

const splitLines = data.split(/\r?\n/); // Jaetaan merkkijono rivin vaihtojen perusteella

splitLines.forEach((line) => {
  const sanat = line.split(" "); // Jaetaan yhden rivin merkkijono kahteen osaan
  const sana = {
    fin: sanat[0],
    eng: sanat[1],
  };
  sanakirja.push(sana);
});

console.log(sanakirja);

app.use(express.json()); // Käytetään json -muotoista dataa
app.use(express.urlencoded({ extended: true })); // Käytetään tiedonsiirrossa laajennettua muotoa

// CORS -määrittely
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Content-type", "application/json");
  next();
});

// Määritetään, miten GET pyynnöt käsitellään
app.get("/sanakirja", (req, res) => {
  const suomeksi = req.query.suomi;
  if (suomeksi) {
    const sanaLoytyi = sanakirja.find((entry) => entry.fin === suomeksi);
    if (sanaLoytyi) {
      return res.json({ eng: sanaLoytyi.eng });
    } else {
      return res.status(404).json({ error: "Word not found" });
    }
  }
  res.json(sanakirja);
});

app.listen(port, () => {
  console.log(`Kuunnellaan portissa ${port}`);
});

// Määritetään, miten POST pyynnöt käsitellään
app.post("/sanakirja", (req, res) => {
  const { suomi, englanti } = req.body;
  sanakirja.push({ fin: suomi, eng: englanti }); // Lisätään uusi sanapari
  fs.appendFileSync("./sanakirja.txt", `\n${suomi} ${englanti}`);
  res.json({ message: "Sanojen lisääminen onnistui!" });
});
