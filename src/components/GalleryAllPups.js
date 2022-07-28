import React, { useEffect, useState } from "react";
import SinglePup from "./SinglePup";
import "../css/GalleryAllPups.css";
import { getPups } from "../store/pupReducer";
import { connect } from "react-redux";

const GalleryAllPups = (props) => {
  let [pups, setPups] = useState(props.allPups);

  useEffect(() => {
    props.getAllPups();
  }, []);

  useEffect(() => {
    setPups(props.allPups);
  }, [props.allPups]);

  return (
    <div className="GalleryAllPups">
      <h1 className="text-decoration-underline">Gallery of Pups</h1>
      <div className="container">
        <div className="row">
          {pups ? (
            pups.map((pup) => {
              return <SinglePup key={pup.id} pup={pup.data} pupId={pup.id} />;
            })
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allPups: state.pups,
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
