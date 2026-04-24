
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/navbar";
import Foodsection from "./Component/Foodsection/Foodsection";

function App() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a") // fetch korlam
      .then((res) => res.json()) // fetched data res e save korlam, jason format a convert korlam
       .then((data) => setFoods(data.meals || [])); //data ke ui e update korlam through setFoods
  }, []);

  return (
    <>
      <Navbar></Navbar>
      
        <Foodsection foodData={foods}></Foodsection>
    </>
  );
}

export default App;
