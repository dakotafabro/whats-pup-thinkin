import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top NavBarCustom">
      <div className="container-fluid">
        <div className="col-sm-1">
          <Link to="/">
            <FontAwesomeIcon icon="fas-solid fa-paw" className="navbar-logo" />
          </Link>
        </div>
        <div id="navbarNav">
          <ul className="navbar-nav row">
            <li className="nav-item col-sm-4">
              <Link to="/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item col-sm-4">
              <Link
                to="/submit"
                className="nav-link active"
                aria-current="page"
              >
                Submit
              </Link>
            </li>
            <li className="nav-item col-sm-4">
              <Link to="/gallery" className="nav-link">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
