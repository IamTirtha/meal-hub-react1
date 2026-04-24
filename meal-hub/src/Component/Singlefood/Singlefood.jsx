// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Singlefood.css";

const Singlefood = ({ food }) => {
  return (
    <div className="card">
      <img
        src={food.strMealThumb}
        alt={food.strMeal}
        className="image"
      />

      <div className="content">
        <h2 className="title">{food.strMeal}</h2>
        <p className="text">
          <strong>Category:</strong> {food.strCategory}
        </p>
        <p className="text">
          <strong>Area:</strong> {food.strArea}
        </p>
      </div>
    </div>
  );
};

export default Singlefood;
