import React from "react";
import "../css/SubmitPupPic.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubmitPupPic = () => {
  return (
    <div className="SubmitPupPic">
      <h2>
        Upload Your Pup Pic Here{" "}
        <FontAwesomeIcon icon="fa-solid fa-camera-retro" />
      </h2>
      <div
        className="container justify-content-start
    "
      >
        <form className="row">
          <div className="col-sm-12">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name"></input>
          </div>

          <div className="col-sm-12">
            <label htmlFor="breed">Breed: </label>
            <input type="text" name="breed"></input>
          </div>

          <div className="col-sm-12">
            <label htmlFor="birthdate">Birthday: </label>
            <input type="date" name="birthdate"></input>
          </div>

          <div className="col-sm-12">
            <label htmlFor="name">Upload Pup Pic (png/jpeg): </label>
            <input
              type="file"
              name="pup-pic"
              accept="image/png, image/jpeg"
            ></input>
          </div>

          <div className="col-sm-12">
            <input type="submit" value="Submit Pup"></input>
          </div>
        </form>
      </div>

      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </div>
  );
};

export default SubmitPupPic;
