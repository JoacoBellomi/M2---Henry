import React from "react";
/* eslint-disable */
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Shipping from "./components/Shipping/Shipping.jsx";
import Promotions from "./components/Promotions/Promotions.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
import { Route, Routes } from "react-router-dom";
/* eslint-disable */

export default function App() {
  return (
  <div>
     <NavBar/>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/shipping' element={<Shipping></Shipping>}></Route>
      <Route path="/promotions" element={<Promotions></Promotions>}></Route>
      <Route path="/cruises/:id" element={<CardDetail></CardDetail>}></Route>
    </Routes>
   </div>
   );
}
