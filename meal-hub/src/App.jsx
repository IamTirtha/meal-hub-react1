import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/navbar";
import Card from "./Component/Card/Card"

import './Api/api'
import { getPosts } from "./Api/api";



function App() {

  const [data, setData] = useState([]);
  console.log(typeof data);

  useEffect(() => {
    getPosts().then((response) => setData(response?.meals || []));
  }, []);

  return (
    <>
      <Navbar></Navbar>
        <div className="food-section">
          {data.length > 0 ? 
            data.map((e) => <Card key={e.idMeal}
                          strMealThumb={e.strMealThumb}
                          strMeal={e.strMeal}
                          strCategory={e.strCategory}
                          strArea={e.strArea}            
              />
            )
          : 
          <p>No data found</p>
          }
        </div>
      </>
  )}


export default App;
