import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import urheilijaContext from "../context/UrheilijaContext";
import { useNavigate } from "react-router-dom";
import { Trash3, Pencil } from "react-bootstrap-icons";

const Urheilijatieto = (props) => {
  const UrheilijaContext = useContext(urheilijaContext); //hooks
  let history = useNavigate();

  const [naytaUrheilijatieto, setnaytaUrheilijatieto] = useState(false);

  const onDeleteClick = (id) => {
    UrheilijaContext.poistaUrheilijatieto(id);
    window.location.reload();
    history("/");
  };

  const onShowClick = (e) => {
    let lippu = !naytaUrheilijatieto;
    setnaytaUrheilijatieto(lippu);
  };

  const {
    id,
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    paino,
    kuvalinkki,
    laji,
    saavutukset,
  } = props.urheilijatieto;

  const vuosi = new Date(syntymavuosi).getFullYear();

  return (
    <div className="card card-body mb-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h4>
            {sukunimi} {etunimi}
          </h4>
        </div>
        <div className="d-flex">
          <button className="btn btn-info btn-lg" onClick={onShowClick}>
            ...
          </button>
          <Link to={`urheilijatieto/muokkaa/${id}`}>
            <button className="btn btn-warning btn-lg ml-2">
              <Pencil />
            </button>
          </Link>
          <button
            className="btn btn-danger btn-lg ml-2"
            onClick={onDeleteClick.bind(this, { id })}
          >
            <Trash3 />
          </button>
        </div>
      </div>
      <div className="details-box mt-3" style={{ maxWidth: "700px" }}>
        {naytaUrheilijatieto && (
          <table className="table">
            <tbody>
              <tr>
                <td className="font-weight-bold text-left">Kutsumanimi:</td>
                <td className="text-left">{kutsumanimi}</td>
              </tr>
              <tr>
                <td className="font-weight-bold text-left">Syntymävuosi:</td>
                <td className="text-left">{vuosi}</td>
              </tr>
              <tr>
                <td className="font-weight-bold text-left">Paino:</td>
                <td className="text-left">{paino}</td>
              </tr>
              <tr>
                <td className="font-weight-bold text-left">Kuvalinkki:</td>
                <td className="text-left">{kuvalinkki}</td>
              </tr>
              <tr>
                <td className="font-weight-bold text-left">Laji:</td>
                <td className="text-left">{laji}</td>
              </tr>
              <tr>
                <td className="font-weight-bold text-left">Saavutukset:</td>
                <td className="text-left">{saavutukset}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Urheilijatieto;
