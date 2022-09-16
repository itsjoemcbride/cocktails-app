import React, { useEffect } from "react";
import DrinkListing from "../DrinkListing/DrinkListing";
import drinkApi from "../../common/apis/drinkApi";
import { APIKey } from "../../common/apis/DrinkApiKey";
import { useDispatch } from "react-redux";
import { addDrinks } from "../../features/drinks/drinkSlice";
import { useState } from "react";
import "./Home.scss";

const Home = () => {
  const [search, setSearch] = useState("Margarita");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDrinks = async () => {
      const response = await drinkApi
        .get(`${APIKey}/search.php?s=${search}`)
        .catch((err) => {
          console.log("Err :", err);
        });
      dispatch(addDrinks(response.data));
    };

    fetchDrinks();
  });

  return (
    <>
      <div className="banner-img"></div>
      <div className="home-container">
        <div className="search-area">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search cocktails"
            type="text"
            name="q"
          />
        </div>
        <DrinkListing />
      </div>
    </>
  );
};

export default Home;
