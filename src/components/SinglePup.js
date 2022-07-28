import React from "react";
import { Link } from "react-router-dom";
import "../css/SinglePup.css";

const SinglePup = (props) => {
  console.log(props.pupId);
  return (
    <div className="SinglePup col-sm-4 p-3 border-bottom">
      <Link to={`/pup/${props.pupId}`}>
        <h2>
          {props.pup.name}, {props.pup.age}
        </h2>
        <img className="img-fluid" src={props.pup.imageUrl} alt="pup" />
        <p>Breed: {props.pup.breed}</p>
      </Link>
    </div>
  );
};

export default SinglePup;
