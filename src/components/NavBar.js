import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light NavBarCustom">
      <div className="container-fluid">
        <div className="col-sm-1">
          <Link to="/">
            <FontAwesomeIcon icon="fa-solid fa-paw" className="navbar-logo" />
          </Link>
        </div>

        <div id="navbarNav">
          <ul className="navbar-nav row p-2">
            <li className="nav-item col-sm-8">
              <Link
                to="/submit"
                className="nav-link active"
                aria-current="page"
              >
                Submit Pup Pic
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
