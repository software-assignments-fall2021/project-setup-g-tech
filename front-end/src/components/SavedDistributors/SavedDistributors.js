import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderTab from "../header-tab/HeaderTab";
import Restaurants from "../Restaurants/Restaurants";
import axios from "axios";
import "./SavedDistributors.css";
import { Link } from 'react-router-dom'


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
      <HeaderTab pageTitle="Saved Distributors"/>
      <div className="listContent">
        <section className="restaurants">
          {data
            .sort((a, b) => a.restaurant_name.localeCompare(b.restaurant_name))
            .map((item) => (
              <Link to='/menu'>     
                <Restaurants
                  key={item.id}
                  img="https://picsum.photos/200"
                  details={item}
                />
              </Link>
            ))}
        </section>
      </div>
    </div>
  );
}

export default SavedDistributors;
