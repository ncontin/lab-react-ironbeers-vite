import React from "react";
import { Link } from "react-router-dom";
import allBeerImage from "../assets/beers.png";
import newBeerImage from "../assets/new-beer.png";
import randomBeerImage from "../assets/random-beer.png";

function HomePage() {
  return (
    <div className="main-page">
      <img src={allBeerImage} alt="beers"></img>
      <div className="main-text">
        <Link to={`/beers`}>All Beers</Link>
        <p>lorem ipsum</p>
      </div>
      <img src={newBeerImage} alt="beers"></img>
      <div className="main-text">
        <Link to={`/random-beer`}>Random Beer</Link>
      </div>
      <img src={randomBeerImage} alt="beers"></img>
      <div className="main-text">
        <Link to={`/new-beer`}>New Beer</Link>
      </div>
    </div>
  );
}

export default HomePage;
