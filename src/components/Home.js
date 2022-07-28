import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="Home container">
      <div className="row align-items-center">
        <div className="col-sm-6">
          <div className="auggie-pic container">
            <div className="row">
              <div className="col-sm-12">
                <img
                  className="thinking-pup"
                  src="https://i.imgur.com/JUg41lt.gif"
                  title="source: imgur.com"
                  alt="thinking-pup"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="home-buttons">
            <h1>What's Pup Thinkin'?</h1>
            <p>A place where creative writing and doggie pics unite</p>
            <Link to="/submit">
              <button>Submit Pup Pics</button>
            </Link>
            <Link to="/gallery">
              <button>Caption Pup Pics</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
