class Henkilo {
  constructor(etunimi, sukunimi, kutsumanimi, syntymavuosi) {
    this._etunimi = etunimi;
    this._sukunimi = sukunimi;
    this._kutsumanimi = kutsumanimi;
    this._syntymavuosi = syntymavuosi; // new Date().getFullYear();
  }

  kokoNimi() {
    return this._etunimi + " " + this._sukunimi;
  }

  toString() {
    return this.kokoNimi() + " syntymavuosi: " + this._syntymavuosi;
  }

  getSyntymavuosi() {
    return this._syntymavuosi;
  }

  laskeIka() {
    const tamaVuosi = new Date().getFullYear();
    const ika = tamaVuosi - this._syntymavuosi;
    return ika;
  }
}

module.exports = Henkilo;
