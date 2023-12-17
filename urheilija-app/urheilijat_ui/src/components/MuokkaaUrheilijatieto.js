import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import urheilijaContext from "../context/UrheilijaContext";

const MuokkaaUrheilijatieto = () => {
  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [kutsumanimi, setKutsumanimi] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState("");
  const [paino, setPaino] = useState("");
  const [kuvalinkki, setKuvalinkki] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");

  const UrheilijaContext = useContext(urheilijaContext);
  const { id } = useParams();
  let history = useNavigate();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const urheilijatieto = UrheilijaContext.getUrheilijatieto(id).then(
        (res) => {
          setEtunimi(res.etunimi);
          setSukunimi(res.sukunimi);
          setKutsumanimi(res.kutsumanimi);
          setSyntymavuosi(res.syntymavuosi);
          setPaino(res.paino);
          setKuvalinkki(res.kuvalinkki);
          setLaji(res.laji);
          setSaavutukset(res.saavutukset);
        }
      );
    } else mounted = false;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const muokattuPvm = new Date(syntymavuosi).toISOString().split("T")[0];

    const paivitettyUrheilijatieto = {
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi: muokattuPvm,
      paino,
      kuvalinkki,
      laji,
      saavutukset,
    };

    UrheilijaContext.setUrheilijatieto(id, paivitettyUrheilijatieto);
    history("/");
  };

  return (
    <div className="card mb-3">
      <h1>Muokkaa urheilijatietoja</h1>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label
              htmlFor="etunimi"
              className="col-md-4 col-form-label label-fonttikoko"
            >
              Etunimi
            </label>
            <div className="col-md-8">
              <input
                type="text"
                name="etunimi"
                className="form-control form-control-lg"
                value={etunimi}
                onChange={(e) => setEtunimi(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="sukunimi"
              className="col-md-4 col-form-label label-fonttikoko"
            >
              Sukunimi
            </label>
            <div className="col-md-8">
              <input
                type="text"
                name="sukunimi"
                className="form-control form-control-lg"
                value={sukunimi}
                onChange={(e) => setSukunimi(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="kutsumanimi"
              className="col-md-4 col-form-label label-fonttikoko"
            >
              Kutsumanimi
            </label>
            <div className="col-md-8">
              <input
                type="text"
                name="kutsumanimi"
                className="form-control form-control-lg"
                value={kutsumanimi}
                onChange={(e) => setKutsumanimi(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="syntymavuosi"
              className="col-md-4 col-form-label label-fonttikoko"
            >
              Syntymäaika
            </label>
            <div className="col-md-8">
              <input
                type="date"
                name="syntymavuosi"
                className="form-control form-control-lg"
                value={syntymavuosi}
                onChange={(e) => setSyntymavuosi(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="paino"
              className="col-md-4 col-form-label label-fonttikoko"
            >
              Paino
            </label>
            <div className="col-md-8">
              <input
                type="number"
                name="paino"
                className="form-control form-control-lg"
                placeholder="Syötä paino..."
                value={paino}
                onChange={(e) => setPaino(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="kuvalinkki"
              className="col-md-4 col-form-label label-fonttikoko"
            >
              Kuvalinkki
            </label>
            <div className="col-md-8">
              <input
                type="text"
                name="kuvalinkki"
                className="form-control form-control-lg"
                placeholder="Syötä kuvalinkki..."
                value={kuvalinkki}
                onChange={(e) => setKuvalinkki(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="laji"
              className="col-md-4 col-form-label label-fonttikoko"
            >
              Laji
            </label>
            <div className="col-md-8">
              <input
                type="text"
                name="laji"
                className="form-control form-control-lg"
                placeholder="Syötä laji..."
                value={laji}
                onChange={(e) => setLaji(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group row">
            <label
              htmlFor="saavutukset"
              className="col-md-4 col-form-label label-fonttikoko"
            >
              Saavutukset
            </label>
            <div className="col-md-8">
              <input
                type="text"
                name="saavutukset"
                className="form-control form-control-lg"
                placeholder="Syötä saavutukset..."
                value={saavutukset}
                onChange={(e) => setSaavutukset(e.target.value)}
                required
              />
            </div>
          </div>

          <input
            type="submit"
            value="Tallenna"
            className="btn btn-light btn-block style-tallenna-button"
          />
        </form>
      </div>
      <style>
        {`
    .style-tallenna-button {
      margin-top: 40px; 
      border: 2px solid #000; 
      padding: 10px;
      background-color: #00cc00;
    }

    .label-fonttikoko {
      font-size: 20px;
    }
  `}
      </style>
    </div>
  );
};

export default MuokkaaUrheilijatieto;
