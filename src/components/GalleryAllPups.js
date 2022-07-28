import React from "react";
import SinglePup from "./SinglePup";
import "../css/GalleryAllPups.css";
import { getPups } from "../store/pupReducer";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const pups = [
  {
    id: 0,
    name: "Auggie",
    age: "2",
    breed: "Husky/Boxer",
    imageUrl: "https://i.imgur.com/JUg41lt.gif",
  },
  {
    id: 1,
    name: "Auggie",
    age: "2",
    breed: "Husky/Boxer",
    imageUrl: "https://i.imgur.com/JUg41lt.gif",
  },
  {
    id: 2,
    name: "Auggie",
    age: "2",
    breed: "Husky/Boxer",
    imageUrl: "https://i.imgur.com/JUg41lt.gif",
  },
  {
    id: 3,
    name: "Auggie",
    age: "2",
    breed: "Husky/Boxer",
    imageUrl: "https://i.imgur.com/JUg41lt.gif",
  },
  {
    id: 4,
    name: "Auggie",
    age: "2",
    breed: "Husky/Boxer",
    imageUrl: "https://i.imgur.com/JUg41lt.gif",
  },
  {
    id: 5,
    name: "Auggie",
    age: "2",
    breed: "Husky/Boxer",
    imageUrl: "https://i.imgur.com/JUg41lt.gif",
  },
];

const GalleryAllPups = (props) => {
  return (
    <div className="GalleryAllPups">
      <h1 className="text-decoration-underline">Gallery of Pups</h1>
      <button onClick={props.getAllPups}>click</button>
      <div className="container">
        <div className="row">
          {pups.map((pup) => {
            return <SinglePup key={pup.id} pup={pup} />;
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allPups: state.allPups,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPups: () => {
      dispatch(getPups());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryAllPups);
