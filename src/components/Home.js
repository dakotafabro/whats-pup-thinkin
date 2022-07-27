import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="Home">
      <h1>What's Pup Thinkin'?</h1>
      <p>A place where creative writing and doggie pics unite</p>
      <div className="auggie-pic container">
        <div className="row">
          <div className="col-sm-6">
            <img
              src="https://samuelkleinberg.com/wp-content/uploads/2017/03/no-image.jpg"
              alt="placeholder"
            ></img>
          </div>
          <div className="col-sm-6">
            <img
              src="https://www.pngall.com/wp-content/uploads/6/Comic-Bubble-Speech-PNG-Clipart.png"
              alt="thought"
            ></img>
          </div>
        </div>
      </div>
      <div className="home-buttons">
        <Link to="/submit">
          <button>Submit Pup Pics</button>
        </Link>
        <Link to="/gallery">
          <button>Caption Pup Pics</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
