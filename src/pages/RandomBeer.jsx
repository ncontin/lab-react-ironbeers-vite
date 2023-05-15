import React from "react";
import Header from "../components/Header";
import { useEffect, useState } from "react";

function RandomBeer() {
  const [beer, setBeer] = useState();

  const fetchBeer = async () => {
    try {
      const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/random`);
      if (response.status === 200) {
        const parsed = await response.json();
        setBeer(parsed);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBeer();
  }, []);

  return beer ? (
    <div>
      <div>
        <Header />
      </div>
      <div className="BeerBox">
        <div className="BeerBoxImg">
          <img src={beer.image_url} alt={`Pic of ${beer.name}`}></img>
        </div>
        <div className="BeerBoxDetails">
          <h3>
            {beer.name} {beer.attenuation_level}
          </h3>
          <h4>
            {beer.tagline} {beer.first_brewed}
          </h4>
          <div>{beer.description}</div>
          <p>
            <strong>Created by:</strong> {beer.contributed_by}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <h1> Loading... </h1>
  );
}

export default RandomBeer;
