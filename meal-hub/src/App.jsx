import { useEffect, useState } from "react";
import { Suspense } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/navbar";
import Foodsection from "./Component/Foodsection/Foodsection";

import '../src/Component/Api/api'
import { getPosts } from "../src/Component/Api/api";



function App() {

  const [data, setData] = useState([]);
  console.log(typeof data);

  useEffect(() => {
    getPosts().then((response) => setData(response?.meals || []));
  }, []);

  return (
    <>
      <Navbar/>
      <Suspense fallback={<p>loading.....</p>}>
        <Foodsection data={data}/>
      </Suspense>
      

    </>
  )}


export default App;
