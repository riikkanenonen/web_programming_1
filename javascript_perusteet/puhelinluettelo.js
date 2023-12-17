let luettelo = [
  { nimi: "Aku", puhelinnumero: 123 },
  { nimi: "Hessu", puhelinnumero: 456 },
  { nimi: "Mikki", puhelinnumero: 890 },
];

var input = require("readline-sync");

// Käyttäjä tekee aluksi valinnan, haluaako lisätä uuden henkilön luetteloon vai hakea puhelinnumeroa
var valinta = input.question(
  "Valitse toiminto: 1 = Lisää henkilö, 2 = Hae puhelinnumero: "
);

// Uuden tiedon lisääminen luetteloon
function lisaaTieto(nimi, puhelinnumero) {
  luettelo.push({ nimi, puhelinnumero });
}

// Puhelinnumeron hakeminen nimen perusteella
function haePuhelinnumero(syote) {
  for (let i = 0; i < luettelo.length; i++) {
    if (luettelo[i].nimi === syote) {
      return `Puhelinnumero on: ${luettelo[i].puhelinnumero}`;
    }
  }
  return `Nimeä "${syote}" ei löytynyt luettelosta.`;
}

if (valinta === "1") {
  let nimi = input.question("Anna nimi: ");
  let puhelinnumero = parseInt(input.question("Anna puhelinnumero: "));
  lisaaTieto(nimi, puhelinnumero);
  console.log(
    `Henkilö ${nimi} ja puhelinnumero ${puhelinnumero} on lisätty luetteloon!`
  );
} else if (valinta === "2") {
  let syote = input.question("Anna nimi: ");
  console.log(haePuhelinnumero(syote));
} else {
  console.log("Valitsit väärin, yritä uudelleen!");
}
