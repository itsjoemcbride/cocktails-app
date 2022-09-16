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
      <Link className="recipe-btn" to={`/drink/${data.idDrink}`}>
        Details
      </Link>
    </div>
  );
};

export default DrinkCard;
