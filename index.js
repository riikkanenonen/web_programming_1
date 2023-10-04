const Henkilo = require("./Henkilo");
const Urheilija = require("./Urheilija");

// Esimerkkejä Henkilö-oliosta

const eero = new Henkilo("Eero", "Meikalainen", "Perus-Eero", 1960);
console.log(eero.kokoNimi());
console.log(`Henkilön ${eero.kokoNimi()} ikä on ${eero.laskeIka()} vuotta.`);
console.log(); // Tulostetaan tyhjä rivi väliin

// Esimerkkejä Urheilija-oliosta

const marjaLiisa = new Urheilija(
  "Marja-Liisa",
  "Kirvesniemi",
  "Marja-Liisa",
  1955,
  "https://fi.wikipedia.org/wiki/Marja-Liisa_Kirvesniemi",
  70,
  "hiihto",
  ["Olympiakulta Sarajevo v. 1984", "MM kulta Lahti v. 1978"]
);

console.log(marjaLiisa.kokoNimi()); // Tulostetaan koko nimi
console.log(`Laji: ${marjaLiisa.laji}`);
console.log(`Syntymävuosi: ${marjaLiisa.getSyntymavuosi()}`);
console.log(`Ikä: ${marjaLiisa.laskeIka()}`);
console.log(
  `Urheilijan ${marjaLiisa.kokoNimi()} ikä on ${marjaLiisa.laskeIka()} vuotta.`
);
console.log(
  `Urheilijan ${marjaLiisa.kokoNimi()} saavutukset ennen muutosta: ${marjaLiisa.saavutukset.join(
    ", "
  )}.`
); // Tulostetaan saavutukset stringinä ja pilkulla eroteltuna
marjaLiisa.lisaaSaavutus("Olympiapronssi Calgary v. 1988"); // Lisätään uusi saavutus Marja-Liisalle
marjaLiisa.lisaaSaavutus("Olympiapronssi Lillehammer v. 1994"); // Lisätään uusi saavutus Marja-Liisalle

console.log(
  `Urheilijan ${marjaLiisa.kokoNimi()} saavutukset muutoksen jälkeen: ${marjaLiisa.saavutukset.join(
    ", "
  )}.`
); // Tulostetaan saavutukset muutoksen jälkeen
console.log(marjaLiisa.naytaViesti());
console.log(); // Tulostetaan tyhjä rivi väliin

const seppo = new Urheilija(
  "Seppo",
  "Räty",
  "Seppo",
  1962,
  "https://fi.wikipedia.org/wiki/Seppo_R%C3%A4ty",
  90,
  "keihäänheitto",
  [
    "Olympiahopea Barcelona v. 1992",
    "Olympiapronssi Soul v. 1988",
    "Olympiapronssi Atlanta v. 1996",
  ]
);

console.log(seppo.kokoNimi());
console.log(`Laji: ${seppo.laji}`);
console.log(`Syntymävuosi: ${seppo.getSyntymavuosi()}`);
console.log(`Ikä: ${seppo.laskeIka()}`);
console.log(seppo.saavutukset); // Tulostetaan saavutukset sellaisenaan
console.log(
  `Urheilijan ${seppo.kokoNimi()} paino ennen muutosta: ${seppo.omapaino} kg.`
);
seppo.omapaino = 100;
console.log(
  `Urheilijan ${seppo.kokoNimi()} paino muutoksen jälkeen: ${
    seppo.omapaino
  } kg.`
);
console.log(seppo.naytaViesti());
