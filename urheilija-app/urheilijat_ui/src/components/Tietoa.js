import React from "react";

export default function Tietoa() {
  return (
    <div className="left-align">
      <h1 className="h1-header-2">Tietoa Urheilijat-sovelluksesta</h1>
      <p className="body">
        Urheilijat-sovelluksen avulla voit hallita urheilijoiden tietoja.
        <br></br>
        <br></br>
        Sovelluksessa voit:
      </p>
      <ul className="body">
        <li>Lisätä uuden urheilijan tiedot</li>
        <li>Muokata sovelluksessa olevan urheilijan tietoja</li>
        <li>Poistaa urheilijan tiedot</li>
      </ul>
      <br></br>
      <br></br>
      <p className="body">Versio 1.0.0</p>
    </div>
  );
}
