import React, { useEffect } from "react";
import "../css/SinglePupView.css";
import SingleSubmission from "./SingleSubmission";
import { connect } from "react-redux";
import { getSinglePup } from "../store/singlePupReducer";
import { useParams } from "react-router-dom";

const submissions = [
  {
    id: 0,
    author: "Koda",
    upvotes: 25,
    content:
      "Auggie is the king of his home. He is sometimes stoic and others times his tongue is hanging out of his mouth. He looks deep in thought most of the time. He is a big source of happiness for me!",
    date: "05/11/2022",
  },
  {
    id: 1,
    author: "Koda",
    upvotes: 25,
    content:
      "Auggie is the king of his home. He is sometimes stoic and others times his tongue is hanging out of his mouth. He looks deep in thought most of the time. He is a big source of happiness for me!",
    date: "05/11/2022",
  },
  {
    id: 2,
    author: "Koda",
    upvotes: 25,
    content:
      "Auggie is the king of his home. He is sometimes stoic and others times his tongue is hanging out of his mouth. He looks deep in thought most of the time. He is a big source of happiness for me!",
    date: "05/11/2022",
  },
  {
    id: 3,
    author: "Koda",
    upvotes: 25,
    content:
      "Auggie is the king of his home. He is sometimes stoic and others times his tongue is hanging out of his mouth. He looks deep in thought most of the time. He is a big source of happiness for me!",
    date: "05/11/2022",
  },
  {
    id: 4,
    author: "Koda",
    upvotes: 25,
    content:
      "Auggie is the king of his home. He is sometimes stoic and others times his tongue is hanging out of his mouth. He looks deep in thought most of the time. He is a big source of happiness for me!",
    date: "05/11/2022",
  },
  {
    id: 5,
    author: "Koda",
    upvotes: 25,
    content:
      "Auggie is the king of his home. He is sometimes stoic and others times his tongue is hanging out of his mouth. He looks deep in thought most of the time. He is a big source of happiness for me!",
    date: "05/11/2022",
  },
];

const SinglePupView = (props) => {
  let { id } = useParams();

  useEffect(() => {
    props.getSinglePup(id);
  }, []);

  return (
    <div className="SinglePupView container">
      <div className="row align-items-center">
        <div className="img-and-name col-sm-6">
          <img src="https://i.imgur.com/JUg41lt.gif " alt="pup" />
          <p>
            {props.singlePup.name}, {props.singlePup.age} -{" "}
            {props.singlePup.breed}
          </p>
        </div>
        <div className="col-sm-6">
          <h2>What's Pup Thinkin'?</h2>
          <form className="submission-form">
            <div className="d-block">
              <label htmlFor="caption">
                Write what you think pup is thinking in the photo. Submit and
                wait for upvotes!
              </label>
              <br />
              <textarea name="caption"></textarea>
            </div>
            <div className="clear-and-submit-btns">
              <button className="clear-button">Clear</button>
              <input type="submit" value="Submit"></input>
            </div>
          </form>
        </div>
      </div>

      <h2>Submissions</h2>
      <div className="row align-items-center">
        {submissions.map((submission) => {
          return (
            <SingleSubmission key={submission.id} submission={submission} />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    singlePup: state.singlePup,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSinglePup: (id) => {
      dispatch(getSinglePup(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePupView);
