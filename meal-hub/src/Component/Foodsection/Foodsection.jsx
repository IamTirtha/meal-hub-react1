// eslint-disable-next-line no-unused-vars
import React from "react";
import Singlefood from "../Singlefood/Singlefood";

const Foodsection = ({ foodData }) => {
  return (
    <div className="food-container">
      {foodData.map((food) => (
        <Singlefood key={food.idMeal} food={food}></Singlefood>
      ))}
    </div>
  );
};

export default Foodsection;
