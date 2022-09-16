import React, { useEffect, useState } from "react";
import { APIKey } from "../../common/apis/DrinkApiKey";
import { useParams } from "react-router-dom";
import "./DrinkDetail.scss";

export default function DrinkDetail(props) {
  const id = useParams().idDrink;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/${APIKey}/lookup.php?i=${id}`
      );
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, [id]);

  if (data) {
    const drink = data.drinks[0];

    return (
      <div className="details-content">
        <h1>{drink.strDrink}</h1>
        <div className="drink-details">
          <img src={drink.strDrinkThumb} alt={drink.strDrink} width="300px" />
          <div className="text-info">
            <p>{`Name: ${drink.strDrink}`}</p>
            <p>{`Category: ${drink.strCategory}`}</p>
            <p>{`Info: ${drink.strAlcoholic}`}</p>
            <p>{`Glass: ${drink.strGlass}`}</p>
            <p>{`Ingredients:`}</p>
            {/* figure out how to and then implement a for loop here */}
            <div className="ingredient-list">
              <p>
                {drink.strMeasure1} {drink.strIngredient1}
              </p>
              <p>
                {drink.strMeasure2} {drink.strIngredient2}
              </p>
              <p>
                {drink.strMeasure3} {drink.strIngredient3}
              </p>
              <p>
                {drink.strMeasure4} {drink.strIngredient4}
              </p>
              <p>
                {drink.strMeasure5} {drink.strIngredient5}
              </p>
              <p>
                {drink.strMeasure6} {drink.strIngredient6}
              </p>
              <p>
                {drink.strMeasure7} {drink.strIngredient7}
              </p>
              <p>
                {drink.strMeasure8} {drink.strIngredient8}
              </p>
              <p>
                {drink.strMeasure9} {drink.strIngredient9}
              </p>
              <p>
                {drink.strMeasure10} {drink.strIngredient10}
              </p>
              <p>
                {drink.strMeasure11} {drink.strIngredient11}
              </p>
              <p>
                {drink.strMeasure12} {drink.strIngredient12}
              </p>
              <p>
                {drink.strMeasure13} {drink.strIngredient13}
              </p>
              <p>
                {drink.strMeasure14} {drink.strIngredient14}
              </p>
              <p>
                {drink.strMeasure15} {drink.strIngredient15}
              </p>
            </div>
            <p>{`Instructions: ${drink.strInstructions}`}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
