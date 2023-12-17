import React, { useContext, useEffect } from "react";
import Urheilijatieto from "./Urheilijatieto";
import urheilijaContext from "../context/UrheilijaContext";

const Urheilijatiedot = () => {
  const UrheilijaContext = useContext(urheilijaContext); //hooks
  console.log(UrheilijaContext);

  useEffect(() => {
    //kun komponentti ladataan muistiin -> tapaht. useEffect
    UrheilijaContext.getUrheilijatiedot(); //haetaan yhteystiedot
    console.log(UrheilijaContext);
  }, []); //Kun komponentti piirretään, suoritetaan kerran

  const onDeleteClick = async (id) => {
    // Varmistetaan, että id on oikea numero
    if (isNaN(id)) {
      console.error("Väärä id!");
      return;
    }

    try {
      await UrheilijaContext.poistaUrheilijatieto(id);
      console.log("Urheilijan poistaminen onnistui");
    } catch (error) {
      console.error("Urheilijan poistaminen epäonnistui:", error);
    }
  };

  return (
    <>
      <h1 className="App-header display-4 mb-2">
        <span className="App-header">Urheilijat</span>
      </h1>
      <>
        {UrheilijaContext.urheilijatiedot.length
          ? UrheilijaContext.urheilijatiedot.map((urheilijatieto) => (
              <Urheilijatieto
                key={urheilijatieto.id}
                urheilijatieto={urheilijatieto}
                onDeleteClick={onDeleteClick}
              />
            ))
          : null}
      </>
    </>
  );
};

export default Urheilijatiedot;
