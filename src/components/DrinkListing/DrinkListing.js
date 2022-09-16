import React from "react";
import { useSelector } from "react-redux";
import { getAllDrinks } from "../../features/drinks/drinkSlice";
import DrinkCard from "../DrinkCard/DrinkCard";
import "./DrinkListing.scss";

const DrinkListing = () => {
  const drinks = useSelector(getAllDrinks);
  let renderDrinks = "";

  // let nest1 = [];
  // Object.entries(drinks?.drinks[key]).map((n1, index) => {
  //   nest1[index] = n1;
  // });
  // console.log(nest1);
  console.log(drinks.drinks);

  renderDrinks =
    Boolean(drinks.drinks) === true ? (
      drinks.drinks.map((drink, index) => {
        console.log("it works maybe");
        return <DrinkCard key={index} data={drink} />;
      })
    ) : (
      <div className="drinks-error">
        <h3>{drinks.Error}</h3>
        <h3>nice try</h3>
      </div>
    );

  return (
    <div className="drink-wrapper">
      <div className="drink-list">
        <h2>Drinks</h2>
        <div className="drink-container">{renderDrinks}</div>
      </div>
    </div>
  );
};

export default DrinkListing;
