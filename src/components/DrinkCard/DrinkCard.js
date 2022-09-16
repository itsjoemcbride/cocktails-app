import React from "react";
import { Link } from "react-router-dom";
import "./DrinkCard.scss";

const DrinkCard = (props) => {
  const { data } = props;
  return (
    <div className="card-container">
      <img src={data.strDrinkThumb} alt={data.strDrink} height="250px" />
      <h3>{data.strDrink}</h3>
      <h4>{data.strIBA}</h4>
      <Link to={`/drink/${data.idDrink}`}>
        <button>Recipe</button>
      </Link>
    </div>
  );
};

export default DrinkCard;
