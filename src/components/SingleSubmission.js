import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/SingleSubmission.css";

const SingleSubmission = ({ submission }) => {
  return (
    <div className="SingleSubmission container">
      <div className="row align-items-center">
        <div>
          <p className="author">Submitted By: {submission.author}</p>
        </div>
        <p className="d-flex justify-content-between">
          <button className="upvote-btn m-3">
            {submission.upvotes}{" "}
            <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
          </button>
          {submission.content}
        </p>
      </div>
    </div>
  );
};

export default SingleSubmission;
