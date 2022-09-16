import React, { useEffect } from "react";
import DrinkListing from "../DrinkListing/DrinkListing";
import drinkApi from "../../common/apis/drinkApi";
import { APIKey } from "../../common/apis/DrinkApiKey";
import { useDispatch } from "react-redux";
import { addDrinks } from "../../features/drinks/drinkSlice";
import { useState } from "react";

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
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search cocktails"
        type="text"
        name="q"
      />
      <DrinkListing />
    </>
  );
};

export default Home;
