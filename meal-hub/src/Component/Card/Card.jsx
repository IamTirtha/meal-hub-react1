// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Card.css"
import '../Api/api'
import '../Foodsection/Foodsection'
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
            <button onClick={()=>props.addToCart(props)} className="btn-add-to-cart">Add to cart</button>
        </div>
        </div>
    );
};

export default Card;
