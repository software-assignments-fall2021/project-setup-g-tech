import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Restaurants from "../Restaurants/Restaurants";
import axios from "axios";
import "./SavedDistributors.css";

function SavedDistributors() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(
        "https://my.api.mockaroo.com/restaurants.json?key=0b54f900"
      );
      setData(response.data);
    }

    fetchData();
  }, []);

  return (
    <div className="savedListContainer">
      <div className="listHeading">
        <Link to="/usermenu">
          <button className="backToMainPage"> &lt; </button>
        </Link>
        <h1 className="pageTitle"> Saved Distributors </h1>
      </div>
      <hr />
      <div className="listContent">
        <section className="restaurants">
          {data
            .sort((a, b) => a.restaurant_name.localeCompare(b.restaurant_name))
            .map((item) => (
              <Restaurants
                key={item.id}
                img="https://picsum.photos/200"
                details={item}
              />
            ))}
        </section>
      </div>
    </div>
  );
}

export default SavedDistributors;
