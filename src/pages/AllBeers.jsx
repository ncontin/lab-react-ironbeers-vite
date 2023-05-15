import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";

function AllBeers() {
  //Storing the data
  const [beers, setBeers] = useState([]);

  //Fetch Data
  const fetchBeers = async () => {
    try {
      const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers`);
      console.log(response);
      if (response.status === 200) {
        const parsed = await response.json();
        setBeers(parsed);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Timing of fetching the data
  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <div>
      <Header />
      {beers.map((beer) => (
        // image , name , tagline, contributed_by

        <div className="BeerBox" key={beer._id}>
          <Link to={`/beers/${beer._id}`}>
            <div className="BeerBoxImg">
              <img src={beer.image_url} alt={`Pic of ${beer.name}`}></img>
            </div>
            <div className="BeerBoxDetails">
              <h3>{beer.name}</h3>
              <h4>{beer.tagline}</h4>
              <p>
                <strong>Created by:</strong> {beer.contributed_by}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AllBeers;

