import React, { useEffect, useState } from "react";
import { APIKey } from "../../common/apis/DrinkApiKey";
import { useParams } from "react-router-dom";

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
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        <p>{`
        Name: ${drink.strDrink}
        Category: ${drink.strCategory}\n
        Info: ${drink.strAlcoholic}\n
        Glass: ${drink.strGlass}\n
        Ingredients: ${drink.strIngredient1}
        Instructions: ${drink.strInstructions}\n
        `}</p>
      </>
    );
  } else {
    return null;
  }
}
