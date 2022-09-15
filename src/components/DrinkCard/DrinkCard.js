import React from "react";

const DrinkCard = (props) => {
  const { data } = props;
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={data.strImageSource} alt={data.strDrink} />
          <p>data</p>
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.title}</h4>
            <p>{data.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
