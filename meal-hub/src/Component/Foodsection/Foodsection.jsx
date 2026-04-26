
// import  React from 'react';
import { useState } from "react";
import Card from '../Card/Card'
import './Foodsection.css'
import Cart from '../Cart/Cart'
const Foodsection = ({data}) => {
    const [cart, setCart] = useState([])

    const addToCart=(food)=>{
        setCart([...cart,food])
    }
    
    return (
        <div className="food-section-parents">
            <div className="food-section">
            {data.length > 0 ? 
            data.map((e) => <Card addToCart={addToCart} key={e.idMeal}
                        strMealThumb={e.strMealThumb}
                        strMeal={e.strMeal}
                        strCategory={e.strCategory}
                        strArea={e.strArea}/>
            ) : <p>No data found</p>
            }
            </div>

            <div className='cart-section'>
                <h1>This is Cart</h1>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Foodsection;