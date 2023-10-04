const Henkilo = require("./Henkilo");

class Urheilija extends Henkilo {
  #kuvalinkki;
  #laji;

  constructor(
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    kuvalinkki,
    omapaino,
    laji,
    saavutukset
  ) {
    super(etunimi, sukunimi, kutsumanimi, syntymavuosi);
    this.#kuvalinkki = kuvalinkki;
    this.omapaino = omapaino;
    this.#laji = laji;
    this._saavutukset = saavutukset;
  }

  get kuvalinkki() {
    return this.#kuvalinkki;
  }

  set kuvalinkki(linkki) {
    this.#kuvalinkki = linkki;
  }

  get omapaino() {
    return this._omapaino;
  }

  set omapaino(paino) {
    this._omapaino = paino;
  }

  get laji() {
    return this.#laji;
  }

  set laji(paalaji) {
    this.#laji = paalaji;
  }
  get saavutukset() {
    return this._saavutukset;
  }

  set saavutukset(saavutetut) {
    this._saavutukset = saavutetut;
  }

  lisaaSaavutus(uusiSaavutus) {
    this._saavutukset.push(uusiSaavutus);
  }

  naytaViesti() {
    return `Lisätietoa löydät täältä: ${this.#kuvalinkki}`;
  }
}

module.exports = Urheilija;
