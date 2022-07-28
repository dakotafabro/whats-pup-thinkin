import React from "react";
import SinglePup from "./SinglePup";
import "../css/GalleryAllPups.css";

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

const GalleryAllPups = () => {
  return (
    <div className="GalleryAllPups">
      <h1 className="text-decoration-underline">Gallery of Pups</h1>
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

export default GalleryAllPups;
