import React from "react";
// import { NavLink } from "react-router-dom";
import web from "../src/images/img1.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common 
      name ='Grow your business with' 
      btname="Get Started" 
      imgsrc={web} visit='/service'/>
    </>
  );
};

export default Home;
