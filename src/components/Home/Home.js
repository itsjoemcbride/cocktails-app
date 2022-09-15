import React, { useEffect } from "react";
import DrinkListing from "../DrinkListing/DrinkListing";
import drinkApi from "../../common/apis/drinkApi";
import { APIKey } from "../../common/apis/DrinkApiKey";
import { useDispatch } from "react-redux";
import { addDrinks } from "../../features/drinks/drinkSlice";

const Home = () => {
  const drinkText = "margarita";
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDrinks = async () => {
      const response = await drinkApi
        .get(`${APIKey}/search.php?s=${drinkText}`)
        .catch((err) => {
          console.log("Err :", err);
        });
      dispatch(addDrinks(response.data));
    };

    fetchDrinks();
  }, [dispatch]);

  return (
    <>
      <div className="banner-img"></div>
      <DrinkListing />
    </>
  );
};

export default Home;
