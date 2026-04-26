// import React from 'react';

import Card from "../Card/Card";

const cart = ({cart}) => {
    console.log(cart);
    
    return (
        <div>
            {
            cart.map((c)=>
                <Card
                    strMealThumb={c.strMealThumb}
                    strMeal={c.strMeal}
                    strCategory={c.strCategory}
                    strArea={c.strArea}
                />
            )
            }
        </div>
    );
};

export default cart;