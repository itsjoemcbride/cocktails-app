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
      <>
        <h1>{drink.strDrink}</h1>
        <div className="drink-details">
          <img src={drink.strDrinkThumb} alt={drink.strDrink} width="400px" />
          <div className="text-info">
            <p>{`Name: ${drink.strDrink}`}</p>
            <p>{`Category: ${drink.strCategory}`}</p>
            <p>{`Info: ${drink.strAlcoholic}`}</p>
            <p>{`Glass: ${drink.strGlass}`}</p>
            <p>{`Ingredients: ${drink.strIngredient1}`}</p>
            <p>{`Instructions: ${drink.strInstructions}`}</p>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
}
