// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Card.css"
const Card = (props) => {
    return (
        <div className="card">
        <img src={props.strMealThumb} alt={props.strMeal} className="image" />

        <div className="content">
            <h2 className="title">{props.strMeal}</h2>
            <p className="text">
            <strong>Category:</strong> {props.strCategory}
            </p>
            <p className="text">
            <strong>Area:</strong> {props.strArea}
            </p>
        </div>
        </div>
    );
};

export default Card;
