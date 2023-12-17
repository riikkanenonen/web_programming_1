import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../App.css";

const Ylatunniste = (props) => {
  const { versionumero } = props;

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3 py-0">
      <div className="container">
        <div className="d-flex flex-column">
          <ul className="navbar-nav">
            <li className="nav-item mb-3 margin-custom">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Alkuun
              </Link>
            </li>
            <li className="nav-item mb-3 margin-custom">
              <Link to="/urheilijatieto/lisaa" className="nav-link">
                Lisää urheilijatieto
              </Link>
            </li>
            <li className="nav-item mb-3 margin-custom">
              <Link to="/tietoa" className="nav-link">
                Tietoa sovelluksesta
              </Link>
            </li>
          </ul>
        </div>
        <pre className="pre-header-text">Versio {versionumero} </pre>
      </div>
    </nav>
  );
};

Ylatunniste.defaultProps = {
  versionumero: "1.0.0",
};

Ylatunniste.propTypes = {
  versionumero: PropTypes.string.isRequired,
};

export default Ylatunniste;
