import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleBeer() {
  const { id } = useParams();
  const [beer, setBeer] = useState();

  const fetchBeer = async () => {
    try {
      const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
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
  }, [id]);

  return beer ? (
    <div>
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

export default SingleBeer;
